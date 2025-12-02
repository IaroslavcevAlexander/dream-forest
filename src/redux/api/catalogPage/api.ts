import { apiService } from "../../api.service";
import type { Category } from "../category/types";

export const apiCatalogPage = apiService.injectEndpoints({
  endpoints: (build) => ({
    
    // все категории
    getCatalogPage: build.query<Category[], void>({
      query: () => "category",
    }),

    // категория по id
    getCategoryById: build.query<Category, number>({
      query: (id) => `category/${id}`,
    }),

  }),
  overrideExisting: false,
})

export const {
  useGetCatalogPageQuery,
  useGetCategoryByIdQuery
} = apiCatalogPage
