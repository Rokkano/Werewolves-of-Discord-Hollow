import { SlashCommandBuilder } from "@discordjs/builders";
import {
  CacheType,
  Client,
  CommandInteraction,
  MessageActionRow,
  MessageEmbed,
} from "discord.js";
import { createGame } from "game/game";

import { buttonDebug } from "interactions/buttons/buttons-handler/debug";
import { buttonJoin } from "interactions/buttons/buttons-handler/join";
import { buttonLeave } from "interactions/buttons/buttons-handler/leave";
import { ICommand, optionDef } from "interactions/commands/commands";
import { LocaleService } from "locales/locale-service";

export const commandLobby: ICommand = {
  name: "lobby",
  desc: "Start a game lobby",

  optionNumber: [{ name: "timeout", desc: "Timeout in seconds" }],

  handler: handlerLobby,
  builder: builderLobby,
};

function builderLobby(): SlashCommandBuilder {
  return new SlashCommandBuilder()
    .setName(commandLobby.name)
    .setDescription(commandLobby.desc)
    .addNumberOption(
      optionDef(commandLobby.optionNumber![0])
    ) as SlashCommandBuilder;
}

async function handlerLobby(
  client: Client,
  interaction: CommandInteraction<CacheType>
): Promise<void> {
  // await interaction.reply({ embeds: [exampleEmbed] });
  const row = new MessageActionRow()
    .addComponents(buttonJoin.builder())
    .addComponents(buttonLeave.builder())
    .addComponents(buttonDebug.builder());
  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(LocaleService.t("lobby.title"))
    //.setURL("https://discord.js.org")
    .setDescription(LocaleService.t("lobby.description"));

  await interaction.reply({
    embeds: [embed],
    components: [row],
  });

  createGame(client, interaction.guildId, interaction.channelId);

  //  (interaction as unknown as MessageComponentInteraction)
  // setTimeout(() => (message).delete(), 5000);
}
