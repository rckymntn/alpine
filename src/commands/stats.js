/*
 *  Simple command to get familiar with slash commands. 
 *  Will be deleted later. 
 */

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Replies with some server statistics.")
        .setDefaultPermission(true),
    async execute(interaction) {
        await interaction.reply(`test`);
    }
};