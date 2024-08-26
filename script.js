const textinput = document.querySelector(".text-input");
const textoutput = document.querySelector(".text-output");
const imgMuneco = document.getElementById("imgMuneco");
const textGuia = document.getElementById("textGuia");
const buttonCopy = document.getElementById("buttonCopy");
const contentOutput = document.getElementById("contentOutput");
const textOutput = document.getElementById("textOutput");

// -VALIDADCION DE DATOS- //
textinput.addEventListener("keypress", function (e) {
    const regex = /^[a-zA-Z0-9\s]$/;
    if (!regex.test(e.key)){
        e.preventDefault();
    }
});

// -BOTON ENCRIPTADOR- //
function buttonencrypt(){
    const textencrypt = encrypt(textinput.value);
    textoutput.value = textencrypt;
    imgMuneco.classList.add("ocultar");
    textGuia.classList.add("ocultar");
    buttonCopy.classList.remove("button-copy__ocultar");
    contentOutput.classList.remove("content-output__center");
    textOutput.classList.add("textOutput__End");
}

// -BOTON DESENCRIPTADOR- //
function buttondecrypt(){
    const textdecrypt = decrypt(textinput.value);
    textoutput.value = textdecrypt;
    imgMuneco.classList.add("ocultar");
    textGuia.classList.add("ocultar");
    buttonCopy.classList.remove("button-copy__ocultar");
    contentOutput.classList.remove("content-output__center");
    textOutput.classList.add("textOutput__End");
}

// -BOTON COPIAR DATOS- //
function buttoncopy(){
    navigator.clipboard.writeText(textoutput.value);
    textinput.value = "";
    textoutput.value = "";
    textoutput.placeholder ="";
}

// -ENCRIPTAR- //
function encrypt(stringencrypted){
    let llavesencrypt = [
        ["e", "enter"],
        ["i", "ines"],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
        ];
        stringencrypted = stringencrypted.toLowerCase();
    for(let y = 0; y < llavesencrypt.length; y++){
        if(stringencrypted.includes(llavesencrypt[y][0])){
        stringencrypted = stringencrypted.replaceAll(llavesencrypt[y][0], llavesencrypt[y][1])}
    }
    return stringencrypted;
}

// -DESENCRIPTAR- //
function decrypt(stringdecrypted){
    let llavesencrypt = [
        ["e", "enter"],
        ["i", "ines"],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
        ];
        stringdecrypted = stringdecrypted.toLowerCase();
    for(let y = 0; y < llavesencrypt.length; y++){
        if(stringdecrypted.includes(llavesencrypt[y][1])){
        stringdecrypted = stringdecrypted.replaceAll(llavesencrypt[y][1], llavesencrypt[y][0])}
    }
    return stringdecrypted;
}
