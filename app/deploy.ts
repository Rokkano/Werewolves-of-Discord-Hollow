import { REST } from "@discordjs/rest";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types";
const { Routes } = require("discord-api-types/v9");

const { clientId, guildId, token } = require("./configs/config.json");
import { Debug, DebugMode } from "./utils/debug";

import { commandList } from "./interactions/commands/commands";

Debug.setDebugLevel(DebugMode.DEV);
Debug.log("Deploying commands on the Discord REST API");

const commands: RESTPostAPIApplicationCommandsJSONBody[] = [];
for (const command of commandList) {
  Debug.log(`Deploying command ${command.name}`);
  commands.push(command.builder().toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => Debug.success("Successfully registered application commands"))
  .catch(() => Debug.error("Could not register application commands"));
