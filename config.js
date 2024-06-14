const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349059174528";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_53_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitPL3lubGlpcjlHV0FGT2x3c2s1OG94dDJ4WUtOZWw2N1pjWjBIYWpWQ2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA1OTE3NDUyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzM0RjkwMDRERjA1M0QyODU1RDc2RDMzRUFEMTBBQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzUxNjM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhrRno3V0pXUURHdDFuNkRTV1F0a0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGU1MDdlNDgtNzU5MC00NzM4LWJmZjEtNWNmZDc1ZTcxZTU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDkyLFxuICAgICAgMzEsXG4gICAgICAxNzIsXG4gICAgICAyLFxuICAgICAgMjQyLFxuICAgICAgOTksXG4gICAgICAxMzIsXG4gICAgICA0MyxcbiAgICAgIDc1LFxuICAgICAgMzIsXG4gICAgICA4OCxcbiAgICAgIDE0MixcbiAgICAgIDE1MixcbiAgICAgIDE3MSxcbiAgICAgIDEyNixcbiAgICAgIDEwNyxcbiAgICAgIDM5LFxuICAgICAgMTcyLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDIzMixcbiAgICAgIDMsXG4gICAgICAyMSxcbiAgICAgIDE0NixcbiAgICAgIDExNSxcbiAgICAgIDYsXG4gICAgICAxMTYsXG4gICAgICAxNDAsXG4gICAgICAxMTksXG4gICAgICAxOTQsXG4gICAgICAxMjksXG4gICAgICA1NixcbiAgICAgIDEzLFxuICAgICAgMjUyLFxuICAgICAgOTgsXG4gICAgICAyOCxcbiAgICAgIDExOSxcbiAgICAgIDkwLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVMRjFITTROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU5MTc0NTI4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJbnp6aXRlY2ggQ3JlYXRpb25zXCIsXG4gICAgXCJsaWRcIjogXCIyNDU5NDMxMTQ5NzczMDA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZkR5Ym9DRUl2dXI3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJxR0QreFBMbGZybkk5SzJWNHgwS3dtVzRMWkUrSmpidGVQQ1ZFT3FoVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN1VQMDY5MUtWcGE3TERLN0xWZlZoc1Z3RW1CcUJDK1JhVkRGM3h1ZjN1c01mL2xWYlNxaFVEUXZlOE9GKzc2U0xTNmwzamZJNTdZK3RJZDhUWXo5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGtpaE53OTdJQ2VpdFg3V041Slc2NHVqT3RncWM2TXpSS3gzRUhBUHc1aWdxSjVSNmRuczZZZzA3Q2xSQzZMdWExVU1WWmRnbEVLMjRJUFNUSUdKanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1OTE3NDUyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNTE2MzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
