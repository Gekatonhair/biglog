import * as React from "react"
import Layout from 'components/Layout/Layout';
import {productMenuItems} from 'сonstants';
import Galery from "components/Photoswipe/galery";

const TITLE = productMenuItems.tables.title;

const TablesPage: React.FC = () => <Layout title={TITLE} location={location}>
    <p>Изготавливаем столы и столешницы по индивидуальным размерам и дизайну.
       Для изделий из слэбов используем термообработанную древесину, благодаря этому наши изделия с годами не выгибаются и не трескаются.

        <Galery />
   </p>
</Layout>;

export default TablesPage;
