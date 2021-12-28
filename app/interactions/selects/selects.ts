import {
  CacheType,
  Client,
  MessageComponentType,
  MessageSelectMenu,
  MessageSelectOption,
  SelectMenuInteraction,
} from "discord.js";

export interface ISelect {
  customId?: string;
  disabled?: boolean;
  maxValues?: number;
  minValues?: number;
  options?: Array<MessageSelectOption>;
  placeHolder?: string;
  type?: MessageComponentType;

  handler: (
    client: Client,
    interaction: SelectMenuInteraction<CacheType>
  ) => Promise<void>;
  builder: (client?: Client) => MessageSelectMenu;
}

export const buttonList: ISelect[] = [];
