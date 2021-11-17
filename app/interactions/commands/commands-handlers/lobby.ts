import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { buttonPlay } from "../../buttons/buttons-handler/play";

import { Debug } from "../../../utils/debug";
import { ICommand, optionDef } from "../commands";

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
	.addNumberOption(optionDef(commandLobby.optionNumber![0])) as SlashCommandBuilder;
}

async function handlerLobby(interaction: CommandInteraction<CacheType>): Promise<void> {
    Debug.log("Creating game")
    
    // await interaction.reply({ embeds: [exampleEmbed] });
	const row = new MessageActionRow()
			.addComponents(
				buttonPlay.builder()
			);
	const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

	await interaction.reply({ content: 'Pong!', embeds: [embed], components: [row] });



	const message = await interaction.fetchReply() as Message;
	// setTimeout(() => (message).delete(), 5000);
}







const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
