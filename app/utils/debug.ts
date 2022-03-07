export enum DebugMode {
  NULL = 0,
  PROD = 1,
  DEV = 2,
}

enum DebugFct {
  LOG,
  WARN,
  ERROR,
  INFO,
  SUCCESS,
  DEBUG,
}

// Faire un dict avec color et fgColor, bgColor
export class Debug {
  static debugLevel: DebugMode = DebugMode.NULL;

  static setDebugLevel(debugLevel: DebugMode): void {
    this.debugLevel = debugLevel;
    this.log(`Switched debugLevel to ${DebugMode[debugLevel]}`);
  }

  static help() : void {
    Debug.log("This is Debug.log")
    Debug.warn("This is Debug.warn")
    Debug.error("This is Debug.error")
    Debug.info("This is Debug.info")
    Debug.success("This is Debug.success")
    Debug.debug("This is Debug.debug")
  }

  private static formatDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${(
      "0" + date.getHours()
    ).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${(
      "0" + date.getSeconds()
    ).slice(-2)}`;
  }

  private static formatMessage(
    debugFct: DebugFct,
    message: string,
    rgb: string = "0"
  ): string {
    return (
      `\x1b[48;2;${rgb}m\x1b[37m | ${DebugFct[debugFct]}${" ".repeat(
        15 - DebugFct[debugFct].length
      )}\x1b[0m` +
      `\x1b[48;2;40;65;80m ${this.formatDate()} \x1b[48;2;${rgb}m \x1b[0m ` +
      `\x1b[38;2;${rgb}m${message}\x1b[0m`
    );
  }

  static log(message: string): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD)
      console.log(this.formatMessage(DebugFct.LOG, message));
    if (this.debugLevel === DebugMode.DEV)
      console.log(this.formatMessage(DebugFct.LOG, message, "40;65;80"));
  }

  static warn(message: string): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD)
      console.log(this.formatMessage(DebugFct.WARN, message));
    if (this.debugLevel === DebugMode.DEV)
      console.log(this.formatMessage(DebugFct.WARN, message, "255;151;54"));
  }

  static error(message: string): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD)
      console.log(this.formatMessage(DebugFct.ERROR, message));
    if (this.debugLevel === DebugMode.DEV)
      console.log(this.formatMessage(DebugFct.ERROR, message, "204;48;49"));
  }

  static info(message: string): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD)
      console.log(this.formatMessage(DebugFct.INFO, message));
    if (this.debugLevel === DebugMode.DEV)
      console.log(this.formatMessage(DebugFct.INFO, message, "0;131;183"));
  }

  static success(message: string): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD)
      console.log(this.formatMessage(DebugFct.SUCCESS, message));
    if (this.debugLevel === DebugMode.DEV)
      console.log(this.formatMessage(DebugFct.SUCCESS, message, "0;205;120"));
  }

  static debug(payload: any): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD) return;
    if (this.debugLevel === DebugMode.DEV) {
      console.log(this.formatMessage(DebugFct.DEBUG, "", "160;90;178"));
      console.log(payload);
    }
  }

  static void(): any {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD) return;
    if (this.debugLevel === DebugMode.DEV) {
      console.log(`\x1b[48;2;40;65;80m\x1b[37m-|------------------------------------\x1b[0m`);
    }
  }

  static gameState(games: any): void {
    if (this.debugLevel === DebugMode.NULL) return;
    if (this.debugLevel === DebugMode.PROD) return;
    if (this.debugLevel === DebugMode.DEV) {
      console.log(this.formatMessage(DebugFct.DEBUG, "", "160;90;178"));
      games.forEach((game: any) => {
        console.log(
          `${game.guildId}|${game.channelId} ${
            game.hasStarted ? "not started" : "started"
          }`
        );
        game.players.forEach((player: any) => {
          console.log(
            `		>${player.displayName} is a ${
              player.role ? player.role : "nothing"
            }`
          );
        });
      });
    }
  }
}
