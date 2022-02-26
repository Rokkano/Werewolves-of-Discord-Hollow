import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, Client, CommandInteraction } from "discord.js";

import { commandLobby } from "interactions/commands/commands-handlers/lobby";
import { commandSelect } from "interactions/commands/commands-handlers/select";

export type optionDef = { name: string; desc: string };
export const optionDef = (optionDef: optionDef) => (option: any) =>
  option.setName(optionDef.name).setDescription(optionDef.desc);

export interface ICommand {
  // Basic command parameters
  name: string;
  desc: string;

  // Option parameters
  optionString?: optionDef[];
  optionInteger?: optionDef[];
  optionNumber?: optionDef[];
  optionBoolean?: optionDef[];
  optionUser?: optionDef[];
  optionChannel?: optionDef[];
  optionRole?: optionDef[];
  optionMentionable?: optionDef[];

  handler: (
    client: Client,
    interaction: CommandInteraction<CacheType>
  ) => Promise<void>;
  builder: (client?: Client) => SlashCommandBuilder;
}

export const commandList: ICommand[] = [];
commandList.push(commandLobby);
commandList.push(commandSelect);
