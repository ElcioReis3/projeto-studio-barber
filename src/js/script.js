document.querySelector('.contato').addEventListener('click', (event) => {
    const numero = 5599999531016;
    const msg = 'Olá, gostaria de saber como está a agenda da barbearia, gostaria de marcar um horário.';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
})