import * as React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'gatsby';
import Layout from 'components/Layout/Layout';

const NotFoundPage = ({location}) => {
    return (
        <Layout title="Страница не найдена" crumbLabel="404" location={location}>
            <Col>
                <h2>Упс, нет такой страницы</h2>
                <h3>
                    Попробуйте перейти на <Link to={'/'}>главную</Link>
                </h3>
            </Col>
        </Layout>
    );
};

export default NotFoundPage;
