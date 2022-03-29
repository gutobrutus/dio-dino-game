const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        //console.log('Pressionada a tecla barra de espaço!');
        jump();
    }
}

function jump() {
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 40);
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

/** keydown quando uma tecla é pressionada, 
 * keyup quando uma tecla é liberada
*/
/**document.addEventListener('keyup', () => {
    console.log('pressionou uma tecla')
});
*/

document.addEventListener('keyup', handleKeyUp);