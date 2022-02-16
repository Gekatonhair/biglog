import * as React from 'react';
import {Col} from 'react-bootstrap';
import Layout from 'components/Layout/Layout';
import paymentsImg from 'static/images/originals/pages/payments.jpg';
import * as styles from 'styles/pages/payments.module.scss';

const TITLE = 'Доставка и оплата';

const Payments = ({location}) => {
    return (
        <Layout title={TITLE} location={location}>
            <Col xs={12} sm={12} md={12} lg={5}>
                <ul>
                    <h2>Оплата</h2>
                    <li>Заключаем договор. Работаем с физическими и юридическими лицами</li>
                    <li>Оплата по реквизитам организации, наличными или безналичный перевод</li>
                    <li>Аванс - 50% или по договоренности с заказчиком</li>
                    <li>После доставки, монтажа и подписания акта о приемке - остальные 50%</li>
                </ul>

                <ul>
                    <h2>Доставка</h2>
                    <li>Бесплатно доставляем по Ростову-на-Дону и в радиусе 15 км</li>
                    <li>Бесплатно до терминала ТК на ваш выбор (ПЭК, Деловые линии, СДЭК)</li>
                </ul>

                <ul>
                    <h2>Гарантия</h2>
                    <li>Даем гарантию минимум 1 год на всю нашу продукцию</li>
                    <li>Бесплатно даем материалы (масла, воски и т.д.) для послегарантийного обслуживания минимум на 3 года</li>
                    <li>Осущесвяляем послегарантийное обслуживание</li>
                </ul>
            </Col>

            <Col xs={12} sm={12} md={12} lg={{span: 6, offset: 1}}>
                <img className={styles.img} src={paymentsImg} alt={''} />
            </Col>

        </Layout>
    );
};

export default Payments;
