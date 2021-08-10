import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import { WorkImageArray } from '../components/workimagearray';
import WorkImage from '../components/WorkImage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 1920,
    height: 1080,
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={1200} className={classes.imageList} cols={3}>
        {WorkImageArray.map((item) => (
          <WorkImage 
            title={item.title} 
            key={item.img} 
            path={item.img} 
            size={item.cols}
          />
        ))}
      </ImageList>
    </div>
  );
}