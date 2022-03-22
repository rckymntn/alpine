const lumberjack = require("../lumberjack");


/*
 *  Logs when a member leaves a guild either voluntarily or by being kicked
 */
module.exports.guildMemberRemove = (client) => {
    client.on("guildMemberRemove", async member => {
        const auditLog = await member.guild.fetchAuditLogs({limit: 1, type: "MEMBER_KICK"}).entries.first();
        const {kicker, kickee} = auditLog;
        if (!auditLog) {
            lumberjack.consoleLogger(`${member.user.tag} left ${client.guild.id} with no further information`);
        } else if (kickee.id == member.id) {
            lumberjack.consoleLogger(`${member.user.tag} was kicked from ${client.guild.id} by ${kicker.user.tag}`);
        } else {
            lumberjack.consoleLogger(`${member.user.tag} left ${client.guild.id}`);
        }
    });
}


/*
 *  Logs when a member is banned from a guild and by who 
 */
module.exports.guildBanAdd = (client) => {
    client.on("guildBanAdd", async ban => {
        const auditLog = await ban.guild.fetchAuditLogs({limit: 1, type: "MEMBER_BAN_ADD"}).entries.first();
        const {banner, bannee} = auditLog;
        if (!auditLog) {
            lumberjack.consoleLogger(`${ban.user.id} was banned from ${ban.guild.name} with no further information`);
        } else if (bannee.id == ban.user.id) {
            lumberjack.consoleLogger(`${ban.user.id} was banned from ${ban.guild.name} by ${banner.user.tag}`);
        } else {
            lumberjack.consoleLogger(`${ban.user.id} was banned from ${ban.guild.name}`);
        }
    });
}