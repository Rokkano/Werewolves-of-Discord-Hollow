require('app-module-path').addPath(`${__dirname}/`);

import { Debug, DebugMode } from "utils/debug";
Debug.setDebugLevel(DebugMode.DEV);

import { LocaleService } from "locales/locale-service"


console.log(LocaleService.getCatalog())
console.log(LocaleService.t("lobby.title"))
console.log(LocaleService.t("lobby.description"))