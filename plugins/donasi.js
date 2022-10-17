let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0831-1283-1554]
│ •  [0889-8087-0067]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
