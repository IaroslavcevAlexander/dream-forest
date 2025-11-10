

export const data = [
    {
        id: 1,
        img: '/img/icons/running-shoe 1.svg',
        name: 'Обувь',
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
            {
                img: '/img/banerMenuSubCategory.svg',
                price: 570,
                oldPrice: 950,
                currency: 'лей',
            },
        ]
    },
    {
        id: 2,
        img: '/img/icons/fashion 1.svg',
        name: 'Одежда',
        subcategories: [
            { id: 1, title: 'Мужская одежда' },
            { id: 2, title: 'Женская одежда' },
            { id: 3, title: 'Детская одежда' },
        ],
    },
    {
        id: 3,
        img: '/img/icons/diamond 1.svg',
        name: 'Аксесуары',
        subcategories: [
            { id: 1, title: 'Сумки' },
            { id: 2, title: 'Часы' },
            { id: 3, title: 'Очки' },
        ],
    },
] 