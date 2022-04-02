const Discord = require('discord.js');
const db = require('megadb');
const squad = new db.crearDB('squad');

module.exports = {
  name: "leave",
  alias: ["salir", "salte"],

  execute(client, message, args) {
    if (!squad.has(message.author.id)) return
    if (message.guild.id == "") return message.channel.send("Que haces mongolito")
    message.delete();

    let id = args[0];
    if (!id) return message.channel.send("Coloca la id para salir de ese servidor!");
    if (client.guilds.cache.get(id)) {
      const guild = client.guilds.cache.get(id);
      guild.leave();
      message.channel.send("__**He salido correctamente del servidor**__ " + client.guilds.cache.get(id).name).then(message => message.delete(3000))
    } else {
      message.channel.send("__**No estoy en ese servidor o has puesto la id mal**__");
    }

  }

} 
