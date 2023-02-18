const telegrambot = require('node-telegram-bot-api')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const bot = new telegrambot('6010691011:AAEWbjgmcLQ1DhoCYxrLsD8YU751JmnAXyY', {
  polling: true
})

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}, 'MAISHIY XIZMATLAR TIZIMLASHTIRILGAN BOTIGA XUSH KELIBSIZ`, {
      reply_markup: JSON.stringify({
          keyboard: [
              [
                  {
                      text: "About me 👩🏻‍🏫"
                  },
                  {
                      text: "Techniques 💻"
                  }
              ],
              [
                  
                  {
                      text: "Projects 💼"
                  },
                  {
                      text: "Contact 📞"
                  }
              ]
              
          ],
          resize_keyboard: true
      })
  })

})


app.listen(PORT, console.log(PORT))