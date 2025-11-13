import type { MenuData } from "../Menu/index";

export const data: MenuData[] = [
    {
        id: 1,
        img: '/img/icons/running-shoe 1.svg',
        name: 'Обувь',
        baner:           
            {
                img: '/img/banerMenuSubCategory.svg',
                price: 570,
                oldPrice: 950,
                currency: 'лей',
            },
        subcategories: [
            { 
                id: 1, 
                title: 'Мужская обувь',
                subcategories: [
                    {
                        id: 1,
                        name: 'Ботинки',
                    },
                    {
                        id: 2,
                        name: 'Кроссовки',
                    },
                    {
                        id: 3,
                        name: 'Кеды',
                    },

                ]
            },
            { 
                id: 2, 
                title: 'Женская обувь',
                subcategories: [
                    {
                        id: 1,
                        name: 'Сапоги',
                    },
                    {
                        id: 2,
                        name: 'Туфли',
                    },
                    {
                        id: 3,
                        name: 'Мокасины',
                    },

                ]
            },
        ]
    },
    {
        id: 2,
        img: '/img/icons/fashion 1.svg',
        name: 'Одежда',
        subcategories: [
            { 
                id: 1, 
                title: 'Мужская одежда',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз',
                    },
                    {
                        id: 3,
                        name: 'и еше',
                    },

                ]
            },
            { 
                id: 2, 
                title: 'Женская одежда',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам 2',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз 2',
                    },
                    {
                        id: 3,
                        name: 'и еше 2',
                    },

                ]
            },
            { 
                id: 3, 
                title: 'Детская одежда',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам 3',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз 3',
                    },
                    {
                        id: 3,
                        name: 'и еше 3',
                    },

                ]
            },
        ],
    },
    {
        id: 3,
        img: '/img/icons/diamond 1.svg',
        name: 'Аксесуары',
        subcategories: [
            { 
                id: 1, 
                title: 'Сумки',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз',
                    },
                    {
                        id: 3,
                        name: 'и еше',
                    },

                ]
            },
            { 
                id: 2, 
                title: 'Часы',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам 2',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз 2',
                    },
                    {
                        id: 3,
                        name: 'и еше 2',
                    },

                ]
            },
            { 
                id: 3, 
                title: 'Очки',
                subcategories: [
                    {
                        id: 1,
                        name: 'четтам 3',
                    },
                    {
                        id: 2,
                        name: 'четтам еше раз 3',
                    },
                    {
                        id: 3,
                        name: 'и еше 3',
                    },

                ]
            },
        ],
    },
] 