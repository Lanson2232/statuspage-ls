var test = require('./index.js');
var os = require('os')
setInterval(()=>{

    test.sendstatus();
    console.log('status Sending to website HOSTNAME: '+ os.hostname()+' LINK: https://sapphire-magenta-wealth.glitch.me/pages/'+os.hostname())


},15000);