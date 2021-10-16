import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  IconButton,
  ImageList,
  ImageListItem,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, uploadImage } from "../../store/utils/thunkCreators";
import { Add, FileCopy } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    position: "relative",
    marginTop: 15,
  },
  formControl: {
    position: "relative",
    height: 70,
    marginBottom: 20,
  },
  imageList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageListItem: {
    margin: "0 0.85rem",
    width: "50px !important",
    height: "50px !important",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  addBtn: {
    width: "50px !important",
    height: "50px !important",
  },
  input: {
    height: "100%",
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
  },
  uploadButton: {
    position: "absolute",
    top: "50%",
    right: 5,
    bottom: 0,
    transform: "translateY(-50%)",
  },
  container: {
    width: "100%",
    borderTop: "1px solid #ccc",
    paddingTop: 15,
    marginBottom: "2rem",
    position: "absolute",
    top: 100,
  },
  loaderContainer: {
    position: "absolute",
    top: "50%",
    left: 5,
    bottom: 0,
    transform: "translateY(-50%)",
  },
}));

const renderAttachment = (icon, onChange, disabled) => (
  <>
    {icon}
    <input type="file" hidden onChange={onChange} disabled={disabled} />
  </>
);

const canShowAttachButton = (images = []) => {
  return images.length === 0;
};
const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const doImageUpload = async (formData) => {
    try {
      setUploading(true);
      const data = await uploadImage(formData);
      if (!data) throw new Error("Something went wrong");
      setImagesUrl((urls) => {
        urls.push(data.url);
        return urls;
      });
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  const handleUploadImage = async ({ target }) => {
    const imageSelected = target.files[0];
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "hatchways");
    doImageUpload(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imagesUrl,
    };

    await postMessage(reqBody);
    setImagesUrl([]);
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel className={classes.formControl}>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        {canShowAttachButton(imagesUrl) && (
          <IconButton color="secondary" aria-label="upload image" component="label" className={classes.uploadButton}>
            {renderAttachment(<FileCopy />, handleUploadImage, uploading)}
          </IconButton>
        )}
        {uploading && (
          <Box className={classes.loaderContainer}>
            <CircularProgress color="secondary" />
          </Box>
        )}
      </FormControl>

      {imagesUrl.length > 0 && (
        <Box className={classes.container}>
          <ImageList cols={3} rowHeight={100} className={classes.imageList}>
            {imagesUrl.map((url) => (
              <ImageListItem key={url} className={classes.imageListItem}>
                <img src={url} alt="upload" className={classes.image} />
              </ImageListItem>
            ))}
            <IconButton aria-label="upload image" component="label" className={classes.addBtn}>
              {renderAttachment(<Add />, handleUploadImage, uploading)}
            </IconButton>
          </ImageList>
        </Box>
      )}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
