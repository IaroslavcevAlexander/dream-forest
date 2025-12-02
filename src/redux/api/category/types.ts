
export interface GetCategoryResponse {
  data: Category[]
}

export interface Category {
    id: number
    name: string
    image: string
    description: string
}