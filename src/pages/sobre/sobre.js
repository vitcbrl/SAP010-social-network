import imgraqu from '/img-raq.png'
import imglari from '/larissa.jpeg'
import imgvi from '/vi.jpeg'


export default () => {
  const container = document.createElement('div');

  const template = `
    <header class='geral'>
      <h1 class='Techsisters'>Techsisters</h1>
      <nav class='links'>
        <a href='#registro' class='nova-nt'>Criar Conta</a>
        <a class='inicioA' href='#login'>SAIR</a>
      </nav>  
    </header>
    <h2 class='title-sobre'>Sobre a Techsisters</h2>
    <p class='sobre-tech'>Sejam bem-vindas à Techsisters, a rede social de tecnologia para mulheres, onde suas ideias ganham vida e sua voz é poderosa. Juntas, vamos desafiar limites, inspirar e transformar o mundo através da tecnologia. Acreditamos no poder das melhores ideias para mudar o mundo.
    <br>
Por isso, criamos um espaço seguro onde vocês podem compartilhar, se expressar e se conectar com outras mulheres apaixonadas por tecnologia. Nossa plataforma é um refúgio virtual acolhedor e inclusivo. Sabemos que encontrar um ambiente seguro para compartilhar suas experiências e conhecimentos na área de tecnologia pode ser desafiador. Aqui, queremos que vocês se sintam confiantes ao postar e participar de conversas significativas.</p>
    <section class='sobre-dev'>
    <h1 class='title-sobre'>Conheça as mulheres que Desenvolveram a Techsisters:</h1>
        <div class='sobre-raq'>
            <img src="${imgraqu}" alt='Raquel Maia' class='foto'/>
            <h2 class='h2_sobre'>Raquel Maia</h2>
            <p class='p_sobre'>
            Hello, World! Sou a Raquel Maia, uma nordestina de Fortaleza-CE apaixonada por tecnologia, mas atualmente morando em São Paulo. Estou cursando Análise e Desenvolvimento de Sistemas e participando do Bootcamp da Laboratória para aprimorar minhas habilidades em HTML, CSS, JavaScript e outras tecnologias. Com minha combinação única de conhecimentos em marketing e programação, tenho a capacidade de oferecer soluções inovadoras. Estou entusiasmada em crescer como desenvolvedora de sistemas e contribuir para a evolução da tecnologia!
            </p>
        </div>
        <div class='sobre-lari'>
            <img src="${imglari}" alt='Larissa Korz' class='foto'/>
            <h2 class='h2_sobre'>Larissa Korz</h2>
            <p class='p_sobre'>
                Hi!! Sou Larissa Korz, natural de Santa Catarina. Estou cursando Análise e Desenvolvimento de Sistemas, Processos Gerenciais e o Bootcamp da Laboratória, onde tenho a oportunidade de aprimorar meus conhecimentos teóricos, também desenvolvendo minhas habilidades técnicas e aprendendo a trabalhar em equipe. Em 2022 decidi sair do meu emprego para me dedicar exclusivamente ao aprimoramento profissional. Busco aplicar minhas habilidades de programação em projetos desafiadores e inovadores, colaborando com uma equipe talentosa e fazendo a diferença na vida das pessoas por meio da tecnologia. <br>
            </p>
        </div>
        <div class='sobre-vi'>
            <img src="${imgvi}" alt='Vitoria Cabral' class='foto'/>
            <h2 class='h2_sobre'>Vitoria Cabral</h2>
            <p class='p_sobre'>
                Hello, World! Eu sou a Vitoria Cabral, com raízes em São Paulo mas atualmente morando em Fortaleza-CE. Estou cursando Análise e Desenvolvimento de Sistemas, além disso, também estou no BootCamp da Laboratória me aprofundando em HTML, CSS, JavaScript e outras tecnologias. Busco ampliar meu horizonte de conhecimento e no processo ajudar outras mulheres que estão seguindo o mesmo caminho, sendo sempre proativa, empatica e com foco nos meus objetivos. <br>
            </p>
        </div>
    </section>
`;

  container.innerHTML = template;

  return container;
};
