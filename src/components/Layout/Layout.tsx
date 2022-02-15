import React, {FC} from 'react';
import {Container, Row} from 'react-bootstrap';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import Contacts from 'components/Contacts/Contacts';
import MainMenu from 'components/MainMenu/MainMenu';
import ProductMenu from 'components/ProductMenu/ProductMenu';
import * as styles from './style.module.scss';

interface IProps {
    children;
    location?;
    title;
    crumbLabel?;
}

const Layout: FC<IProps> = (props) => {
    const {children, title} = props;

    return (
        <Container fluid className={styles.layout_container}>
            <ProductMenu />

            <div className={styles.column}>
                <header>
                    <MainMenu />
                </header>

                <main className={styles.content}>
                    <Row>
                        <Breadcrumb title={title} />
                        <h1>{title}</h1>
                    </Row>

                    <Row className="h-100">{children}</Row>
                </main>

                <footer className={styles.footer}>
                    <Contacts />
                    <p>{`LoftWood.Design © ${new Date().getFullYear()}`}</p>
                </footer>
            </div>
        </Container>
    );
};

export default Layout;
