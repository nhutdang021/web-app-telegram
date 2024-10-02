const TelegramBot = require("node-telegram-bot-api");
const token = "7602710737:AAHj-_FlwsN-hObQlaKnOe9GY2eCmaBIpAA";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to Mini App!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App",
            web_app: {
              url: "https://1dcf-171-243-48-203.ngrok-free.app/api/data",
            },
          },
        ],
      ],
    },
  });
});

console.log("Bot is running...");
