var TelegramBot = require('node-telegram-bot-api');
var token = "225680439:AAFi0r47Wab1n_p8sdGApuEmP79xPg0a59g";
var bot = new TelegramBot(token, {polling:true});
bot.on('new_chat_participant', function(msg){
  var chatId = msg.chat.id;
  var photo = "M1aF0.png";
  bot.sendPhoto(chatId, photo, {caption: 'Hello and welcome to the WWDC Scholars Telegram group! Here you can discuss pretty much anything with us, so feel free to start chatting!'});
});
// Matches /echo [whatever]
bot.onText(/\/rules/, function (msg, match) {
  var chatId = msg.chat.id;
  var rules = [
    "You do not joke about getting accepted before May 9",
    "In order to say you got accepted, you must show proof in the form of screenshot of email"
  ];
  var rulesText = "";
  for(var i = 0;i<rules.length;i++){
    rulesText+=(""+(i+1)+". "+rules[i]+" \n");
  }
  bot.sendMessage(chatId, rulesText);
});

bot.onText(/\/links/, function (msg, match) {
  var chatId = msg.chat.id;
  var links = [
    "Facebook: https://www.facebook.com/groups/1723154624629772/",
  ];
  for(var i = 0;i<links.length;i++){
    bot.sendMessage(chatId, links[i]);
  }
});

bot.onText(/\/help/, function (msg, match) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "/rules to see the ruls \n /links for links to other groups");
});
