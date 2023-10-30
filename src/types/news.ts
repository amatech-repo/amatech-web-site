export type NewsType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  place: string;
  eventDate: string;
  imageURL: NewsURLType;
};

export type NewsURLType = {
  url: string;
  height: number;
  width: number;
};

export type NewsListType = {
  contents: NewsType[];
  totalCount: number;
  offset: number;
  limit: number;
};
