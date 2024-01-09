import * as React from 'react';
import Layout from 'components/Layout/Layout';
import {mainMenuItems} from 'сonstants';

const TITLE = mainMenuItems.termo.title;

const Termo = ({location}) => {
    return (
        <Layout title={TITLE} location={location}>

        </Layout>
    );
};

export default Termo;
