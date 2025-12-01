export type ButtonBg = "white" | "black"
export type ButtonAlign = "left" | "right"

export interface Banner {
  id: number
  title: string | null
  image: string
  buttonAlign: ButtonAlign
  buttonBg: ButtonBg
}

export interface GetBannerResponse {
  data: Banner[]
}
