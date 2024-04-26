const TelegramBot = require('node-telegram-bot-api');
const token = '6712924464:AAEFk92SwvEqdICn7tit9haWVg-1ecwGiRQ';
const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
    {command: `/start`, description: `Boshlash`}
])

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text === "/start") {
        bot.sendMessage(chatId, "Assamu aleykum hurmatli " + msg.chat.first_name + " bizning botimizga xush kelibsiz!")
        bot.sendMessage(chatId, "Ozingizni Joylashuvni belgilang")
        bot.setMyCommands([
            {command: `/start`, description: `Boshlash`}
        ])
    } else if (msg.text === "/help") {
        bot.sendMessage(chatId, "Salom " + msg.chat.first_name + "  qanday yordam bera olaman")
    } else {
        bot.sendMessage(chatId, "Xato kiritdingiz!")
    }
   
});``