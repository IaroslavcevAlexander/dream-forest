
export interface CatalogPage {
  id: number
  name: string
  image: string
  description: string
}

export interface GetCatalogPageResponse {
  data: CatalogPage[]
}

export interface GetCategoryResponse {
  data: CatalogPage
}
