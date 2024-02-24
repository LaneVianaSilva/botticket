const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "ticket",
    description: "Utilize para enviar uma embed para abrir um ticket",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({
            content: `**<a:errado1:1124475561545318462> | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
            ephemeral: true,
        })

        await interaction.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_invisible)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .addFields(
                        { name: '**| Infomações**', value: `> Olá, se você esta lendo isso aqui, provavelmente está precisando de ajuda clique no botão abaixo para tirar suas duvidas` },
                        { name: '**| Horario de atendimento**', value: `> Segunda a Sabado (12:00 até as 18:00 Horas)` }
                    )
                    .setImage(config.ticket.thumbnail)
                    .setFooter({ text: `Copyright © ${config.ticket.credits}` })
            ],
            components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket')
                            .setLabel('Ticket')
                            .setEmoji('<a:sinin:1209211152450723880>')
                            .setStyle(2)
                    )
            ]
        });

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_success)
                    .setDescription(`| Embed enviada com sucesso!`)
            ],
            ephemeral: true
        })
    }
}