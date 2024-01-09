import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {mainMenuItems, productMenuItems} from 'сonstants';
import {getSvgByKey} from 'utils';
import Contacts from 'components/Contacts/Contacts';
import {Link} from 'gatsby';
import Logo from 'static/images/svgs/logo2.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as styles from 'styles/pages/index.module.scss';
import 'styles/index.scss';

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
    <Container fluid className={styles.layout_container}>

        <Row className={`w-100 ${styles.row}`}>
            <Col xs={12} sm={12} md={12} lg={6} className={styles.col_1}>
                {mainMenu}
                <Logo className={styles.logo} />
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
                {productMenu}
            </Col>
        </Row>

        <Row className={`w-100 h-100`}>
            <footer className={styles.footer}>
                <Contacts />
            </footer>
        </Row>

    </Container>
);

export default IndexPage;
