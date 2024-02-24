/////////////////Parte do comando:///////////////

const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'botconfig', //nome do comando
    description: 'Configure o bot', //colque a descrição que você deseja
    options: [

    ],

    run: async (client, interaction) => {

        if (interaction.user.id != (config.client.owner_id)) {  //coloque seu id aqui
            interaction.reply({
                content: `<@${interaction.user.id}> você não tem permissão para usar esse comando`, //coloque a mensagem que aparecera para quem nao tem permissao para utilizar o comando.
                ephemeral: true,
              });
              
        } else {

            interaction.reply({
                components: [
                    new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("alterar_username")
                                .setLabel("Alterar Username")
                                .setStyle(Discord.ButtonStyle.Primary),
                            new Discord.ButtonBuilder()
                                .setCustomId("alterar_avatar")
                                .setLabel("Alterar Avatar")
                                .setStyle(Discord.ButtonStyle.Primary),
                                new Discord.ButtonBuilder()
                                .setCustomId("alterar_categoria")
                                .setLabel("Alterar Categoria")
                                .setStyle(Discord.ButtonStyle.Primary),
                                new Discord.ButtonBuilder()
                                .setCustomId("alterar_cargo")
                                .setLabel("Alterar Cargo")
                                .setStyle(Discord.ButtonStyle.Primary),
                                new Discord.ButtonBuilder()
                                .setCustomId("altera_logs")
                                .setLabel("Alterar Logs")
                                .setStyle(Discord.ButtonStyle.Primary),
                        )
                ],
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle(`Configuração do bot`) //titulo do painel, por exemplo: este comando é muito legal!
                        .setDescription(`**Bot User: ${interaction.client.user} \nid da categoria: ${config.ticket.category_id} \nCargo Suporte: <@&${config.ticket.support_role}> \nCanal das Logs: <#${config.ticket.channel_logs}>**`) //coloque a descrição do painel por exemplo: clique nos botões abaixo para configurar.
                        .setColor("Default") //coloque a cor da emebed aqui, exemplo: FFFFFF
                ],
            })
        }
    }
}

///////////////parte da index///////////////



  