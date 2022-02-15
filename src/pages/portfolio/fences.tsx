import * as React from 'react';
import {Col} from 'react-bootstrap';
import Layout from 'components/Layout/Layout';
import {productMenuItems} from 'сonstants';
import Galery from 'components/Photoswipe/galery';

import wicker_1 from 'static/images/originals/pages/fences/wicker_1.jpg';
import wicker_2 from 'static/images/originals/pages/fences/wicker_2.jpg';
import wicker_3 from 'static/images/originals/pages/fences/wicker_3.jpg';

import american_1 from 'static/images/originals/pages/fences/american_1.jpg';
import american_2 from 'static/images/originals/pages/fences/american_2.jpg';
import american_3 from 'static/images/originals/pages/fences/american_3.jpg';

import classic_1 from 'static/images/originals/pages/fences/classic_1.jpg';
import classic_2 from 'static/images/originals/pages/fences/classic_2.jpg';
import classic_3 from 'static/images/originals/pages/fences/classic_3.jpg';

import chess_1 from 'static/images/originals/pages/fences/chess_1.jpg';
import chess_2 from 'static/images/originals/pages/fences/chess_2.jpg';
import chess_3 from 'static/images/originals/pages/fences/chess_3.jpg';

const TITLE = productMenuItems.fences.title;

const SIZE = {
    w: 1280,
    h: 960,
}

const renderWicker = () => {
    const text = `Горизонтальные доски длиной от 3х до 6ти метров, переплетнные вокруг опорных столбов. Так же,
    как и шахматка имеет одинаково эстетичный вид и с внутренней стороны, но меньший расход метериала, за 
    счет отсутсвия наложения. Просвет минимальный - забор почти сплошной.`;

    return (
        <>
            <p>{text}</p>
            <Galery
                items={[
                    {
                        src: wicker_1,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: wicker_2,
                        //thumbnail: wicker_2,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: wicker_3,
                        title: text,
                        ...SIZE
                    },
                ]}
            />
        </>
    );
};

const renderClassic = () => {
    const text = `Классический вариант, все доски раположены в одной плоскости. Может быть как в горизонтальном, так и вертикальном исполнении. 
    Просвет обязателен, от 5 мм на 1 погонный метр доски.`;

    return (
        <>
            <p>{text}</p>
            <Galery
                items={[
                    {
                        src: classic_1,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: classic_3,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: classic_2,
                        title: text,
                        ...SIZE
                    },
                ]}
            />
        </>
    );
};

const renderChess = () => {
    const text = `Более сложный вариантом штакетника, доски смещены относительно друг друга. 
    За счет смещения, просвет почти отсутствует и виден только в упор под острым углом.`;

    return (
        <>
            <p>{text}</p>
            <Galery
                items={[
                    {
                        src: chess_1,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: chess_2,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: chess_3,
                        title: text,
                        ...SIZE
                    },
                ]}
            />
        </>
    );
};

const renderAmerican = () => {
    const text = `Доски расположены под углом, просвет может быть любым.`;

    return (
        <>
            <p>{text}</p>
            <Galery
                items={[
                    {
                        src: american_2,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: american_1,
                        title: text,
                        ...SIZE
                    },
                    {
                        src: american_3,
                        title: text,
                        ...SIZE
                    },
                ]}
            />
        </>
    );
};

const Fences = ({location}) => (
    <Layout title={TITLE} location={location}>
        <Col xs={12} sm={12} md={12} lg={5}>
            <p>Для заборов и фасадов используется древесина хвойных пород (сосна или лиственница).</p>
            <h3>Порядок работ:</h3>
            <ul>
                <li>На ваш участок выезжает наш специалист, который делает замеры, рассчитывает нужное количество материалов;</li>
                <li>Определяемся с видом забора и цветом. Если необходимо - делаем выкрасы на образцах. Цвет может быть любой;</li>
                <li>Срок изготовления составляет 15-30 дней, в зависимости от площади.</li>
            </ul>
            <br />
            <ul>
                <h3>Этапы изготовления:</h3>
                <li>
                    Обжиг дерева - дает возможность получить материал с текстурным древесным рисунком. Помимо эстетичного вида, улучшаются
                    характеристики пиломатериала - доска не нуждается в дополнительной обработке антисептиками и антипиренами, так как
                    благодаря обжигу наружной поверхности дерева, происходит закупорка каналов волокон естественными смолами древесины;
                </li>
                <li>
                    Браширование - механическая выборка мягких волокон древесины. Благодаря брашировке верхний слой доски становится более
                    плотным и менее подверженным механическому воздействию и непогоде;
                </li>
                <li>
                    Пропитка маслом - необходима для полноценной защиты дерева от воздействия окружающей среды. В отличие от покрытия
                    маслом, полностью пропитанная древесина защищена на гораздо более длительный срок и повреждение верхнего слоя не
                    скажется на ее характеристиках;
                </li>
                <li>Тонирование - покрытие видимой стороны доски тонированным маслом;</li>
                <li>
                    Финишное покрытие воском - создает дополнительную защиту, закрывая поры от влаги и тем самым защищая дерево от
                    растрескивания при оледенении.
                </li>
            </ul>
            <br />
            <h3>Цены:</h3>
            <ul>
                <li>
                    Стоимость 1м² забора составляет от 3 тыс. руб. и зависит от вида забора и цвета.
                </li>
                <li>
                    Монтаж оплачивается отдельно и стоит 300-1000 руб. за м², в зависимости от вида забора и типа крепежа (скрытый или
                    наружний);
                </li>
                <li>
                    Доставка бесплатно по Ростову-на-Дону и в радиусе 15 км, так же бесплатно доставляем до терминала любой транспортной
                    компании;
                </li>
                <li>В подарок всегда идёт воск для послегарантийного обслуживания.</li>
            </ul>
        </Col>

        <Col xs={12} sm={12} md={12} lg={{span: 6, offset: 1}}>
            <h3>Виды заборов:</h3>
            <ul>
                <li>
                    <h4>Плетеный</h4>
                    {renderWicker()}
                </li>

                <li>
                    <h4>Классический / штакетник</h4>
                    {renderClassic()}
                </li>

                <li>
                    <h4>Ёлочка / американка / жалюзи</h4>
                    {renderAmerican()}
                </li>



                <li>
                    <h4>Шахматка</h4>
                    {renderChess()}
                </li>

            </ul>
        </Col>
    </Layout>
);

export default Fences;
