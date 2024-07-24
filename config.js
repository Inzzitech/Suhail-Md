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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_31_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidlBkdlNyTHozOERCUkJ4eHU0ZjF6WjVjaGh6cGFHa1oyM0R1bENaSmFiYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWVRFX1U4Ym1RUDZTNDNkWWJvYUpaQVwiLFxuICBcInBob25lSWRcIjogXCI1YmRhODczYS1lOWNiLTQwY2YtODRmZS03NGU5Njc1YjljMThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMjM5LFxuICAgICAgMTIyLFxuICAgICAgMTUwLFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgMjA0LFxuICAgICAgMjM4LFxuICAgICAgNTIsXG4gICAgICA5NSxcbiAgICAgIDIxMCxcbiAgICAgIDEwMyxcbiAgICAgIDU5LFxuICAgICAgMjM5LFxuICAgICAgMSxcbiAgICAgIDEzMCxcbiAgICAgIDE5MixcbiAgICAgIDEzNixcbiAgICAgIDEzMSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDIwMSxcbiAgICAgIDQyLFxuICAgICAgNTcsXG4gICAgICAxNzQsXG4gICAgICA4MSxcbiAgICAgIDM0LFxuICAgICAgMjM0LFxuICAgICAgMTIwLFxuICAgICAgOTYsXG4gICAgICAxOTgsXG4gICAgICAxODIsXG4gICAgICAyMzYsXG4gICAgICAzMyxcbiAgICAgIDEyNCxcbiAgICAgIDIwNCxcbiAgICAgIDIyLFxuICAgICAgMjQ1LFxuICAgICAgMzcsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjg3QzhCTkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTkxNzQ1Mjg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkluenppdGVjaCBDcmVhdGlvbnNcIixcbiAgICBcImxpZFwiOiBcIjI0NTk0MzExNDk3NzMwMDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qRHlib0NFS2FCaHJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnFHRCt4UExsZnJuSTlLMlY0eDBLd21XNExaRStKamJ0ZVBDVkVPcWhVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMQ0hMa0lRcC8xUW15WFY1NlZXWkkva1RTanhRMDk4eTBaZU1VUjRXeVRnd0EvdUVCdVQ5enN6bU9OMkwxOG9HR1ZBTzdWWmRGT1JQUjE2NmxDRlZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJydzRQZ2hyajFud0ozaGZObzdOeEtYWmtDMzcraHFrY3p2emZqMkNqZk90dHhWOXgxWGc5bmJiaDdlQzAyZ1gyVGRMaWErclhOTE1Nbkxxb2NiWHRqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU5MTc0NTI4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg2MDI2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1QcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVBxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRWx2SVhoY2RmTndqWEZSaHNrZEVrYkRNMVhGbE11UUFMQ2pybjJmL2R6OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTk3MTA0MDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcwMTA3MTM0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
