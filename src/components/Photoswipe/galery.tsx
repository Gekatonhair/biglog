import React from 'react';

import {PhotoSwipeGallery} from 'react-photoswipe';
import './photoswipe.css';
import './default-skin.css';

const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
};

let items = [
    {
        src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
        thumbnail: 'https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1',
    },
    {
        src: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
        thumbnail: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        w: 1200,
        h: 900,
        title: 'Image 2',
    },
    {
        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
        thumbnail: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
        w: 1200,
        h: 900,
        title: 'Image 3',
    },
    {
        src: 'https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg',
        thumbnail: 'https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg',
        w: 1200,
        h: 900,
        title: 'Image 4',
    },
    {
        src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
        thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg',
        w: 1200,
        h: 900,
        title: 'Image 5',
    },
];

//http://photoswipe.com/documentation/options.html
let options = {
    shareEl: false,

};

const getThumbnailContent = (item) => <img src={item.thumbnail} width={120} height={90} />;

const Galery = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: '240px 171px 171px',
            gridTemplateRows: '114px 114px',
            gridGap: 12,
        }}
    >
        <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} style={smallItemStyles} />
    </div>
);

export default Galery;
