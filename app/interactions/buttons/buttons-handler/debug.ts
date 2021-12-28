import {
  ButtonInteraction,
  CacheType,
  Client,
  MessageButton,
} from "discord.js";
import { games } from "../../../game/game";
import { Debug } from "../../../utils/debug";

import { IButton } from "../buttons";

export const buttonDebug: IButton = {
  customId: "buttonDebug",
  label: "Debug",
  style: "SECONDARY",

  handler: handler,
  builder: builder,
};

function builder(): MessageButton {
  return new MessageButton()
    .setCustomId(buttonDebug.customId!)
    .setLabel(buttonDebug.label!)
    .setStyle(buttonDebug.style!);
}

async function handler(
  client: Client,
  interaction: ButtonInteraction<CacheType>
): Promise<void> {
  if (interaction.component?.type !== "BUTTON") return;
  // Debug Zone

  Debug.gameState(games);

  // Debug Zone
  await interaction.deferUpdate();
}
