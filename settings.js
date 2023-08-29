/*


▒█▀▀█ ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▀▀█▀▀ 
▒█░▄▄ ▒█▀▀█ ▒█░░▒█ ░▀▀▀▄▄ ░▒█░░ 
▒█▄▄█ ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ░▒█░░


WHATSAPP BOT BY ILYAS

WHATSAPP - 212625451590
MY GROUP - https://chat.whatsapp.com/DCu6F9eirLvCo0gB8PgbTw

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " ,true false 
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply true
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , Bio  true
global.AUTO_BIO = true
//👇 Inbox massage block PM block 
global.INBOX_BLOCK = false
//👇 Auto react  
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders 
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['212625451590'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙶𝙷𝙾𝚂𝚃 𝙱𝙾𝚃  ²⁰²³'
//👇 Your Bot Name
global.botnma =  '𝐆𝐇𝐎𝐒𝐓 𓅓'
//👇 Your name
global.ownernma =  '𝗜𝗟𝗬𝗔𝗦 𝗞𝗜' 
//👇 Sticker Author Name
global.packname =  '𝐈𝐋𝐘𝐀𝐒 𝐊𝐈' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🌚'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👻|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b51f7961cc1dc1750aa48.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["212625407041"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-"
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/Ih1udrdBNvX5xSu5mUVdql'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n ",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['212625407041'] //Change  it ,
global.premium = ['212625407041'] //Change it
global.pengguna = 'Ilyas Kamali' // Your name
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'GHOST'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/fe431be0435528710431a.jpg`
global.imgalive = fs.readFileSync('./Media/image/Marshall.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
