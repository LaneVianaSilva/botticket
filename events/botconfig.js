const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs')


module.exports = {
    name: 'botconfig',
    async execute(interaction) {

    if (interaction.isButton()) {
      if (interaction.customId.startsWith("alterar_username")) {
        const modal_bot_config_nome = new Discord.ModalBuilder()
          .setCustomId('modal_bot_config_nome')
          .setTitle(`Altere informações do bot abaixo.`)
        const nome_bot = new Discord.TextInputBuilder()
          .setCustomId('username_bot')
          .setLabel('Digite o nome do bot.')
          .setPlaceholder('Escreva o nome aqui.')
          .setStyle(Discord.TextInputStyle.Short)
  
        const firstActionRow = new Discord.ActionRowBuilder().addComponents(nome_bot);
        modal_bot_config_nome.addComponents(firstActionRow)
        await interaction.showModal(modal_bot_config_nome);
      }
    }

          if (interaction.isButton()) {
        if (interaction.customId.startsWith("alterar_cargo")) {
          const modal_bot_config_cargo = new Discord.ModalBuilder()
            .setCustomId('modal_bot_config_cargo')
            .setTitle(`Altere o Cargo de Staff`)
          const cargo_staff = new Discord.TextInputBuilder()
            .setCustomId('cargo_staff')
            .setLabel('Digite o id do cargo Staff')
            .setPlaceholder('Escreva o id aqui.')
            .setStyle(Discord.TextInputStyle.Short)
    
          const firstActionRow = new Discord.ActionRowBuilder().addComponents(cargo_staff);
          modal_bot_config_cargo.addComponents(firstActionRow)
          await interaction.showModal(modal_bot_config_cargo);
        
        }
      }
      if (interaction.isButton()) {
        if (interaction.customId.startsWith("alterar_categoria")) {
          const modal_bot_config_categoria = new Discord.ModalBuilder()
            .setCustomId('modal_bot_config_categoria')
            .setTitle(`Altere a categoria do ticket`)
          const categoria_ticket = new Discord.TextInputBuilder()
            .setCustomId('categoria_ticket')
            .setLabel('Digite o id da categoria ticket')
            .setPlaceholder('Escreva o id aqui.')
            .setStyle(Discord.TextInputStyle.Short)
    
          const firstActionRow = new Discord.ActionRowBuilder().addComponents(categoria_ticket);
          modal_bot_config_categoria.addComponents(firstActionRow)
          await interaction.showModal(modal_bot_config_categoria);
        
        }
      }
    if (interaction.isButton()) {
        if (interaction.customId.startsWith("altera_logs")) {
          const modal_bot_config_logs = new Discord.ModalBuilder()
            .setCustomId('modal_bot_config_logs')
            .setTitle(`Altere o Canal de Logs`)
          const logs_bot = new Discord.TextInputBuilder()
            .setCustomId('logs_bot')
            .setLabel('Digite o id do canal das logs')
            .setPlaceholder('Escreva o id aqui.')
            .setStyle(Discord.TextInputStyle.Short)
    
          const firstActionRow = new Discord.ActionRowBuilder().addComponents(logs_bot);
          modal_bot_config_logs.addComponents(firstActionRow)
          await interaction.showModal(modal_bot_config_logs);
        
        }
      }
  
    if (interaction.isButton()) {
      if (interaction.customId.startsWith("alterar_avatar")) {
        const modal_bot_config_avatar = new Discord.ModalBuilder()
          .setCustomId('modal_bot_config_avatar')
          .setTitle(`Altere informações do bot abaixo.`)
        const avatar_bot_modal = new Discord.TextInputBuilder()
          .setCustomId('bot_avatar')
          .setLabel('URL do avatar.')
          .setPlaceholder('URL aqui')
          .setStyle(Discord.TextInputStyle.Short)
        const SecondActionRow = new Discord.ActionRowBuilder().addComponents(avatar_bot_modal)
        modal_bot_config_avatar.addComponents(SecondActionRow)
        await interaction.showModal(modal_bot_config_avatar);
      }
    }
    //
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_bot_config_nome') {
      const nome_bot = interaction.fields.getTextInputValue('username_bot');
  
      await interaction.reply({
        ephemeral: true,
        embeds: [
          new Discord.EmbedBuilder()
            .setColor("White")
            .setDescription(`**${interaction.user.tag},** Alterei o meu nome para:`)
            .addFields(
              {
                name: `\\🌟 Nome alterado para:`,
                value: `\`\`\`fix\n${nome_bot}\n\`\`\``,
              },
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dinamyc: true }) })
        ]
      })
      interaction.client.user.setUsername(nome_bot)
    }
    //
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_bot_config_avatar') {
      const avatar_bot = interaction.fields.getTextInputValue('bot_avatar');
  
      interaction.reply({
        ephemeral: true,
        embeds: [
          new Discord.EmbedBuilder()
            .setColor("White")
            .setDescription(`**${interaction.user.tag},** Alterei o meu avatar para:`)
            .setImage(avatar_bot)
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dinamyc: true }) })
        ]
      })
      interaction.client.user.setAvatar(avatar_bot)
    }
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_bot_config_cargo') {
      const cargo_staff = interaction.fields.getTextInputValue('cargo_staff');

      const newId = cargo_staff;
      config.ticket.support_role = newId;
  
      fs.writeFile('config.json', JSON.stringify(config, null, 2), err => {
        if (err) {
          console.error(err);
          interaction.reply({ content: 'Ocorreu um erro ao trocar o ID.', ephemeral: true });
        } else {
          interaction.update({ embeds: [
            new Discord.EmbedBuilder()
                .setTitle(`Configuração do bot`) //titulo do painel, por exemplo: este comando é muito legal!
                .setDescription(`**Bot User: ${interaction.client.user} \nid da categoria: ${config.ticket.category_id} \nCargo Suporte: <@&${config.ticket.support_role}> \nCanal das Logs: <#${config.ticket.channel_logs}>**`) //coloque a descrição do painel por exemplo: clique nos botões abaixo para configurar.
                .setColor("Default") //coloque a cor da emebed aqui, exemplo: FFFFFF
        ],})
        }
      });
    
    }
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_bot_config_categoria') {
      const cargo_staff = interaction.fields.getTextInputValue('categoria_ticket');

      const newId = cargo_staff;
      config.ticket.category_id = newId;
  
      fs.writeFile('config.json', JSON.stringify(config, null, 2), err => {
        if (err) {
          console.error(err);
          interaction.reply({ content: 'Ocorreu um erro ao trocar o ID.', ephemeral: true });
        } else {
          interaction.update({ embeds: [
            new Discord.EmbedBuilder()
                .setTitle(`Configuração do bot`) //titulo do painel, por exemplo: este comando é muito legal!
                .setDescription(`**Bot User: ${interaction.client.user} \nid da categoria: ${config.ticket.category_id} \nCargo Suporte: <@&${config.ticket.support_role}> \nCanal das Logs: <#${config.ticket.channel_logs}>**`) //coloque a descrição do painel por exemplo: clique nos botões abaixo para configurar.
                .setColor("Default") //coloque a cor da emebed aqui, exemplo: FFFFFF
        ],})
        }
      });
    
    }
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_bot_config_logs') {
      const cargo_staff = interaction.fields.getTextInputValue('logs_bot');

      const newId = cargo_staff;
      config.ticket.support_role = newId;
  
      fs.writeFile('config.json', JSON.stringify(config, null, 2), err => {
        if (err) {
          console.error(err);
          interaction.reply({ content: 'Ocorreu um erro ao trocar o ID.', ephemeral: true });
        } else {
          interaction.update({ embeds: [
            new Discord.EmbedBuilder()
                .setTitle(`Configuração do bot`) //titulo do painel, por exemplo: este comando é muito legal!
                .setDescription(`**Bot User: ${interaction.client.user} \nid da categoria: ${config.ticket.category_id} \nCargo Suporte: <@&${config.ticket.support_role}> \nCanal das Logs: <#${config.ticket.channel_logs}>**`) //coloque a descrição do painel por exemplo: clique nos botões abaixo para configurar.
                .setColor("Default") //coloque a cor da emebed aqui, exemplo: FFFFFF
        ],})
        }
      });
    
    }
}}