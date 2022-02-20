const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Roll a dice with x faces")
        .setDefaultPermission(true)
        .addNumberOption(option => option
            .setName("faces")
            .setDescription("How many faces the dice has")
            .setRequired(true)),
    async execute(interaction) {
        const min = 1;
        const max = interaction.options.getNumber("faces");
        const result = Math.floor(Math.random() * max + min);
        await interaction.reply(`${result}`);
    }
};