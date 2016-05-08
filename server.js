var TelegramBot = require('node-telegram-bot-api');
var token = "225680439:AAFi0r47Wab1n_p8sdGApuEmP79xPg0a59g";
var bot = new TelegramBot(token, {polling:true});
var since = (new Date()) + 600001;
var languages=[];
var locations = [];
bot.on('new_chat_participant', function(msg){
  var chatId = msg.chat.id;
  var photo = "rejection.jpg";
  bot.sendPhoto(chatId, photo, {caption: 'Hello and welcome to the WWDC Scholars Telegram group! Here you can discuss pretty much anything with us, so feel free to start chatting!'});
});
// Matches /echo [whatever]
bot.onText(/\/rules/, function (msg, match) {
  var chatId = msg.chat.id;
  var rules = [
    "You do not joke about getting accepted before May 9",
    "In order to say you got accepted, you must show proof in the form of screenshot of email",
    "If it violates the MLH code of conduct, it probably violates this group's code of conduct too.",
    "Please avoid swearing. What counts as swearing is based on your own (hopefully) good judgement."
  ];
  var rulesText = "The following are the rules for the WWDCScholars Telegram group: \n";
  for(var i = 0;i<rules.length;i++){
    rulesText+=(""+(i+1)+". "+rules[i]+" \n");
  }
  bot.sendMessage(chatId, rulesText);
});

bot.onText(/\/links/, function (msg, match) {
  var chatId = msg.chat.id;
  var links = [
    "Facebook: https://www.facebook.com/groups/1723154624629772/",
    "Gitter: https://gitter.im/WWDCScholars/WWDCScholarsHQ"
  ];
  var linksText = "The following are various WWDCScholars links: \n";
  for(var i = 0;i<links.length;i++){
    linksText+=(links[i]+" \n");
  }
  bot.sendMessage(chatId, linksText);
});

bot.onText(/\/help/, function (msg, match) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "/rules to see the ruls \n/links for links to other groups");
});


bot.onText(/\/welcome/, function (msg, match) {
  var chatId = msg.chat.id;
  var photo = "rejection.jpg";
  bot.sendPhoto(chatId, photo, {caption: 'Hello and welcome to the WWDC Scholars Telegram group! Here you can discuss pretty much anything with us, so feel free to start chatting!'});
});

function howlong(){
  var now = new Date();
  var then = new Date(1462820400000);
  var then = new Date(1462820400000);
  var diffMill = then.getTime() - now.getTime();
  var mills = Math.floor(diffMill % 1000);
  var secs = Math.floor(diffMill/1000) % 60;
  var mins = Math.floor(diffMill/1000/60) % 60;
  var hours = Math.floor(diffMill/1000/60/60) % 24;
  var days = Math.floor(diffMill/1000/60/60/24);
  return days + " day, " + hours + " hours, " + mins + " minutes, " + secs + " seconds, " + mills + " milliseconds";
}

bot.onText(/\/howlong/, function (msg, match) {
  var chatId = msg.chat.id;
  var longString = "There are " + howlong() +" left until you find out. Be patient!";
  bot.sendMessage(chatId, longString);
});

bot.onText(/\/chatId/, function (msg, match) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, chatId);
});

setInterval(function(){
  var now = new Date();
  if(now.getHours() == 12 || now.getHours() == 0){
    var longString = "There are " + howlong() +" left until you find out. Be patient!";
    bot.sendMessage(-140432272, longString);
  }
}, 3600000);


// Matches /echo [whatever]
bot.onText(/\/addlanguage (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1];
  languages.push(resp);
});

bot.onText(/\/addapp (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1];
  bot.sendMessage(-1001058239312, resp);
});

bot.onText(/\/addlocation (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1];
  locations.push(resp);
});

bot.onText(/\/locations/, function (msg, match) {
  var chatId = msg.chat.id;
  var locationText="";
  for(var i=0;i<locations.length;i++){
    locationText+=locations[i]+" \n";
  }
  bot.sendMessage(chatId, locationText);
});

bot.onText(/\/languages/, function (msg, match) {
  var chatId = msg.chat.id;
  var languageText="";
  for(var i=0;i<languages.length;i++){
    languageText+=languages[i]+" \n";
  }
  bot.sendMessage(chatId, languageText);
});
