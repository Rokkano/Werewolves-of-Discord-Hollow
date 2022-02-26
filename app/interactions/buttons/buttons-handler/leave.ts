import {
  ButtonInteraction,
  CacheType,
  Client,
  GuildMember,
  MessageButton,
} from "discord.js";

import { leaveGame } from "game/player";
import { Debug } from "utils/debug";

import { IButton } from "interactions/buttons/buttons";

export const buttonLeave: IButton = {
  customId: "buttonLeave",
  label: "Leave",
  style: "DANGER",

  handler: handler,
  builder: builder,
};

function builder(): MessageButton {
  return new MessageButton()
    .setCustomId(buttonLeave.customId!)
    .setLabel(buttonLeave.label!)
    .setStyle(buttonLeave.style!);
}

async function handler(
  client: Client,
  interaction: ButtonInteraction<CacheType>
): Promise<void> {
  if (interaction.component?.type !== "BUTTON") return;
  await interaction.deferUpdate();
  leaveGame(interaction.guildId, interaction.member as GuildMember);
}
