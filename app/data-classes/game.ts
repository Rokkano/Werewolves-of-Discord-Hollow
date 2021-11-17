import { Guild, Channel, User } from "discord.js";
import { Player } from "./player";

export class Game {
  // Constructor
  constructor(
    guild: Guild,
    lobbyChannel: Channel,
    channel: Channel,
    players: Array<Player>
  ) {
    this._guild = guild;
    this._lobbyChannel = lobbyChannel;
    this._channel = channel;
    this._players = players;
  }

  // Attributes
  private _guild: Guild;
  private _lobbyChannel: Channel;
  private _channel: Channel;
  private _players: Array<Player>;

  // Getters and Setters
  public get guild(): Guild {
    return this._guild;
  }
  public set guild(value: Guild) {
    this._guild = value;
  }
  public get lobbyChannel(): Channel {
    return this._lobbyChannel;
  }
  public set lobbyChannel(value: Channel) {
    this._lobbyChannel = value;
  }
  public get channel(): Channel {
    return this._channel;
  }
  public set channel(value: Channel) {
    this._channel = value;
  }
  public get players(): Array<Player> {
    return this._players;
  }
  public set players(value: Array<Player>) {
    this._players = value;
  }
}
