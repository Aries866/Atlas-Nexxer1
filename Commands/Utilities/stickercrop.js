const { Sticker, StickerTypes } = require('wa-sticker-formatter')

module.exports = {
    name: "stickercrop",
    alias: ["scrop","squaresticker"],
    desc: "To make square sized sticker",
    category: "Utilities",
    usage: "scrop <reply to image>",
    react: "π",
    start: async (Miku, m, { text, prefix,quoted,pushName,mime,body }) => {
        if (/image/.test(mime)) {
            let mediaMess = await quoted.download();
            let stickerMess = new Sticker(mediaMess, {
                pack: "οΌ©π½ π³ π΄ π΄ π³",
                author: "πβ£βπ³α΄κͺκͺα΄Κ  κ’Ία΄Ο»α΄ε¦₯",
                type: StickerTypes.CROPPED,
                categories: ['π€©', 'π'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
            const stickerBuffer = await stickerMess.toBuffer()
            Miku.sendMessage(m.from, {sticker:stickerBuffer}, { quoted: m })
        }
        else if (/video/.test(mime)) {
            let mediaMess = await quoted.download();
            if ((quoted.msg || quoted).seconds > 15)  return Miku.sendMessage(m.from,{text:'Please send video less than 15 seconds.'},{quoted:m})
            let stickerMess = new Sticker(mediaMess, {
                pack: "οΌ©π½ π³ π΄ π΄ π³",
                author: "πβ£βπ³α΄κͺκͺα΄Κ  κ’Ία΄Ο»α΄ε¦₯",
                type: StickerTypes.CROPPED,
                categories: ['π€©', 'π'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
            const stickerBuffer2 = await stickerMess.toBuffer()
             Miku.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m })
    }else{
        Miku.sendMessage(m.from,{text:`Please mention an *imade/video* and type *${prefix}s* to create cropped sticker.`},{quoted:m})
    } 
}}
