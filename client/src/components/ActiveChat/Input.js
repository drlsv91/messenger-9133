import React, { useState } from "react";
import { FormControl, FilledInput, IconButton, ImageList, ImageListItem, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, uploadImage } from "../../store/utils/thunkCreators";
import { AttachFile } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  formControl: {
    position: "relative",
  },
  imageList: {
    position: "absolute",
    zIndex: 1,
  },
  image: {
    height: 50,
    width: 150,
    objectFit: "contain",
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  iconButton: {
    position: "absolute",
    top: 0,
  },
}));

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
      console.log(data);
      setImagesUrl((urls) => {
        urls.push(data.url);
        return urls;
      });
      setUploading(false);
      console.log(data);
    } catch (error) {
      setUploading(false);
    }
  };
  console.log(imagesUrl);
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
    };

    await postMessage(reqBody);
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel className={classes.formControl}>
        <ImageList cols={3} rowHeight={100} className={classes.imageList}>
          {imagesUrl.length > 0 &&
            imagesUrl.map((url) => (
              <ImageListItem key={url} className={classes.imageListItem}>
                <img src={url} alt="upload" className={classes.image} />
              </ImageListItem>
            ))}
        </ImageList>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />

        <IconButton color="primary" aria-label="upload image" component="label" className={classes.uploadButton}>
          <AttachFile />
          <input type="file" hidden onChange={handleUploadImage} />
        </IconButton>
      </FormControl>
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
