var Discordie = require("discordie");
var Events = Discordie.Events;
var client = new Discordie();

client.connect(
{ 
    token : ""
}
);

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username);
});

//IF YOU RESPECT THE PROJECT, PLEASE DO NOT REMOVE
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "WhatTheBot")
    e.message.channel.sendMessage("https://github.com/Lukkez/WhatTheBot");
});
