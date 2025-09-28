export type MediaType = {
  id: number;
  alt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: string;
  updatedAt: string;
};

export type ExecBoardMember = {
  id: string;
  "full-name": string;
  position: string;
  email: string;
  "telegram-username": string;
  photo: MediaType | null;
};

export type CommitteePosition = {
  id: string;
  "position-name": string;
  status: string;
};

export type Committee = {
  id: string;
  "committee-name": string;
  description: string;
  requirements: string | null;
  position: CommitteePosition[];
};

export type ClusterType = {
  id: number;
  "cluster-name": string;
  createdAt: string;
  updatedAt: string;
};

export type UnitType = {
  id: number;
  "unit-name": string;
  slug?: string;
  cluster: ClusterType;
  description: string;
  "form-link": string;
  logo: MediaType | null;
  "main-pub": MediaType | null;
  "org-chart": MediaType | null;
  "application-process": string;
  "application-timeline": string;
  "executive-board": ExecBoardMember[];
  committees: Committee[];
  updatedAt: string;
  createdAt: string;
};
