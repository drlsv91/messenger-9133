import { Box, ImageList, ImageListItem, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  imageList: {
    display: "flex",
    alignItems: "center",
    justifyContent: (props) => `flex-${props.direction}`,
  },
  imageListItem: {
    marginLeft: "0.3rem",
    width: (props) => `${props.imageLength > 1 ? 100 : 173}px !important`,
    height: (props) => `${props.imageLength > 1 ? 100 : 150}px !important`,
  },
  image: {
    borderRadius: (props) => `10px 10px ${props.right}px ${props.left}px`,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const renderMessageWithImage = (classes, images, textContent, timeContent, swapPosition) => {
  if (swapPosition)
    return (
      <>
        {timeContent}
        <ImageList cols={2} rowHeight={100} className={classes.imageList}>
          {images.map((url) => (
            <ImageListItem key={url} className={classes.imageListItem}>
              <img src={url} alt="upload" className={classes.image} />
            </ImageListItem>
          ))}
        </ImageList>
        {textContent}
      </>
    );

  return (
    <>
      <Box my={1}>{textContent}</Box>
      <ImageList cols={2} rowHeight={100} className={classes.imageList}>
        {images.map((url) => (
          <ImageListItem key={url} className={classes.imageListItem}>
            <img src={url} alt="upload" className={classes.image} />
          </ImageListItem>
        ))}
      </ImageList>
      {timeContent}
    </>
  );
};

const MessageWithImage = ({
  direction = "start",
  images,
  textContent,
  timeContent,
  others = { leftRadius: 0, rightRadius: 10 },
}) => {
  const classes = useStyles({
    direction,
    left: others.leftRadius,
    right: others.rightRadius,
    imageLength: images.length,
  });
  if (!images) return null;
  return renderMessageWithImage(classes, images, textContent, timeContent, images.length === 1);
};

export default MessageWithImage;
