import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Companions() {
  return (
    <ImageList className='imagelist'>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"><h1>Platforms we work with:</h1></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img className='imageItem'
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://thumb.tildacdn.com/tild3635-6264-4461-a439-303233306235/-/resize/240x/-/format/webp/trackensure.png',
    title: 'TruckEnsure',
    author: '@peterlaster',
  },
  {
    img: 'https://thumb.tildacdn.com/tild3461-6233-4461-b639-326665306433/-/resize/360x/-/format/webp/roadstar.png',
    title: 'ROADSTAR',
    author: '@southside_customs',
    cols: 2,
  },
  {
    img: 'https://thumb.tildacdn.com/tild3832-6434-4965-b738-356133333864/-/resize/320x/-/format/webp/image_58_1.png',
    title: 'Blue Star ELD',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thumb.tildacdn.com/tild6134-3563-4433-b966-383861633764/-/resize/320x/-/format/webp/image_49.png',
    title: 'TT ELD',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://thumb.tildacdn.com/tild6337-3266-4165-b665-313036393432/-/resize/320x/-/format/webp/image_59.png',
    title: 'GPS TAB',
    author: '@helloimnik',
  },
  {
    img: 'https://thumb.tildacdn.com/tild6438-3564-4335-b863-396337313734/-/resize/320x/-/format/webp/image_52.png',
    title: 'EZLOGZ',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://thumb.tildacdn.com/tild3434-3931-4330-b338-653736363334/-/resize/320x/-/format/webp/image_53.png',
    title: 'TFM ELD',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://thumb.tildacdn.com/tild3738-6337-4063-a364-613032396665/-/resize/320x/-/format/webp/image_54.png',
    title: 'MASTER ELD',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'SAMSARA',
    author: '@katie_wasserman',
  },
  {
    img: 'https://thumb.tildacdn.com/tild3061-6663-4333-b830-363935643335/-/resize/312x/-/format/webp/big_road_badge.png',
    title: 'Big Road',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://thumb.tildacdn.com/tild3332-3332-4435-b261-363032353236/-/resize/320x/-/format/webp/WORLD_TRUCKING_ELD.jpg',
    title: 'World Trucking Eld',
    author: '@shelleypauls',
  }
];