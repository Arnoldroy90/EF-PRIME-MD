import config from '../config.cjs';

const linkgc = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['linkgc', 'grouplink'];

    if (!validCommands.includes(cmd)) return;

    if (!m.isGroup) {
      return m.reply('*❌ Command can only be used in groups.*');
    }
    const groupMetadata = await gss.groupMetadata(m.from);
    const botNumber = await gss.decodeJid(gss.user.id);
    const isBotAdmins = groupMetadata.participants.find(p => p.id === botNumber)?.admin;

    if (!isBotAdmins) {
      return m.reply('*❌ Bot must be admin to make this commandw work.*');
    }

    const response = await gss.groupInviteCode(m.from);
    await gss.sendMessage(m.from, {
      text: `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`,
      detectLink: true
    });

  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default linkgc;
