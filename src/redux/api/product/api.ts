import { apiService } from "../../api.service"
import type { GetProductResponse } from "./types"

export const apiCategory = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<GetProductResponse, void>({
      query: () => 'products',
    }),
    
  }),

  overrideExisting: false,
})

export const { useGetProductQuery } = apiCategory
