import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, Client, CommandInteraction } from "discord.js";

import { Debug } from "../../../utils/debug";
import { ICommand, optionDef } from "../commands";

export const commandSelect: ICommand = {
  name: "select",
  desc: "Test selectMennu",

  handler: handlerSelect,
  builder: builderSelect,
};

function builderSelect(): SlashCommandBuilder {
  return new SlashCommandBuilder()
    .setName(commandSelect.name)
    .setDescription(commandSelect.desc);
}

async function handlerSelect(
  client: Client,
  interaction: CommandInteraction<CacheType>
): Promise<void> {
  await interaction.reply("Reply");
}
