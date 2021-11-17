import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } from "discord.js";

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

async function handlerSelect(interaction: CommandInteraction<CacheType>): Promise<void> {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);
            await interaction.reply({ content: 'Pong!', components: [row] });
}