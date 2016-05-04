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
    "You do not joke about getting accepted before May 9"
  ];
  bot.sendMessage(chatId, "The following are the rules for this chat:");
  for(var i = 0;i<rules.length;i++){
    bot.sendMessage(chatId, ""+(i+1)+". "+rules[i]);
  }
});
