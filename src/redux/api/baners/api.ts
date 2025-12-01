import { apiService } from "../../api.service"
import type { GetBannerResponse } from "./types"

export const apiBanner = apiService.injectEndpoints({
  endpoints: (build) => ({
    getBanners: build.query<GetBannerResponse, void>({
      query: () => 'banners',
    }),
    
  }),

  overrideExisting: false,
})

export const { useGetBannersQuery } = apiBanner
