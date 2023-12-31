import { SIZE } from ".";

import wicker_1 from 'static/images/originals/pages/fences/wicker_1.jpg';
import wicker_2 from 'static/images/originals/pages/fences/wicker_2.jpg';
import wicker_3 from 'static/images/originals/pages/fences/wicker_3.jpg';

import classic_1 from 'static/images/originals/pages/fences/classic_1.jpg';
import classic_2 from 'static/images/originals/pages/fences/classic_2.jpg';
import classic_3 from 'static/images/originals/pages/fences/classic_3.jpg';

import chess_1 from 'static/images/originals/pages/fences/chess_1.jpg';
import chess_2 from 'static/images/originals/pages/fences/chess_2.jpg';
import chess_3 from 'static/images/originals/pages/fences/chess_3.jpg';

import american_1 from 'static/images/originals/pages/fences/american_1.jpg';
import american_2 from 'static/images/originals/pages/fences/american_2.jpg';
import american_3 from 'static/images/originals/pages/fences/american_3.jpg';

import american_1_thumb from 'static/images/originals/pages/fences/american_1_thumb.jpg';
export const WICKER_TEXT: string = `Горизонтальные доски длиной от 3х до 6ти метров, переплетнные вокруг опорных столбов. Так же,
    как и шахматка имеет одинаково эстетичный вид и с внутренней стороны, но меньший расход метериала, за 
    счет отсутсвия наложения. Просвет минимальный - забор почти сплошной.`;
export const WICKER_ITEMS = [
    {
        src: wicker_1,
        title: WICKER_TEXT,
        ...SIZE
    },
    {
        src: wicker_2,
        title: WICKER_TEXT,
        ...SIZE
    },
    {
        src: wicker_3,
        title: WICKER_TEXT,
        ...SIZE
    },
]
export const CLASSIC_TEXT: string = `Классический вариант, все доски раположены в одной плоскости. Может быть как в горизонтальном, так и вертикальном исполнении. 
    Просвет обязателен, от 5 мм на 1 погонный метр доски.`;
export const CLASSIC_ITEMS = [
    {
        src: classic_1,
        title: CLASSIC_TEXT,
        ...SIZE
    },
    {
        src: classic_2,
        title: CLASSIC_TEXT,
        ...SIZE
    },
    {
        src: classic_3,
        title: CLASSIC_TEXT,
        ...SIZE
    },
]
export const CHESS_TEXT: string = `Более сложный вариантом штакетника, доски смещены относительно друг друга. 
    За счет смещения, просвет почти отсутствует и виден только в упор под острым углом.`;

export const CHESS_ITEMS = [
    {
        src: chess_1,
        title: CHESS_TEXT,
        ...SIZE
    },
    {
        src: chess_2,
        title: CHESS_TEXT,
        ...SIZE
    },
    {
        src: chess_3,
        title: CHESS_TEXT,
        ...SIZE
    },
]
export const AMERICAN_TEXT: string = `Доски расположены под углом, просвет может быть любым.`;
export const AMERICAN_ITEMS = [
    {
        src: american_1,
        thumbnail: american_1_thumb,
        title: AMERICAN_TEXT,
        ...SIZE
    },
    {
        src: american_2,
        title: AMERICAN_TEXT,
        ...SIZE
    },
    {
        src: american_3,
        title: AMERICAN_TEXT,
        ...SIZE
    },
]
