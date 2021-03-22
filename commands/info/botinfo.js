const { MessageEmbed } = require('discord.js');
const package = require('../../package.json')
const { version } = require('../../package.json')

module.exports = {
    name: 'botinfo',
    category: 'info',
    description: 'Displays info about the bot.',
    usage: `botinfo`,
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`Info for ${client.user.tag}`)
            .setColor('RANDOM')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(message.author.tag)
            .addField('Client ID', client.user.id)
            .addField('Created At', client.user.createdAt)
            .addField('Verified?', client.user.verified)
            .addField('Partial', client.user.partial)
            .addField('Version', version)
            .addField('discord.js Version', package.dependencies['discord.js'])
            .addField('npm version', package.dependencies['npm'])
            .addField('Main Bot File', package.main)
        message.channel.send(embed)
    }
}
