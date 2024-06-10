interface AccountStatus {
  PENDING: "PENDING";
  CREATING: "CREATING";
  INITING: "INITING";
  RUNNING: "RUNNING";
  STOPPED: "STOPPED";
  DELETED: "DELETED";
}

type AccountPlan = "FREE" | "BUSINESS" | "PRO";

export interface Account {
  id: number;
  name: string;
  status: keyof AccountStatus | null;
  location: string;
  authUserId: string;
  plan: AccountPlan | null;
  network: string | null;
  createdAt: Date;
  updatedAt: Date;
  delete: boolean | null;
}

export type AccountsArray = Account[] | undefined;

export const mockAccounts: AccountsArray = [
  {
    id: 1,
    name: "Account Alpha",
    status: "RUNNING",
    location: "us-west-1",
    authUserId: "user123",
    plan: "PRO",
    network: "192.168.1.1",
    createdAt: new Date("2023-01-15T08:30:00Z"),
    updatedAt: new Date("2023-06-10T10:00:00Z"),
    delete: false,
  },
  {
    id: 2,
    name: "Account Beta",
    status: "PENDING",
    location: "eu-central-1",
    authUserId: "user456",
    plan: "BUSINESS",
    network: "192.168.2.1",
    createdAt: new Date("2023-02-20T11:00:00Z"),
    updatedAt: new Date("2023-06-10T11:00:00Z"),
    delete: false,
  },
  {
    id: 3,
    name: "Account Gamma",
    status: "STOPPED",
    location: "ap-southeast-1",
    authUserId: "user789",
    plan: "FREE",
    network: "192.168.3.1",
    createdAt: new Date("2023-03-05T14:00:00Z"),
    updatedAt: new Date("2023-06-10T12:00:00Z"),
    delete: true,
  },
  {
    id: 4,
    name: "Account Delta",
    status: "CREATING",
    location: "us-east-1",
    authUserId: "user012",
    plan: "PRO",
    network: "192.168.4.1",
    createdAt: new Date("2023-04-10T09:30:00Z"),
    updatedAt: new Date("2023-06-10T13:00:00Z"),
    delete: false,
  },
  {
    id: 5,
    name: "Account Epsilon",
    status: "INITING",
    location: "sa-east-1",
    authUserId: "user345",
    plan: "BUSINESS",
    network: "192.168.5.1",
    createdAt: new Date("2023-05-15T15:00:00Z"),
    updatedAt: new Date("2023-06-10T14:00:00Z"),
    delete: false,
  },
];

