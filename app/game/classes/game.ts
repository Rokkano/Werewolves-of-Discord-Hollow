import { Player } from "game/classes/player";

export class Game {
  guildId!: string;
  channelId!: string;

  players: Map<string, Player> = new Map();

  hasStarted: boolean = false;
}
