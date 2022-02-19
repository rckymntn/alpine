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
        min = 1;
        max = interaction.options.getNumber("faces");
        
        await interaction.reply(`test`);
    }
};