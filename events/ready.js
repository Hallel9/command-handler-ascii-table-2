module.exports = client => {
    console.log('Logged in!');
    
        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: 'Discord.js Tutorials',
                type: 'STREAMING',
                url: 'https://twitch.tv/sleeplesskyru'
            }
        });
}