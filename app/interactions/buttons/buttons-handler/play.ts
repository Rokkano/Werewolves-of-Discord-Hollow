import { ButtonInteraction, CacheType, MessageActionRow, MessageButton, MessageButtonStyleResolvable, MessagePayload } from "discord.js";

import { IButton } from "../buttons";

export const buttonPlay: IButton = {
    customId: "buttonPlay",
    label: "Play",
    style: "PRIMARY",

    handler: handler,
    builder: builder,
}

function builder(): MessageButton {
    return new MessageButton()
					.setCustomId(buttonPlay.customId!)
					.setLabel(buttonPlay.label!)
					.setStyle(buttonPlay.style!);
}

async function handler(interaction: ButtonInteraction<CacheType>): Promise<void> {
    if (interaction.component?.type !== "BUTTON")
        return;
    const button = interaction.component as MessageButton;
    button.disabled = true;
    await interaction.update({
        components: [
            new MessageActionRow().addComponents(button),
        ]
    });
    // await interaction.update({ content: 'A button was clicked!', components: [] });
    console.log(interaction.component);
    // await interaction.reply("void");
    // button.setDisabled(true);
}