import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let textTheme = createMuiTheme();
textTheme = responsiveFontSizes(textTheme);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2%',
    flexGrow: 1,
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: 0
  },
  cover: {
    width: "20%",
    maxWidth : 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    // height: 30,
    // width: 40
  },
}));

export default function MusicCard(props) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.cover}
            image = {props.img}
            title="Album Art"
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="h6">
                      <b> {props.title} </b>
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                      <b> Artist </b> : {props.artist}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                      <b> Album </b> : {props.album}
                  </Typography>
                </ThemeProvider>
            </CardContent>
            <div style = {{display: 'flex', justifyContent: "flex-end", alignItems : "flex-start"}}>
              <IconButton aria-label="play/pause" style = {{paddingTop: 0}}>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div>
        </div>

    </Card>
  );    
}
