/*
 *  Responds with some basic information about the bot.
 */

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Replies with some information about the bot.")
        .setDefaultPermission(true),
    async execute(interaction) {
        const bot = interaction.client.user.username;
        await interaction.reply(
            `${bot} is an open source, multipurpose Discord bot written in JavaScript. 
            Use slash commands to interact with the bot. 
            For a list of commands, type "/" and navigate to the ${bot} tab.`
        );
    }
};