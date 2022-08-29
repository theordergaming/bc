const express = require("express");
const app = express();




app.listen(() => console.log('Givara Start Go Go'));


app.use('/ping', (req, res) => {
  res.send(new Date());


});

const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");


client.on("ready", () => {


  console.log(` : `);
});
var prefix = "#";/////البريفيكس حقك
var owners = "859474235310473218";//////الايدي حقك




/////Status
client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`تحت خدمة جيفارا`);
  client.user.setStatus("online");
});



/////Bc
client.on("message", async message => {
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (!message.channel.guild) return;
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (command == "bc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**You Sont Have This Permissions : `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**Write Something To Send**");
    }
    message.channel
      .send(
        `**Are You Sure ? : \`${args}\`**`
      )
      .then(m => {
        m.react("✅").then(() => m.react("❌"));

        let yesFilter = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        let noFiler = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;


        let yes = m.createReactionCollector(yesFilter);
        let no = m.createReactionCollector(noFiler);

        yes.on("collect", v => {
          m.delete();
          message.channel
            .send(
              `**Dev Channel** <#837685076275757097> 🟢 \`${message.guild.memberCount}\``
            )
            .then(msg => msg.delete(5000000));
            message.guild.members.forEach(m => {
      m.send(`${args}\n ${m}`)
          });
        });

        no.on("collect", v => {
          m.delete();

          message.channel
            .send("**__Broadcast Canceled Dev Channel** <#837685076275757097>__**")
            .then(msg => msg.delete(3000000));
        });
      });
  }
        });

/////EBc


client.login("MTAwOTkyNzM2NzI5ODQwMDI1Ng.GXXbxk.pOIGxl6b4xyxZtbUczMblbcefm7xq8u3OjKN_s");
