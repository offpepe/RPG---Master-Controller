const redesSociais = document.getElementById('redes-sociais');

function redeSocialMenuDown (){
    let checkMenu = document.getElementsByClassName ('redeSociais');

    
    if (checkMenu[0] === undefined) {
        for (let i = 0; i < 3; i++) {
            let itemMenuDown = document.createElement ('span');
            itemMenuDown.innerText = 'Facebook';
            itemMenuDown.classList.add('redeSociais');
            redesSociais.appendChild(itemMenuDown);
            console.log('inicio');
        }
    } else {
        let nono = checkMenu.length;    
        for (let i = 0; i < nono; i++){
            redesSociais.removeChild(checkMenu[0]);
            console.log(nono);
        }
    }
   
}

redesSociais.addEventListener('click', redeSocialMenuDown)

