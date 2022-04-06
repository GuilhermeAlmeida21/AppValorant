import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';


export default function App(){
  return(
    <View style={estilo.container}>
     <Image style={estilo.img2}source={require("./assets/valorant.jpg")}/>
     
      
       <ScrollView style={estilo.fotos}>
          <Text style={estilo.legenda2}> JETT</Text>
          <Image style={estilo.img}source={require("./assets/jett.jpg")}/>
           <Text style={estilo.frase}>A sul coreana é veloz e evasiva, uma das personagens de Valorant perfeita para quem gosta de assumir riscos e tomar a frente nas jogadas. Ágil, corre para o combate e enfrenta inimigos como ninguém.</Text>

            <Text style={estilo.frase}>Ela é indicada para jogadores habilidosos, que tem suficiente reflexo para jogos de FPS para apertar os botões na velocidade que a Jett demanda. Assim como ela, seu player deve ser ágil e sagaz para dar conta das melhores jogadas.

É uma das melhores personagens de Valorant, o Mobalytic mostra que a duelista está em primeiro lugar do S-Tier.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}> Q – CORRENTE ASCENDENTE: impulsiona a jogadora para o alto no ar</Text>
 <Text style={estilo.frase}> E – BRISA DE IMPULSO: um dash para a direção em que ela estiver seguindo (se estiver parada, vai para a frente)</Text>
 <Text style={estilo.frase}> C – ERUPÇÃO DE BRUMAS: você lança uma nuvem de fumaça para a frente, atrapalhando a visão inimiga. Se segurar o botão, consegue controlar a nuvem com a mira.</Text>
 <Text style={estilo.frase}> X – TORMENTA DE AÇO: equipe com um jogo de facas precisas que recarrega quando matam o oponente. Dispare todas ao mesmo tempo no alvo com o disparo secundário, ou use apenas o disparo único e jogue uma.</Text>

           
           <Text style={estilo.legenda}> RAZE</Text>
          <Image style={estilo.img}source={require("./assets/raze.jpg")}/>
           <Text style={estilo.frase}>Raze é o nome da personagem brasileira de Valorant. Isso mesmo, representando nosso país, essa agente ofensiva é bastante explosiva e danosa. Se você quer ser um jogador da linha de frente que desentoca os inimigos, é melhor escolher ela...</Text>

            <Text style={estilo.frase}>Com um estilo de jogo cheio de personalidade e agressividade. A Raze também é boa em reconhecimento de área, sendo uma boa personagem para qualquer composição.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – CARGA DE EXPLOSIVOS: joga explosivos que grudam em superfícies. Você pode detoná-los ou deixar que aconteça quando o tempo esgotar. A explosão causa danos nos agentes e os movem. Raze não sofre dano, mas pode ser impulsionada.</Text>

 <Text style={estilo.frase}> E – CARTUCHOS DE TINTA: granada múltipla que após a explosão ainda libera mini granadas. Causa dano em todos que estiverem por perto.</Text>

 <Text style={estilo.frase}>C – BUMBA: robôzinho que avança pelo chão ricocheteando as paredes. Trava a mira no inimigo e, se alcançá-lo, explode causando muito dano.</Text>

 <Text style={estilo.frase}>X – ESTRAGA-PRAZERES: bazuca que lança um míssil devastador que detona a área para onde for projetado. Ao disparar, a personagem é levemente impulsionada para trás.</Text>

          <Text style={estilo.legenda}> BREACH</Text>
          <Image style={estilo.img}source={require("./assets/breach.jpg")}/>
           <Text style={estilo.frase}>Breach é o nome do personagem de Valorant sueco que é bom para abrir caminhos no território inimigo. Como sua função fala: ele é um iniciador, quem abre o fogo e invade o terreno.</Text>

            <Text style={estilo.frase}>O homem biônico conta com habilidades explosivas e de alcance, com jatos cinéticos que causam danos.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – ESTOPIM: uma carga que cega a todos que estiverem olhando para ela na hora do disparo. </Text>
 <Text style={estilo.frase}> E – FALHA TECTÔNICA: cause um abalo sísmico no terreno, atrapalhando todos que estiverem na zona. Segure por mais tempo para aumentar o alcance.</Text>
 <Text style={estilo.frase}> C – PÓS CHOQUE: um jato explosivo altamente letal para quem estiver por perto. Sua ação se dá pela parede e é mais lenta.</Text>
 <Text style={estilo.frase}>X – ONDA TROVEJANTE: carga sísmica de alto alcance. Ela se dá em efeito cascata, derrubando todos que estiverem nas superfícies afetadas.</Text> 
 
          <Text style={estilo.legenda}> OMEN</Text>
          <Image style={estilo.img}source={require("./assets/omen.jpg")}/>
           <Text style={estilo.frase}>Se você se pergunta qual o melhor personagem de Valorant, vale se ligar no Omen. Segundo o VLR.GG ele é o mais escolhido em eventos dos times dos EUA. Isso se dá porque tem se revelado muito útil em jogo.</Text>

            <Text style={estilo.frase}>Ele é um fantasma que o seu ponto chave é a imprevisibilidade. Criando um espectro de paranoia e surpresa na partida.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – PARANOIA: joga uma sombra na frente de seus adversários, atrapalhando seu campo de visão por um momento. </Text>
 <Text style={estilo.frase}>E – MANTO SOMBRIO: um orbe sombrio de maior alcance e mais duradouro que atrapalha a visão do inimigo. Equipe e mire onde irá jogar, controle melhor com o disparo secundário. </Text>
 <Text style={estilo.frase}>C – PASSOS TENEBROSOS: um teletransporte que leva Omen para qualquer local do mapa. Ao disparar, ele passa por um momento de canalização antes de surgir na indicação.</Text>
 <Text style={estilo.frase}>X – SALTO DAS SOMBRAS: veja um mapa tático e decida para onde irá se teleportar. Lembre que ao chegar no ambiente, Omen surge como um vulto que pode ser detonado pelos inimigos, cancelando a habilidade.</Text>


            <Text style={estilo.legenda}> BRIMSTONE</Text>
          <Image style={estilo.img}source={require("./assets/brimstone.jpg")}/>
           <Text style={estilo.frase}>O Estadunidense conta com um baita arsenal de orbital para trazer vantagem na composição de sua equipe. Ele é um controlador, ou seja, seu foco é em entradas, defesas e auxílio da equipe.</Text>

            <Text style={estilo.frase}>Então é um comandante militar, perfeito para coordenar táticas. Se esse é o tipo de função que você curte, vale escolher ele. Mas lembre que o diálogo com a equipe é sempre necessário.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – INCENDIÁRIO: granadas incendiárias, dispare em direção ao inimigo e cause danos. </Text>
 <Text style={estilo.frase}>E – FUMAÇA CELESTE: tenha acesso a um mapa tático e selecione um lugar onde nuvens de fumaça surgirão. Elas bloqueiam a visão inimiga.</Text>
 <Text style={estilo.frase}>C – SINALIZADOR ESTIMULANTE: dispare o  sinalizador diante de Brimstone e consiga dar tiros rápidos. O campo do sinalizador concede os tiros mais velozes para os jogadores.</Text>
 <Text style={estilo.frase}>X – ATAQUE ORBITAL: veja o mapa tático e indique um local para um laser atingir. Ele causará muito dano aos inimigos.</Text>


            <Text style={estilo.legenda}> PHOENIX</Text>
          <Image style={estilo.img}source={require("./assets/phoenix.jpg")}/>
           <Text style={estilo.frase}>Ele conta com poderes que incendeiam a partida. O duelista enfrenta inimigos de forma independente, sendo bom para conflitos direto.</Text>

            <Text style={estilo.frase}>Seu poder estelar é bastante versátil e interessante para desembolar suas jogadas próprias. Sendo então um bom personagem de Valorant para quem procura por alguém que se adapte bem a qualquer situação e cenário.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – BOLA CURVA: orbe de chamas que causa cegueira no adversário. Ela faz uma curva para a esquerda ou direita logo após o lançamento.  </Text>
 <Text style={estilo.frase}>E – MÃOS QUENTES: bola de fogo que causa dano ao inimigo que estiver em sua zona. Ela explode após um tempo ou depois de tocar o chão.</Text>
 <Text style={estilo.frase}>C – LABAREDA: parede de fogo que causa cegueira e dano nos oponentes que passarem por ela.</Text>
 <Text style={estilo.frase}>X – RENASCIMENTO: marca a localização de Phoenix. Se ele morrer (ou então quando o tempo da habilidade zerar) ele retorna para o lugar inicial com a vida completa.</Text>


            <Text style={estilo.legenda}> SAGE</Text>
          <Image style={estilo.img}source={require("./assets/sage.jpg")}/>
           <Text style={estilo.frase}>Essa é a personagem de Valorant para quem prefere lugares menos ofensivos. Sage é uma sentinela que funciona como um suporte, um apoio na partida para dar auxílio aos demais jogadores.</Text>

            <Text style={estilo.frase}>Com suas habilidades e funções de cura e sabotagem ao inimigo, ela é de grande ajuda para seus parceiros. Podendo ser decisiva em momentos de muita dinâmica e tensão na partida.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – ORBE DE LENTIDÃO: um orbe que, ao tocar o chão, cria uma zona de lentidão aos jogadores que passarem por ela. </Text>
 <Text style={estilo.frase}>E – ORBE CURATIVO: cure aliados feridos com o disparo ou dê uma autocura no disparo secundário.</Text>
 <Text style={estilo.frase}>C – ORBE DE BARREIRA: uma verdadeira fortaleza de proteção contra o inimigo.</Text>
 <Text style={estilo.frase}>X – RESSUREIÇÃO: use a habilidade em um aliado morto e o reviva depois de um tempo.</Text>


            <Text style={estilo.legenda}> SOVA</Text>
          <Image style={estilo.img}source={require("./assets/sova.jpg")}/>
           <Text style={estilo.frase}>Sova é um iniciador russo que conta com habilidades e precisão inigualáveis. A frieza é uma característica do personagem, que vem do longo inverno russo.</Text>

            <Text style={estilo.frase}>É o melhor personagem de Valorant para ser batedor. Incrível para rastrear os inimigos e ainda conta com uma habilidade de alta destrutibilidade. É mais indicado para pessoas que curtem desenvolver estrategicamente no jogo, de forma lenta e analisada.</Text>

            <Text style={estilo.frase}>Primeiro o reconhecimento, depois o ataque.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – FLECHA DE CHOQUE: lance uma flecha que explode com o impacto e traz danos a quem estiver por perto. Quanto mais segurar, mais distante o disparo. Apertando o disparo secundário ela ricocheteia duas vezes. </Text>
 <Text style={estilo.frase}>E – FLECHA RASTREADORA: essa não causa danos, mas evidencia inimigos escondidos que estejam ao alcance do campo de visão de Sova.</Text>
 <Text style={estilo.frase}>C – DRONE CORUJA: disparo de um drone que você consegue controlar e pilotar, observando os arredores. Com ele é possível também jogar um dardo marcador que identifica a posição de qualquer jogador atingido.</Text>
 <Text style={estilo.frase}>X – FÚRIA CAÇADOR: flecha poderosa que atravessa paredes e causa muito dano nos oponentes, além de revelar a localização deles. Você tem direito a três disparos enquanto estiver com o cooldown rolando.</Text>


            <Text style={estilo.legenda}> VIPER</Text>
          <Image style={estilo.img}source={require("./assets/viper.jpg")}/>
           <Text style={estilo.frase}>Cientista química, é mais uma agente dos EUA e também é uma controladora. Com pontos fortes tanto para ataque quanto para defensiva, ela conta com habilidades que dão muito suporte para a equipe.</Text>

            <Text style={estilo.frase}>Sua principal característica é o veneno. Isso mesmo, se trata de uma personagem de Valorant que utiliza de toxinas para atingir os inimigos. Seja para reconhecer e atrapalhar as jogadas deles, quanto também para atacar diretamente.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – NUVEM VENENOSA: granada de veneno que explode em uma nuvem tóxica que atinge os inimigos. Você pode repetir ativar o ataque mais de uma vez ou pegar a granada para reposicionar.</Text>
 <Text style={estilo.frase}>E – CORTINA: marcadores que são disparados em linha reta no chão por uma longa distância. A partir deles é possível levantar uma parede de gás venenoso que causa danos aos inimigos. Também pode ser repetida ao longo da partida.</Text>
 <Text style={estilo.frase}>C – VENENO DE COBRA:  lançar um cilindro com veneno que, ao tocar o chão, se espalha em uma gosma química que tira vida e velocidade dos jogadores em cima dela.</Text>
 <Text style={estilo.frase}>X – POÇO PEÇONHENTO: borrifador químico que cria uma zona com um gás venenoso ao redor de Viper. Ela diminui o campo de visão do inimigo e atinge a vida máxima.</Text>


            <Text style={estilo.legenda}> CYPHER</Text>
          <Image style={estilo.img}source={require("./assets/cypher.jpg")}/>
           <Text style={estilo.frase}>Cypher é um dos personagens mais misteriosos de Valorant. Em Marrocos era um vendedor de informações, portanto suas habilidades são voltadas para espionagem.</Text>

            <Text style={estilo.frase}>É um vigilante. Com técnicas que ampliam sua visão e entregam posições inimigas. Na partida é quem descobrirá os segredos dos oponentes para a equipe.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – JAULA CIBERNÉTICA: jaula que, quando ativada, bloqueia a visão e reduz a velocidade de quem passar por ela.</Text>
 <Text style={estilo.frase}>E – CÂMERA DE VIGILÂNCIA: mire e lance uma câmera em determinado alvo. Você terá acesso a visão dela, podendo encontrar pessoas inimigas. Você pode jogar um dardo que irá marcar e revelar a posição e quem estiver perto da câmera.</Text>
 <Text style={estilo.frase}>C – FIO-ARMADILHA: marque um lugar onde o fio-armadilha passará. Quem atravessá-lo sem destruir ficará com dificuldades de locomoção e terá a localização revelada. Pode ser recolhida e reposicionada.</Text>
 <Text style={estilo.frase}>X – ASSALTO NEURAL: jogue em um oponente morto que esteja ao alcance da sua mira e descubra a localização de todos do time dele que ainda estiverem vivos.</Text>


            <Text style={estilo.legenda}> REYNA</Text>
          <Image style={estilo.img}source={require("./assets/reyna.jpg")}/>
           <Text style={estilo.frase}>A Reyna é uma das melhores personagens de Valorant para quem curte um x1. Perfeita para ir diretamente enfrentar os oponentes, só é necessário dominar bem suas mecânicas.</Text>

            <Text style={estilo.frase}>Para jogar com a mexicana é importante saber também que seu desempenho no jogo depende dos abates. Ou seja, quanto mais inimigos detonar, melhor para Reyna… quase como um farm de LoL só que ao invés de last hit nos minions você precisa destruir inimigos.</Text>

            <Text style={estilo.frase}>Então para atingir o ponto máximo da qualidade da jogadora, você precisa derrotar outros jogadores logo.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – DEVORAR: Reyna consome a orbe de alma de inimigos abatidos e suga a energia, aumentando sua própria vida. É uma habilidade de cura, mas funciona apenas por um determinado tempo. A skill Imperatriz torna essa habilidade automática.</Text>
 <Text style={estilo.frase}>E – DISPENSAR: consome um orbe de alma que esteja por perto dela, ficando blindada de ataques por um tempinho. Com a Imperatriz ativada, essa skill também a torna invisível.</Text>
 <Text style={estilo.frase}>C – OLHAR VORAZ: lance um olho etéreo que causa confusão na visão dos inimigos que o encaram.</Text>
 <Text style={estilo.frase}>X – IMPERATRIZ: Reyna entra em seu modo máximo de desempenho, ficando veloz nos tiros e nas recargas. O tempo que ela dura com essa habilidade é renovado a cada abate que ela fizer.</Text>

          
          
            <Text style={estilo.legenda}> KILLJOY</Text>
          <Image style={estilo.img}source={require("./assets/killjoy.jpg")}/>
           <Text style={estilo.frase}>Uma das personagens mais inteligentes de Valorant, Killjoy é a alemã engenheira que usa de suas invenções nas partidas. É super indicada para ficar na defensiva, para jogar com ela é importante ter uma boa comunicação com o time.</Text>

            <Text style={estilo.frase}>Se souber usar de forma estratégica suas habilidades sabotadoras, é possível causar uma boa dor de cabeça no inimigo. </Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – ROBÔ DE ALARME: um robozinho oculto que, quando ativado, persegue os inimigos que estão na sua frente. Quando alcança o oponente, explode causando dano e vulnerável. É possível reposicionar.</Text>
 <Text style={estilo.frase}>E – TORRETA: libere um robô que atira em inimigos que estiverem em uma zona de 180º ao seu redor. Para desativá-lo, é só ir em Equipe.</Text>
 <Text style={estilo.frase}>C – NANOENXAME: granada que se camufla quando chega na superfície. Killjoy a ativa quando quiser e libera um enxame de nanorobôs que causa muito dano.</Text>
 <Text style={estilo.frase}>X – CONFINAMENTO: lance um robô que, após uma longa canalização, atinge todos os inimigos que estiverem em seu raio, os deixando lentos. É possível destruir.</Text>



            <Text style={estilo.legenda}> SKYE</Text>
          <Image style={estilo.img}source={require("./assets/skye.jpg")}/>
           <Text style={estilo.frase}>Uma personagem de Valorant que garante força e segurança para sua equipe. Skye vem diretamente da Austrália e conta com a ajuda de suas feras para dominar o território.</Text>

            <Text style={estilo.frase}>Além disso, Skye conta com poderes de cura que pode ajudar aliados em situações críticas. É uma iniciadora marcante e potencializadora. </Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – PREDADOR EXPLOSIVO: com seu amuleto de lobo da tasmânia, Skye libera um predador do qual você consegue controlar. Ao pular em cima de um inimigo com esse lobo, ele explode e causa danos diretamente a ele.</Text>
 <Text style={estilo.frase}>E – LUZ DESBRAVADORA: com o amuleto de falcão, é possível reconhecer se há inimigos na região. Basta disparar e controlar com a mira a direção para onde ele irá, caso tenha alguém nos arredores há a confirmação de hit.</Text>
 <Text style={estilo.frase}>C – REFLORESCER: cure aliados que estejam no seu campo de visão com este amuleto. Não é possível realizar autocura.</Text>
 <Text style={estilo.frase}>X – RASTREADORES: lance três rastreadores que informarão onde estão os inimigos mais próximos. Se um desses rastreadores acertar algum alvo específico, esse jogador ficará com a visão turva.</Text>


            <Text style={estilo.legenda}> YORU</Text>
          <Image style={estilo.img}source={require("./assets/yoru.jpg")}/>
           <Text style={estilo.frase}>Yoru mexe com a realidade. Abrindo fendas que dão brechas para a criação de jogadas imprevisíveis e surpreendentes.</Text>

            <Text style={estilo.frase}>É um personagem ofensivo de Valorant. Une a agressividade com a estratégia, sendo uma boa opção para se criar jogadas criativas e inusitadas. </Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – PONTO CEGO: lance um fragmento dimensional instável da realidade, ele pode ricochetear na parede para atingir um ponto específico. Quando em contato com o alvo, ele cria um clarão que atrapalha a visão desse inimigo específico.</Text>
 <Text style={estilo.frase}>E – PASSAGEM DIMENSIONAL: use um fluxo dimensional para se teleportar até uma extremidade. </Text>
 <Text style={estilo.frase}>C – FALCATRUA: com uma granada de eco, Yoru simula o som de passos na partida.</Text>
 <Text style={estilo.frase}>X – ESPIONAGEM DIMENSIONAL: com a máscara dimensional o personagem é capaz de entrar e uma dimensão à parte e caminhar pelo mapa com ela. Ele não pode ser visto e nem atingido pelos oponentes.</Text>



            <Text style={estilo.legenda}> ASTRA</Text>
          <Image style={estilo.img}source={require("./assets/astra.jpg")}/>
           <Text style={estilo.frase}>Astra é uma ganense que conjura as forças do universo para auxiliar na partida. Astra é cósmica e é uma peça importante para ter uma visão a mais do campo.</Text>

            <Text style={estilo.frase}>Ótima para estratégias e domínio do rumo da partida. É uma controladora forte, com inspiração no afrofuturismo. </Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – PULSO NOVA: para usar, você deve ter posicionado estrelas com a Forma Astral (skill X). Ao ativar a Estrela com Q ela carregará e então explodirá, causando uma concussão nos adversários da área que ficarão atordoados.</Text>
 <Text style={estilo.frase}>E – NEBULOSA: acione uma estrela e libere uma nuvem de fumaça cósmica que atrapalha a visão dos oponentes. Depois de ativada, a Estrela retorna para Astra, que pode reposicioná-la na Forma Astral (X). </Text>
 <Text style={estilo.frase}>C – POÇO GRAVITACIONAL: ative a Estrela e gere uma força da gravidade que puxa todos que estiverem ao redor para o centro antes de explodir.</Text>
 <Text style={estilo.frase}>X – FORMA ASTRAL: entre na divisa cósmica para posicionar as Estrelas pelo mapa. É a skill central, a partir dela que você conseguirá ativar as outras.</Text>


          <Text style={estilo.legenda}> KAY/O</Text>
          <Image style={estilo.img}source={require("./assets/kayo.jpg")}/>
           <Text style={estilo.frase}>KAY/O é uma máquina de guerra construída com um único propósito: neutralizar radiantes.</Text>

            <Text style={estilo.frase}>KAY/O é conhecido por suprimir as habilidades dos seus oponentes, tornando-as absolutamente nulas, eventualmente colocando a sua equipa na linha da frente prontos a obter a tão desejada vitória.</Text>

            <Text style={estilo.frase2}>HABILIDADES:</Text>
            <Text style={estilo.frase}>Q – GRANADA/CLARÃO: Equipa uma granada de flash. Dispara para a atirares. A granada de flash explode após uns momentos, cegando qualquer pessoa na linha de visão.</Text>
 <Text style={estilo.frase}>E – PONTO/ZERO: Equipa uma lâmina de supressão. Dispara para jogar. A lâmina adere à primeira superfície que atinge e suprime qualquer pessoa no raio da explosão.</Text>
 <Text style={estilo.frase}>C – FRAG/MENTO: Equipa um fragmento explosivo. Dispara para atirares. O fragmento cola no chão e explode várias vezes, causando um dano quase letal no centro de cada explosão.</Text>
 <Text style={estilo.frase}>X – ANULAR/CMD: Sobrecarrega IMEDIATAMENTE com energia radianita polarizada que dá poder a KAY/O e faz com que grandes pulsos de energia sejam emitidos da sua localização. Os inimigos atingidos por estes pulsos são suprimidos por um curto período.</Text>
         


         
          
        </ScrollView>
    </View>

  );
}

const estilo =StyleSheet.create({
container:{
  flex:1,
  alignItems: 'center',
  backgroundColor:'#CD5C5C'

},


  frase:{
    fontSize: 20,
    paddingBottom: 15,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Consolas'
  },
   frase2:{
    fontSize: 40,
    fontWeight:'bold',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Consolas',
   
  },

  img:{
    width: 395,
    height: 230,
    marginBottom: 15,
    
  },

   img2:{
    width: 395,
    height: 95,
    
    
  },

  legenda:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 0,
    marginTop: 10,
    backgroundColor:'black',
   
    color:'white',
  },

   legenda2:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 0,
    backgroundColor:'black',
    color:'white',
  },

  fotos:{
    alignItems:'center',
    fontFamily: 'Consolas'
  },

});