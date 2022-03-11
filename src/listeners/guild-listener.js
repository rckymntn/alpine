const lumberjack = require("../lumberjack");


/*
 *  Logs when a member leaves a guild either voluntarily or by being kicked
 */
module.exports.guildMemberRemove = (client) => {
    client.on("guildMemberRemove", async member => {
        const auditLog = await member.guild.fetchAuditLogs({limit: 1, type: "MEMBER_KICK"}).entries.first();
        const {kicker, kickee} = auditLog;
        if (!auditLog) {
            lumberjack.consoleLogger(`${member.user.tag} left ${client.guild.id}`);
        } else if (kickee.id == member.id) {
            lumberjack.consoleLogger(`${member.user.tag} was kicked from ${client.guild.id} by ${kicker.user.tag}`);
        } else {
            lumberjack.consoleLogger(`${member.user.tag} left ${client.guild.id}`);
        }
    });
}


/*
 *
 */
module.exports.guildBanAdd = (client) => {
    client.on("guildBanAdd", async ban => {

    })
}