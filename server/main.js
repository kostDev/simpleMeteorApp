import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/api/messages.js';
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "515368119:AAF0CO8bQgkZpqoR-lE_HRdPr9d61wtX5jk";
const CHAT_ID = '515368119';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome Dear user");
});

// Listen for any kind of message. There are different kinds of
function saveMessage(text, from) {
  Meteor.call('tasks.insert', text, from, false);
}

function saveBotMessage() {
  let text = 'Я еще учусь!';
  Meteor.call('tasks.insert', text, 'bot', true);
  return text;
}
// messages.
bot.on('message', Meteor.bindEnvironment(function (message) {
    saveMessage( message.text, message.from.username);
    let botSay = saveBotMessage();
  bot.sendMessage(message.chat.id, botSay);
  })
);

// (msg) => {
//   const chatId = msg.chat.id;
//   let  date = msg.date;
//   let text = msg.text;
  
//   console.log(msg);
//   // send a message to the chat acknowledging receipt of their message
//   // msg.chat.username
//   // msg.text

//   // write my message from telegram in mongo
//   saveMessage("Я еще учусь! (" + date + ")");
//   bot.sendMessage(chatId, "Я еще учусь! (" + date + ")");
// });

Meteor.startup(() => {
});
