import React, { FC } from 'react';
import {Container, Row} from 'react-bootstrap';
import {Breadcrumb} from 'gatsby-plugin-breadcrumb';
import Contacts from 'components/Contacts/Contacts';
import MainMenu from 'components/MainMenu/MainMenu';
import ProductMenu from 'components/ProductMenu/ProductMenu';
import RootPhotoSwipe from 'components/PhotoSwipe/RootPhotoSwipe';

import * as styles from './style.module.less';

interface IProps {
    children, location, title, crumbLabel?
}

const Layout: FC<IProps> = (props) => {
    const { children, location, title, crumbLabel} = props;
    console.log(location);
    return (
        <Container fluid className={styles.layout_container}>
            <ProductMenu />

            <div className={styles.column}>
                <header>
                    <MainMenu />
                </header>

                <main className={styles.content}>
                    <Row>
                        <Breadcrumb location={location} crumbLabel={crumbLabel || title } />
                        <h1>{title}</h1>
                    </Row>

                    <Row className="h-100">{children}</Row>
                </main>

                <footer className={styles.footer}>
                    <Contacts />
                    <p>{`LoftWood.Design © ${new Date().getFullYear()}`}</p>
                </footer>
            </div>

            <RootPhotoSwipe />
        </Container>
    );
};

export default Layout;
