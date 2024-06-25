// script.js

function sendReport() {
    // Coletar os valores dos campos de entrada
    const membrosLifeGroup = document.getElementById('membros-life-group').value;
    const convidadosLifeGroup = document.getElementById('convidados-life-group').value;
    const membrosTadel = document.getElementById('membros-tadel').value;
    const convidadosTadel = document.getElementById('criancas-tadel').value;
    const criancasTadel = document.getElementById('criancas-tadel').value;
    const totalTadel = document.getElementById('total-tadel').value;
    const totalCultoGeral = document.getElementById('total-culto-geral').value;
    const discipuladores = document.getElementById('discipuladores').value;
    const mdas = document.getElementById('mdas').value;
    const ges = document.getElementById('ges').value;

    // Criar a mensagem para enviar via WhatsApp e email
    const mensagem = `RELATÓRIO:\n\nMembros do Life Group: ${membrosLifeGroup}\nMembros presentes no Tadel: ${convidadosLifeGroup}\nMembros presentes: ${membrosTadel}\nConvidados presentes: ${convidadosTadel}\nCrianças (0 a 11): ${criancasTadel}\nTotal Presentes: ${totalTadel}\nTOTAL DE PRESENTES NO CULTO: ${totalCultoGeral}\n\nDiscipuladores: ${discipuladores}\nMDA's: ${mdas}\nGE's: ${ges}`;

    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Número de telefone para enviar o relatório via WhatsApp
    const numeroTelefone = '5581999440404'; // Número no formato internacional

    // URL do WhatsApp API
    const whatsappURL = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;

    // Email para enviar o relatório
    const email = 'ifenixtecnologia@gmail.com';
    const assunto = 'Relatório de Membros da Igreja';
    const emailBody = encodeURIComponent(mensagem);
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${emailBody}`;

    // Abrir a URL do WhatsApp em uma nova janela
    window.open(whatsappURL, '_blank');

    // Abrir a URL do email em uma nova janela
    window.open(mailtoURL, '_blank');
}

function printReport() {
    window.print();
}
