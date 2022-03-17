const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("uwu")
        .setDescription("uwu-ifies text")
        .setDefaultPermission(true)
        .addStringOption(option => option
            .setName("text")
            .setDescription("text to uwu-ify")
            .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(``);
    }
}

function uwuify(string) {
    return "";
}