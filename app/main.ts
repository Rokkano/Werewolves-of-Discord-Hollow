import { Client, Intents } from "discord.js";

// Using app-module-path module to resolve non-relatives import paths
require('app-module-path').addPath(`${__dirname}/`);
import { Debug, DebugMode } from "utils/debug";
Debug.setDebugLevel(DebugMode.DEV);

import { LocaleService } from "locales/locale-service";

import { buttonList } from "interactions/buttons/buttons";
import { commandList } from "interactions/commands/commands";
const { token, prefix } = require("config/config.json");


export const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("interactionCreate", async interaction => {
  if (interaction.isCommand()) {
    const command = commandList.find(
      command => command.name === interaction.commandName
    );
    if (!command) Debug.error("Command received but not found");
    await command!
      .handler(client, interaction)
      .then(() =>
        Debug.log(`Command received and answered: "${interaction.commandName}"`)
      )
      .catch(() =>
        Debug.error(`Could not answer command "${interaction.commandName}"`)
      );
  }
  if (interaction.isButton()) {
    const button = buttonList.find(
      button => button.customId! === interaction.customId
    );
    if (!button) Debug.error("Button interaction received but not found");
    await button!
      .handler(client, interaction)
      .then(() =>
        Debug.log(
          `Button interaction received and answered: "${interaction.customId}"`
        )
      )
      .catch(() =>
        Debug.error(
          `Could not answer button interaction "${interaction.customId}"`
        )
      );
  }
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  if (!client.user) Debug.error("Could not retrieve client user");
  else Debug.success("Client and user ready");

  const activity = `raconter ${client.guilds.cache.size} ${
    client.guilds.cache.size === 1 ? "histoire" : "histoires"
  }`;
  client.user!.setPresence({
    activities: [{ name: activity, type: "COMPETING" }],
    status: "idle",
  });
});

// Login to Discord with your client's token
client.login(token).then(resultToken => {
  if (resultToken === token) Debug.success(`Client logged in successfully`);
  else
    Debug.error(
      "index.ts : Client logged in but received token is different from sent token"
    );
});

process.on("SIGINT", function () {
  console.log()
  Debug.error("Disconnecting bot");

  // Clearing Node Timers
  clearTimeout();
  clearInterval();

  // Clearing Discord bot
  client.destroy();
  process.exit();
});

