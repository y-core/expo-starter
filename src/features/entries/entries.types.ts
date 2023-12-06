export interface IEntries {
  id: number;
  image: string;
  title: string;
  time: string;
  address: string;
  isFree?: boolean | undefined;
}

export interface IEntriesResponse {
  index: (page: number) => Promise<[Error | null, IEntries[] | null]>;
}
