import React from 'react';

import telImg from 'static/images/icons/tel.png';
import instImg from 'static/images/icons/instagram.png';
import mailImg from 'static/images/icons/mail.png';
//import vkImg from 'static/images/icons/vk.png';

import * as styles from './style.module.scss';

const Contacts = () => {
    const t = (val) => val;

    return (
        <nav className={styles.contacts}>
            <a href="tel:+79081706761">
                <img src={telImg} title={t('call')} alt={t('call')} />
            </a>
            <a href="https://www.instagram.com/big.bad.log/" target="_blank">
                <img src={instImg} title={t('instagram')} alt={t('instagram')} />
            </a>
            <a href="mailto:info@biglog.ru" target="_blank">
                <img src={mailImg} title={t('mail')} alt={t('mail')} />
            </a>
            {/*
            <a href="https://vk.com/" target="_blank">
                <img src={vkImg} title={t('call')} alt={t('call')}/>
            </a>
            */}
        </nav>
    );
};

export default Contacts;
