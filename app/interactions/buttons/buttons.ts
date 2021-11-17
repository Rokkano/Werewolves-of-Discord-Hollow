import {
  ButtonInteraction,
  CacheType,
  EmojiIdentifierResolvable,
  MessageButton,
  MessageButtonStyleResolvable,
} from "discord.js";

import { buttonPlay } from "./buttons-handler/play";

export interface IButton {
  label?: string;
  customId?: string;
  style?: MessageButtonStyleResolvable;
  emoji?: EmojiIdentifierResolvable;
  url?: string;
  disabled?: boolean;

  handler: (interaction: ButtonInteraction<CacheType>) => Promise<void>;
  builder: () => MessageButton;
}

export const buttonList: IButton[] = [];
buttonList.push(buttonPlay);
