import React from 'react';
//import * as styles from './style.module.scss';

const YandexMap = () => {
    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5105e5c3af08a83539b30916a40dd30d5321fa3fecf2ef151bbe4be24970b023&amp;source=constructor"
            //width="1280"
            //height="720"
            width="100%"
            height="100%"
            frameBorder="0">
        </iframe>
    );
};

export default YandexMap;
