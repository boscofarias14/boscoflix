import mi6 from './images/mi6.jpg';
import hp from './images/hp.jpg';
import toy_story from './images/toy_story.jpg';
import jumanji from './images/jumanji.jpg';
import vef8 from './images/vef8.jpg'
import uapr from './images/uapr.jpg'
import mi_poster from './images/poster/mi_poster.jpg'
import toy_story_poster from './images/poster/toy_story_poster.jpg'
import hp_poster from './images/poster/hp_poster.jpg'
import vef_poster from './images/poster/vef_poster.jpg'
import jumanji_poster from './images/poster/jumanji_poster.png'
import uapr_poster from './images/poster/uapr_poster.jpg'

const APIFilmes = {
    filmes: [
        {
            id: 1, 
            titulo: 'Missão Impossível',             
            url: mi6,
            modal:{
                url_poster: mi_poster,
                duracao: 150,
                genero: 'Ação', 
            }, 
            sinopse:'O agente do governo Ethan Hunt e seu mentor, Jim Phelps, embarcam em uma missão secreta que toma um rumo desastroso, na qual Jim é morto e Ethan torna-se o principal suspeito do assassinato. Agora um fugitivo, Hunt recruta o brilhante Luther Stickell e o piloto Franz Krieger para ajudá-lo a entrar no prédio da CIA, fortemente vigiado, a fim de pegar um arquivo de computador confidencial que vai provar sua inocência.'
        },
        {
            id: 2, 
            titulo: 'Harry Potter',             
            url: hp,            
            modal:{
                url_poster: hp_poster,
                duracao: 150, 
                genero:'Aventura', 
            },            
            sinopse:'Conheça Harry Potter, um menino que soube em seu aniversário de onze anos que é filho órfão de dois bruxos e possui poderes mágicos únicos. De filho indesejado, passa a ser um estudante de Hogwarts, uma escola inglesa para bruxos. Lá ele conhece vários amigos que o ajudam a descobrir a verdade sobre as mortes misteriosas de seus pais.'},
        {
            id: 3, 
            titulo: 'Toy Story',             
            url: toy_story,             
            modal:{
                url_poster: toy_story_poster,
                duracao: 81, 
                genero: 'Animação',
            },
            sinopse:'Woody é um boneco cowboy de bom coração que pertence a um jovem chamado Andy. Porém vê sua posição como o brinquedo favorito de Andy comprometida quando seus pais lhe compram um outro brinquedo, o Buzz Lightyear, uma figura de ação. Ainda pior, Buzz é arrogante e acha que ele é um astronauta de verdade em uma missão para retornar ao seu planeta natal.'
        },
        {
            id: 4, 
            titulo: 'Jumanji',             
            url: jumanji,
            modal:{
                url_poster: jumanji_poster,
                duracao: 119, 
                genero:'Aventura',
            },
            sinopse:'Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.'
        },
        {
            id: 5, 
            titulo: 'Velozes e Furiosos',             
            url: vef8, 
            modal:{
                url_poster: vef_poster,
                duracao: 150, 
                genero: 'Ação',
            },
            sinopse:'Brian O\'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.'
        },
        {
            id: 6, 
            titulo: 'Um amor para recordar',             
            url: uapr,
            modal:{
                url_poster: uapr_poster,
                duracao: 119, 
                genero: 'Romance',
            },             
            sinopse:'O agente do governo Ethan Hunt e seu mentor, Jim Phelps, embarcam em uma missão secreta que toma um rumo desastroso, na qual Jim é morto e Ethan torna-se o principal suspeito do assassinato. Agora um fugitivo, Hunt recruta o brilhante Luther Stickell e o piloto Franz Krieger para ajudá-lo a entrar no prédio da CIA, fortemente vigiado, a fim de pegar um arquivo de computador confidencial que vai provar sua inocência.'
        }
    ],
    allFilmes: function(){ return this.filmes },
    reduzSinopse: function(idFilme){
        var filme = this.filmes.find((filme1) => filme1.id === idFilme);
        return filme.sinopse.substring(0, 200) + '...';
    }
}

const APIMenu = {
    itensMenu:[
        {id: 1, label:'Home', link: '/'},
        {id: 2, label: 'Cadastro', link: '/cadastro'},
        {id: 3, label: 'Lançamentos', link: '/lancamentos'},
        {id: 4, label: 'Clássicos', link:'/classicos'},
        {id: 5, label: 'Séries', link: '/series'}
    ],
    allItensMenu: function() { return this.itensMenu }
}

export default APIFilmes;
export {APIMenu};