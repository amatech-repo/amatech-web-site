export type SponsorType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  url?: SponsorURL;
  twitter?: string;
  siteUrl?: string;
};

export type SponsorURL = {
  url: string;
  height: number;
  width: number;
};

export type SponsorListType = {
  contents: SponsorType[];
  totalCount: number;
  offset: number;
  limit: number;
};
