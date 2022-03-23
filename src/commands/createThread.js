const { SlashCommandBuilder } = require("@discordjs/builders");


/*
 *
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName("createThread")
        .setDescription("Creates a new thread")
        .setDefaultPermission(true)
        .addStringOption(option => option
            .setName("threadName")
            .setDescription("Name of the thread")
            .setRequired(true))
        .addStringOption(option => option
            .setName("threadReason")
            .setDescription("Thread reason")
            .setRequired(true))
        .addNumberOption(option => option
            .setName("threadDuration")
            .setDescription("Auto-archive duration")
            .setRequired(true)),
    async execute(interaction) {
        const thread = await channel.threads.create({
            name: `${interaction.options.getString("threadName")}`,
            autoArchiveDuration: interaction.options.getNumber("threadDuration"),
            reason: `${interaction.options.getString("threadReason")}`
        });
        await interaction.reply(`Thread ${thread.name} created!`);
    }
}