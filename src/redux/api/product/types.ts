
export interface GetProductResponse {
    data: Product[]
}

export interface Product {
    id: number
    name: string
    description: string[]
    color?: string
    isFavorite: Buttons
    inCart: Buttons
    img: string
    memory?: string
    price: Price
    oldPrice?: Price | number
}

interface Price {
    quantity: number
    currency: string
}

interface Buttons {
    status: boolean
}