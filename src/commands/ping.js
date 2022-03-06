/*
 *  Simple command to get familiar with slash commands. 
 *  Will be deleted later. 
 */

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong")
        .setDefaultPermission(true),
    async execute(interaction) {
        await interaction.reply("pong");
    }
};