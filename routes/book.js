var express = require('express');
var router = express.Router();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// client.on('message', message => {
// 	if (!message.content.startsWith(prefix) || message.author.bot) return;

// 	const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
    

// });


/* GET home page. */
router.get('/', function(req, res, next) {
    const embed = new Discord.RichEmbed()
    .setTitle(req.body.title)
    .setAuthor("Author Name", req.body.author)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor(0x00AE86)
    .setDescription(req.body.description)
    .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/p2qNFag.png")
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField("Book: ",
      req.body.book)
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    /*
     * Blank field, useful to create some space.
     */
    .addBlankField(true)
   
    client.channels.get('560159853201326091').send({embed});
});

client.login('MzI5NzkwOTI4MDQwNDkzMDU4.D3v4Wg.5j7sZzrYjctRMORbTEY_NrPr6yM');


module.exports = router;
