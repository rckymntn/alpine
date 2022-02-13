/*
 *  Responds with some server statistics. 
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