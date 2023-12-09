import Discord from "discord.js";

export default class CustomClient extends Discord.Client {

    commands;

    constructor(options) {
        super(options);
        this.commands = new Discord.Collection();
    }
}
