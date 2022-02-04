const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Responds hello, name")
        .addStringOption(option => option
            .setName("name")
            .setDescription("Your name")
            .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(`Hello ${option}`);
    }
};