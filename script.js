const dino = document.querySelector('.dino'); //essa const vai servir como uma gaveta onde nos vamos selecionar o elemento dino, uma const nao pode ser sobre escrita ex "const dino = document.querySelector('.dino'); linha 2 dino = 1; voce ois pois um cont nao pode ser sobre escrita, um jeito de fazer isso e usar "let"
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;//o zero indica a posiçao inicial
//console.log(dino);//e bom usar o console log para ver se seu codigo esta funcionando e entender melhor seu codigo

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        //console.log('Precionou espaço!')
        if (!isJumping) {
            jump();
        }
    }
}//esse codigo ira verificar se a tecla espaço foi pracionada

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //Decendo
            let donwInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(donwInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
              }
            }, 20);
        } else {
        //subindo
        position += 20;//esse codigo esta dizendo que ele vai pegar a posiçao vai adicionar 20
        dino.style.bottom = position + 'px';
        }
    }, 20);
}//a funçao upInterval serve para que qualque  codigo que esteja dentro dele tenha o intervalo de tempo que foi definido 

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px'

    let leftInterval = setInterval(() => {
        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'

    if (cactusPosition < -60) {
        clearInterval(leftInterval);
        background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
        //gameover

    clearInterval(leftInterval);
    document.body.innerHTML = '<h1 class = "game-Over">Fim de jogo</h1>';
    } else {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
       }   
    }, 20)

    setTimeout(createCactus, randomTime);          //serve para que executemos uma determinada funçao depois de um determinado tempo
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

/*document.addEventListener('keyup', () => {
    console.log('presionou uma tecla');
}); //tudo oque voce faz no navegador gera eventos e voce pode "escutar" esses eventos e fazer alguma coisa*/