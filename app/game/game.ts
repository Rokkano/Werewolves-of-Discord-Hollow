import { Client } from "discord.js";
import { Debug } from "../utils/debug";
import { Game } from "./classes/game";

export const games: Map<string, Game> = new Map();

export function createGame(
  client: Client,
  guildId: string,
  channelId: string
): void {
  Debug.log(`Creating new game for ${client.guilds.cache.get(guildId)?.name}`);
  if (games.get(guildId) !== undefined) return;
  const game = new Game();
  game.guildId = guildId;
  game.channelId = channelId;
  games.set(guildId, game);
}
