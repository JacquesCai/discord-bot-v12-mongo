module.exports = client => {
    client.user.setPresence({ activity: { name: '', type: 'PLAYING' } })
}