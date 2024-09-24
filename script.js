const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');

const story = {
    start: {
        text: "Bem-vinda, Princesa Javert! Você está prestes a embarcar em uma incrível jornada com o corajoso cavaleiro Zarck. O que você deseja fazer primeiro?",
        options: [
            { text: "Explorar o castelo", next: "castle" },
            { text: "Sair para a floresta", next: "forest" }
        ]
    },
    castle: {
        text: "Você e Zarck exploram o castelo e encontram uma sala secreta. Dentro, há um mapa misterioso e uma janela com vista para os jardins do castelo. O que vocês fazem?",
        options: [
            { text: "Seguir o mapa", next: "map" },
            { text: "Olhar pelos jardins", next: "gardens" }
        ]
    },
    gardens: {
        text: "Enquanto observam os jardins, Zarck comenta sobre como o lugar é bonito e menciona que a noite está tranquila. Há um momento de silêncio e vocês se aproximam um do outro.",
        options: [
            { text: "Beijar Zarck", next: "kiss_gardens" },
            { text: "Apenas conversar", next: "continue_gardens" }
        ]
    },
    kiss_gardens: {
        text: "Vocês compartilham um beijo sob as estrelas, um momento mágico e inesquecível. Porém, a aventura ainda está longe de acabar. Vocês retornam ao castelo para continuar a exploração.",
        options: [
            { text: "Seguir o mapa", next: "map" }
        ]
    },
    continue_gardens: {
        text: "Vocês conversam sobre o futuro e sobre a jornada que estão prestes a enfrentar. O vínculo entre vocês fica mais forte, mas a aventura continua.",
        options: [
            { text: "Seguir o mapa", next: "map" }
        ]
    },
    forest: {
        text: "Ao adentrar na floresta, vocês encontram uma clareira com uma fonte mágica. Um velho sábio aparece e os guia até um antigo templo escondido. O que vocês fazem?",
        options: [
            { text: "Entrar no templo", next: "temple" },
            { text: "Explorar mais a floresta", next: "explore_forest" }
        ]
    },
    temple: {
        text: "Dentro do templo, vocês encontram um baú antigo coberto de poeira. Quando o abrem, descobrem um convite para uma festa de aniversário especial que foi organizada para você, Javert! 🎉",
        options: [
            { text: "Abrir o baú", next: "birthday" }
        ]
    },
    explore_forest: {
        text: "Enquanto exploram mais a floresta, vocês encontram um grupo de elfos que oferecem uma ajuda mágica para sua jornada. O caminho para a festa de aniversário está agora claro.",
        options: [
            { text: "Agradecer aos elfos e seguir para a festa", next: "birthday" }
        ]
    },
    map: {
        text: "O mapa leva vocês a uma antiga biblioteca escondida sob o castelo. Dentro, há muitos livros antigos e um diário que revela a localização da festa de aniversário. O que vocês fazem?",
        options: [
            { text: "Ler o diário", next: "diary" },
            { text: "Explorar a biblioteca", next: "library" }
        ]
    },
    diary: {
        text: "O diário revela a localização de uma sala secreta onde a festa está sendo preparada. Com isso, vocês seguem para a festa de aniversário. 🎉",
        options: [
            { text: "Ir para a festa", next: "birthday" }
        ]
    },
    library: {
        text: "Explorando a biblioteca, vocês encontram uma passagem secreta que leva a um jardim escondido. Dentro, há um baú contendo um convite para a festa de aniversário. 🎉",
        options: [
            { text: "Seguir para a festa", next: "birthday" }
        ]
    },
    birthday: {
        text: "Feliz aniversário, Princesa Javert! 🎂🥳 Sua jornada foi cheia de magia e aventuras, e você terminou com uma festa especial. Zarck está ao seu lado, parabenizando você pela incrível jornada e pela celebração!...Mensagem de Zarck: Oi minha querida princesa Javert ksksksk, lhe desejo um feliz aniversário, parabéns por seus 15 anos. Você não tem noção do quanto queria está contigo agora para lhe enchar de abraças e beijos ksksksk. Você é uma ótima garota, com certeza uma das melhores que já conheci. E não, não estou falando isso da boca para fora, você é incrivél, de um valor inimaginável, inexpressável, incontável. Que Deus te abençoe e protega minha deusinha. Eu te amo ❤️. RUMO AOS 16 🥳🥳 KKKKK ",
        options: []
    }
};

function displayStory(node) {
    storyText.textContent = story[node].text;
    choices.innerHTML = '';
    story[node].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => displayStory(option.next));
        choices.appendChild(button);
    });
}

displayStory('start');
