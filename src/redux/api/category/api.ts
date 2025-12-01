import { apiService } from "../../api.service"
import type { GetCategoryResponse } from "./types"

export const apiCategory = apiService.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<GetCategoryResponse, void>({
      query: () => 'categories',
    }),
    
  }),

  overrideExisting: false,
})

export const { useGetCategoriesQuery } = apiCategory
