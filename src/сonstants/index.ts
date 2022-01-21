//type TMenu = Record<string, {path: string; title: string}>;

export const mainMenuItems = {
    main: {
        path: '/',
        title: 'Главная',
    },
    /*articles: {
        path: '/articles',
        title: 'Статьи',
    },*/
    payments: {
        path: '/payments',
        title: 'Доставка\u00A0и\u00A0оплата',
    },
    about: {
        path: '/about',
        title: `О\u00A0нас`,
    },
    contacts: {
        path: '/contacts',
        title: 'Контакты',
    },
};

export const productMenuItems  = {
    facades: {
        path: '/portfolio/facades',
        title: 'Фасады\u00A0и\u00A0заборы',
    },
    tables: {
        path: '/portfolio/tables',
        title: 'Столы,\u00A0столешницы\u00A0и барные\u00A0стойки',
    },
    ladder: {
        path: '/portfolio/ladder',
        title: 'Лестницы\u00A0и ступени',
    },
    kitchen: {
        path: '/portfolio/kitchen',
        title: 'Кухни,\u00A0фасады\u00A0и мебель\u00A0для\u00A0хранения',
    },
    decor: {
        path: '/portfolio/decor',
        title: 'Освещение\u00A0и\u00A0декор',
    },
}
