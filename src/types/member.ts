export type MembersType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  imageUrl: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  role: string[];
  age: string[];
  twitter: string;
  instagram: string;
  github: string;
};

export type MembersListType = {
  contents: MembersType[];
  totalCount: number;
  offset: number;
  limit: number;
};
