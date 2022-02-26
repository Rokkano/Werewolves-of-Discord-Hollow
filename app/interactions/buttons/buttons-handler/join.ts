import {
  ButtonInteraction,
  CacheType,
  Client,
  GuildMember,
  MessageButton,
} from "discord.js";

import { joinGame } from "game/player";
import { Debug } from "utils/debug";

import { IButton } from "interactions/buttons/buttons";

export const buttonJoin: IButton = {
  customId: "buttonJoin",
  label: "Join",
  style: "SUCCESS",

  handler: handler,
  builder: builder,
};

function builder(): MessageButton {
  return new MessageButton()
    .setCustomId(buttonJoin.customId!)
    .setLabel(buttonJoin.label!)
    .setStyle(buttonJoin.style!);
}

async function handler(
  client: Client,
  interaction: ButtonInteraction<CacheType>
): Promise<void> {
  if (interaction.component?.type !== "BUTTON") return;
  await interaction.deferUpdate();
  joinGame(interaction.guildId, interaction.member as GuildMember);
}
