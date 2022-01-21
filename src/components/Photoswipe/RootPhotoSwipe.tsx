import React from 'react';
import { PhotoSwipe} from 'react-photoswipe';
//import {PhotoSwipe} from 'react-photoswipe';

/*import './node_modules/photoswipe/dist/photoswipe.css';
import '../../node_modules/photoswipe/dist/default-skin/default-skin.css';
import PhotoSwipe from '../../node_modules/photoswipe/dist/photoswipe.js';
import PhotoSwipeUI_Default from '../../node_modules/photoswipe/dist/photoswipe-ui-default.js';*/

const RootPhotoSwipeWrapper = () => {

    let isOpen = false;

    let items = [
        {
            src: 'http://lorempixel.com/1200/900/sports/1',
            w: 1200,
            h: 900,
            title: 'Image 1',
        },
        {
            src: 'http://lorempixel.com/1200/900/sports/2',
            w: 1200,
            h: 900,
            title: 'Image 2',
        },
    ];

    let options = {
        //http://photoswipe.com/documentation/options.html
    };

    const handleClose = () => {
        isOpen: false;
    };

    return <PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose} />;
};

export default RootPhotoSwipeWrapper;
