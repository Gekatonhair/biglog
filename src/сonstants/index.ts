type TMenu = Record<string, {path: string; title: string}>;

export const mainMenuItems: TMenu = {
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

export const productMenuItems: TMenu  = {
    fences: {
        path: '/portfolio/fences',
        title: 'Заборы\u00A0и\u00A0фасады',
    },
    /*tables: {
        path: '/portfolio/tables',
        title: 'Столы,\u00A0столешницы и\u00A0барные\u00A0стойки',
    },
    ladder: {
        path: '/portfolio/ladder',
        title: 'Лестницы\u00A0и\u00A0ступени',
    },
    kitchen: {
        path: '/portfolio/kitchen',
        title: 'Кухни\u00A0и\u00A0мебель\u00A0для хранения',
    },
    decor: {
        path: '/portfolio/decor',
        title: 'Освещение\u00A0и\u00A0декор',
    },*/
}
