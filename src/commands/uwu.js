const { SlashCommandBuilder } = require("@discordjs/builders");

/*
 *  uwuifies text 
 */
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
        await interaction.reply(`${uwuify(interaction.options.getString("text"))}`);
    }
}


/*
 *  Helper function for uwuifying text
 */
function uwuify(string) {
    string.toLowerCase();
    string = string.replace("l", "w");
    string = string.replace("r", "w");
    return string;
}