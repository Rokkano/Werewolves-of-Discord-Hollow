import { GuildMember, User } from "discord.js";

import { Debug } from "utils/debug";
import { Player } from "game/classes/player";
import { games } from "game/game";

export function joinGame(guildId: string, member: GuildMember): void {
  Debug.log(`User ${member.displayName} joined the lobby`);
  const game = games.get(guildId);

  if (game === undefined) return;
  if (game.players.get(member.user.id) !== undefined) return;

  const player: Player = new Player();
  player.id = member.user.id;
  player.userName = member.user.username;
  player.displayName = member.displayName;

  game.players.set(member.user.id, player);
}

export function leaveGame(guildId: string, member: GuildMember): void {
  Debug.log(`User ${member.displayName} left the lobby`);
  const game = games.get(guildId);

  if (game === undefined) return;
  if (game.players.get(member.user.id) === undefined) return;

  game.players.delete(member.user.id);
}
