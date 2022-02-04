import React from 'react';

import {PhotoSwipeGallery} from 'react-photoswipe';
import './photoswipe.css';
import './default-skin.scss';

const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    height: 'auto'
};

const BASE_STYLE: React.CSSProperties = {
    /*display: 'grid',
    gridTemplateColumns: '240px 171px 171px',
    gridTemplateRows: '114px 114px',
    gridGap: 12,*/
    display: 'flex',
};

//http://photoswipe.com/documentation/options.html
let options = {
    shareEl: false,
};

const getThumbnailContent = (item) => (
    <img
        src={item.thumbnail || item.src}
        style={smallItemStyles}
        width={item?.thumbnailWidth || 220}
        height={item?.thumbnailHeight || 165}
    />
);

const Galery = ({items, style = BASE_STYLE}) => (
    <div style={style}>
        <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} style={style}/>
    </div>
);

export default Galery;
