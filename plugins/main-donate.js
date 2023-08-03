/*
DON'T MODIFY THIS CODE
This code is responsible for handling donation related commands..
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    console.log(`Command received: ${command}`);

    let message = `
*We appreciate your support! 🙏*

Remember, even the smallest support can make a huge difference!

Additionally, if you'd like to contribute directly, you can use the attached QR!`;

    let img = 'https://telegra.ph/file/cdad250c26c99d90cb3ca.png'; 

    console.log("Sending message and image...");
    await conn.sendFile(m.chat, img, 'donation.jpg', message, m, false, rpyp);
    console.log("Message and image sent.");
};

handler.help = ['Donate'];
handler.tags = ['Main'];
handler.command = ['donate', 'support', 'contribute'];

export default handler;
