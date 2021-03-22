const { Client, Collection } = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const client = new Client();
const config = require('./config.json')

client.commands = new Collection();
client.aliases = new Collection();
client.mongoose = require('./utils/mongoose');

client.categories = fs.readdirSync('./commands/');

['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});

client.mongoose.init();
client.login(config.token);
