export type MembersType = {
  imagePath: string;
  name: string;
  role?: string;
  grade: string;
  twitter?: string;
  instagram?: string;
  github?: string;
};

export type MembersListType = {
  members: MembersType;
}[];
