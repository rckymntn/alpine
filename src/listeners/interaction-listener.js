/*
 *  interaction related listeners
 */


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
                await command.execute(interaction);
            } catch(error) {
                console.log(error);
                await interaction.reply({content: `Error: ${error}`, ephemeral: true});
            }
        }
    });
}