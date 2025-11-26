interface TagItem {
  name: string;
}

interface PriceItem {
  from: number;
  to: number;
}

interface StrapTypeItem {
  material?: string;
  brand?: string;
}

interface FilterBase {
  id: number;
  title: string;
}

interface FilterTags extends FilterBase {
  tags: TagItem[];
}

interface FilterPrice extends FilterBase {
  price: PriceItem[];
}

interface FilterType extends FilterBase {
  tipe: StrapTypeItem[];
}

export type FilterData = FilterTags | FilterPrice | FilterType

export interface Props {
    data: FilterData[]
}