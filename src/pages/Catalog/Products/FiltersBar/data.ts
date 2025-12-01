
export const data = [

    {
        id: 1,
        name: 'Тип',
        type: 'select' as const,
        values: [
            {
                name: 'Все',
            },
            {
                name: 'На скидке',
            },
            {
                name: 'Новинки',
            },
        ]
    },
    {
        id: 2,
        name: 'Цена',
        type: 'number' as const,
        min: 340,
        max: 14999,
    },
    {
        id: 3,
        name: 'Тип ремешка',
        type: 'multiselect' as const,
        values: [
            {
                name : 'Кожа',
            },
            {
                name: 'Метал',
            },
            {
                name: 'Резиновые',
            },
            {
                name: 'Искусственная',
            },

        ]
    },
    {
        id: 4,
        name: 'Бренд',
        type: 'multiselect' as const,
        values: [
            {
                name: 'Emperio Armani',
            },
            {
                name: 'Rolex',
            },
            {
                name: 'BOSS',
            },
            {
                name: 'Casio',
            },
        ]
    },
]