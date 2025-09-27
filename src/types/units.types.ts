export type ExecBoardMember = {
  id: string;
  fullName: string;
  position: string;
  email: string;
  telegramUsername: string;
  photo: string | null;
};

export type CommitteePosition = {
  id: string;
  positionName: string;
  status: string;
};

export type Committee = {
  id: string;
  committeeName: string;
  description: string;
  requirements: string | null;
  position: CommitteePosition[];
};

export type UnitType = {
  id: number;
  unitName: string;
  slug: string;
  description: string;
  formLink: string;
  logo: string | null;
  mainPub: string | null;
  applicationProcess: string;
  executiveBoard: ExecBoardMember[];
  committees: Committee[];
  updatedAt: string;
  createdAt: string;
};
