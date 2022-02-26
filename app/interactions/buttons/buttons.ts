import {
  ButtonInteraction,
  CacheType,
  Client,
  EmojiIdentifierResolvable,
  MessageButton,
  MessageButtonStyleResolvable,
} from "discord.js";

import { buttonDebug } from "interactions/buttons/buttons-handler/debug";
import { buttonJoin } from "interactions/buttons/buttons-handler/join";
import { buttonLeave } from "interactions/buttons/buttons-handler/leave";

export interface IButton {
  label?: string;
  customId?: string;
  style?: MessageButtonStyleResolvable;
  emoji?: EmojiIdentifierResolvable;
  url?: string;
  disabled?: boolean;

  handler: (
    client: Client,
    interaction: ButtonInteraction<CacheType>
  ) => Promise<void>;
  builder: (client?: Client) => MessageButton;
}

export const buttonList: IButton[] = [];

buttonList.push(buttonJoin);
buttonList.push(buttonLeave);
buttonList.push(buttonDebug);
