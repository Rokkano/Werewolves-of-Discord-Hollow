import { Roles } from "../enums/roles";

export class Player {
  id!: string;
  userName!: string;
  displayName!: string;

  role?: Roles;
}
