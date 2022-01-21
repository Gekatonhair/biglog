import React, {useState} from 'react';
import {productMenuItems} from 'сonstants';
import cx from 'classnames';
import {getSvgByKey} from 'utils';

import * as styles from './style.module.less';

const ProductMenu = ({isShowIcon = true}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const classNames = isMenuOpen ? cx(styles.product_menu, styles.active) : styles.product_menu;

    const menuIconClick = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={classNames}>
            <div className={styles.icon} onClick={menuIconClick}>
                <div className={styles.line}></div>
            </div>
            <ul className={styles.list}>
                {Object.keys(productMenuItems).map((key) => {
                    const title: string = productMenuItems[key].title;
                    const path: string = productMenuItems[key].path;
                    return (
                        <li key={`${key}`}>
                            <a href={path} title={title}>
                                <div className={styles.listIcon}>
                                    {isShowIcon && getSvgByKey(key)} 
                                </div>
                                <p className={styles.text}>{title}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default ProductMenu;
