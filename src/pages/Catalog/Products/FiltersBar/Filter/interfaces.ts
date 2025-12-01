
export interface BaseFilter {
  id: number
  name: string
}

export interface SelectFilter extends BaseFilter {
  type: "select"
  values: { name: string }[]
}

export interface NumberFilter extends BaseFilter {
  type: "number"
  min: number
  max: number
}

export interface MultiSelectFilter extends BaseFilter {
  type: "multiselect"
  values: { name: string }[]
}

export type FilterData =
  | SelectFilter
  | NumberFilter
  | MultiSelectFilter

export interface Props {
  data: readonly FilterData[]
}