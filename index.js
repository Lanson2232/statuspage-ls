var axios = require('axios');
var os = require('os-utils');
var osi = require('os');
var cpuStat = require('cpu-stat');
function format(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
  var express = require('express');
  var app = express();
  
  app.get("/", function (request, response) {
  
  
    response.sendStatus(200);
  });
module.exports = {


 sendstatus: async function(){

var cpu = '';
var cpupr ='';
var ram = '';
var platform = '';
var uptime = '';
var id = '';

   


 




cpuStat.usagePercent(function(err, percent, seconds) {
  if (err) {
      return console.log(err);
  }
    uptime = process.uptime()
    id = osi.hostname();
  var up =  format(uptime); 
  var used = process.memoryUsage().heapUsed / 1024 / 1024;
  ram = Math.round(used * 100) / 100;
  platform = os.platform();
  cpupr = percent.toFixed(2);
cpum = osi.cpus().map(i => i.model)[0];
var cpuCount = os.cpuCount();


  axios.post('https://statuspage-ls.glitch.me/save', {
       
          cpu:cpupr,
          cpum:cpum,
          cpuc:cpuCount,
          ram:ram,
          uptime:up,
          id:id,
          platform:platform

        
      }).then((res) => {
        if(res.statusCode == 200){
          return;
        }
      
      })
      .catch((error) => {
     console.error('statuspage-ls You are sending to Fast Pls slow down or you get blacklisted');
      });

    });
     
    







   

    



 }






};
