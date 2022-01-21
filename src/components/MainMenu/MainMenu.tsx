import React from 'react';
import {Link} from 'gatsby';
import {mainMenuItems} from 'сonstants';
import Logo from 'static/images/svgs/logo.svg';
import * as styles from './style.module.less';

const MainMenu = ({className = styles.mainMenu}) => (
    <div className={className}>
        <Link to="/" className={styles.logo}>
            <Logo height={'inherit'} width={'inherit'} />
        </Link>

        <ul className="main-menu-list">
            {Object.keys(mainMenuItems).map((key) => {
                const title: string = mainMenuItems[key].title;
                const path: string = mainMenuItems[key].path;
                return (
                    <li className="main-menu__item" key={`main-menu-item__${key}`}>
                        <Link to={path}>{title}</Link>
                    </li>
                );
            })}
        </ul>
    </div>
);

export default MainMenu;
