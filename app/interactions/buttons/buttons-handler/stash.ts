import {
  ButtonInteraction,
  CacheType,
  MessageActionRow,
  MessageButton,
} from "discord.js";

async function handler(
  client: Client,
  interaction: ButtonInteraction<CacheType>
): Promise<void> {
  if (interaction.component?.type !== "BUTTON") return;
  const button = interaction.component as MessageButton;
  button.disabled = true;
  await interaction.update({
    components: [new MessageActionRow().addComponents(button)],
  });
  // await interaction.update({ content: 'A button was clicked!', components: [] });
  console.log(interaction.component);
  // await interaction.reply("void");
  // button.setDisabled(true);
}

//export type Interaction =
//  | AutocompleteInteraction<CacheType>
//  | ButtonInteraction<CacheType>
//  | CommandInteraction<CacheType>
//  | ContextMenuInteraction<CacheType>
//  | MessageComponentInteraction<CacheType>
//  | SelectMenuInteraction<CacheType>;
