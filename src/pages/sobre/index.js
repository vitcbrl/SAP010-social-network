export default () => {
    const container = document.createElement('div');

    const template = `
    <h2>Techsisters</h2>
    <p>Sejam bem-vindas à Techsisters, a rede social de tecnologia para mulheres, onde suas ideias ganham vida e sua voz é poderosa. Juntas, vamos desafiar limites, inspirar e transformar o mundo através da tecnologia.</p>

    <p>Acreditamos no poder das melhores ideias para mudar o mundo. Por isso, criamos um espaço seguro onde vocês podem compartilhar, se expressar e se conectar com outras mulheres apaixonadas por tecnologia.</p>
    
    <p>Nossa plataforma é um refúgio virtual acolhedor e inclusivo. Sabemos que encontrar um ambiente seguro para compartilhar suas experiências e conhecimentos na área de tecnologia pode ser desafiador. Aqui, queremos que vocês se sintam confiantes ao postar e participar de conversas significativas.</p>
`;

    container.innerHTML = template;

    return container;
}

