/*
 *  All encompassing example command.
 */

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Name")

        .setDescription("Description")

        .addStringOption(stringOption => stringOption
            .setName("String option")
            .setDescription("String option description"))

        .addIntegerOption(integerOption => integerOption
            .setName("Integer option")
            .setDescription("Integer option description"))

        .addNumberOption(numberOption => numberOption
            .setName("Number option")
            .setDescription("Number option description"))

        .addBooleanOption(booleanOption => booleanOption
            .setName("Boolean option")
            .setDescription("Boolean option description"))

        .addUserOption(userOption => userOption
            .setName("User option")
            .setDescription("User option description"))

        .addChannelOption(channelOption => channelOption
            .setName("Channel option")
            .setDescription("Channel option description"))

        .addRoleOption(roleOption => roleOption
            .setName("Role option")
            .setDescription("Role option description"))

        .addMentionableOption(mentionableOption => mentionableOption
            .setName("Mentionable option")
            .setDescription("Mentionable option description")),
        
        async execute(interaction) {
            await interaction.reply(`stringOption:      ${stringOption}\n
                                     integerOption:     ${integerOption}\n
                                     numberOption:      ${numberOption}\n
                                     booleanOption:     ${booleanOption}\n
                                     userOption:        ${userOption}\n
                                     channelOption:     ${channelOption}\n
                                     roleOption:        ${roleOption}\n
                                     mentionableOption: ${mentionableOption}`);
        }
};