export interface ItemPageParam {
  sort: {
    order: string;
    sortBy: string;
  }
  filter: {
    key: string,
    value: string
  }
}