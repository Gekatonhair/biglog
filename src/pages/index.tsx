import * as React from 'react';
import {mainMenuItems, productMenuItems} from 'сonstants';
import {getSvgByKey} from 'utils';
import Contacts from 'components/Contacts/Contacts';
import {Link} from 'gatsby';
import Logo from 'static/images/svgs/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as styles from 'styles/pages/index.module.less';
import 'styles/index.less';

const mainMenu: JSX.Element = (
    <nav className={styles.mainMenu}>
        <ul>
            {Object.keys(mainMenuItems).map((key) => {
                const title: string = mainMenuItems[key].title;
                const path: string = mainMenuItems[key].path;
                return key !== 'main' ? (
                    <li key={key}>
                        <div className={styles.dd}>
                            <Link to={path}>
                                <div className={styles.link}>{title}</div>
                            </Link>
                        </div>
                    </li>
                ) : (
                    <></>
                );
            })}
        </ul>
    </nav>
);

const productMenu: JSX.Element = (
    <nav className={styles.productMenu}>
        <ul>
            {/* @ts-ignore */}
            {Object.keys(productMenuItems).map((key: keyof typeof productMenuItems) => {
                const title: string = productMenuItems[key].title;
                const path: string = productMenuItems[key].path;
                return (
                    <li key={key}>
                        <a href={path}>
                            <div className={styles.listIcon}>{getSvgByKey(key)}</div>
                            <p className={styles.text}>{title}</p>
                        </a>
                    </li>
                );
            })}
        </ul>
    </nav>
);

const IndexPage = () => (
    <div className={styles.content}>
        <main className={styles.main}>
            <div className={styles.column}>
                <div className={styles.margin}> </div>
                <Logo className={styles.logo} />
                {mainMenu}
            </div>
            <div className={styles.column}>{productMenu}</div>
        </main>
        <footer className={styles.footer}>
            <Contacts />
        </footer>
    </div>
);

export default IndexPage;
