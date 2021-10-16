import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MessageWithImage from "./MessageWithImage";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "50%",
    marginLeft: "auto",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
}));

const renderText = (text, classes) => (
  <Box className={classes.bubble}>
    <Typography className={classes.text}>{text}</Typography>
  </Box>
);

const renderTime = (time, classes) => <Typography className={classes.date}>{time}</Typography>;

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      {attachments && attachments.length > 0 ? (
        <MessageWithImage
          others={{ leftRadius: 10, rightRadius: 0 }}
          direction="end"
          images={attachments}
          textContent={renderText(text, classes)}
          timeContent={renderTime(time, classes)}
        />
      ) : (
        <>
          {renderTime(time, classes)}
          {renderText(text, classes)}
        </>
      )}
    </Box>
  );
};

export default SenderBubble;
