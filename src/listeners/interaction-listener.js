/*
 *  interaction related listeners
 */


const lumberjack = require("../lumberjack");


/* 
 *  This will run on every interaction (slash command)
 *  and execute functions accordingly. 
 */
module.exports.interactionCreate = (client) => {
    client.on("interactionCreate", async interaction => {
        if (!interaction.isCommand()) {
            return;
        } else {
            const command = client.commands.get(interaction.commandName);
            if (!command) {
                return;
            }
            try {
                await command.execute(interaction).then(lumberjack.consoleLogger(`${interaction.user.username} used "${interaction}" and succeeded`));
            } catch(error) {
                lumberjack.consoleLogger(`${interaction.user.username} used "${interaction}" and failed`)
                await interaction.reply({content: `Error: ${error}`, ephemeral: true});
            }
        }
    });
}