const jelek = {
    0:"ko",
    1:"papir",
    2:"ollo",
}

const emoji ={
    "ko": "✊",
    "papir": "✋",
    "ollo":"✌"
}
function jatek(jatekos){
    valasztas = jatekos.id;
    var gepi = jelek[Math.floor(Math.random() * 3)];
    document.getElementById("gameDiv").style.visibility = "hidden";
    document.getElementById("megjelenit").style.visibility = "visible";
    document.getElementById("nyeroJatekos").value = emoji[valasztas];
    document.getElementById("gepiGeneralt").value = emoji[gepi];
    if (valasztas=="ko") {
        if (gepi == "ollo") {
            document.getElementById("pontok").innerText = parseInt(document.getElementById("pontok").innerText) + 1;
            document.getElementById("nyertE").innerText = "You win!"
        }else if (gepi == "papir") {
            document.getElementById("nyertE").innerText = "You lose!"
            document.getElementById("pontok").innerText = 0;
        }else{
            document.getElementById("nyertE").innerText = "Same!"
        }
    }else if (valasztas == "papir") {
        if (gepi == "ko") {
            document.getElementById("nyertE").innerText = "You win!"
            document.getElementById("pontok").innerText = parseInt(document.getElementById("pontok").innerText) + 1;
        }else if (gepi == "ollo") {
            document.getElementById("nyertE").innerText = "You lose!"
            document.getElementById("pontok").innerText = 0;
        }else{
             document.getElementById("nyertE").innerText = "Same!"
        }
    }else if (valasztas == "ollo") {
        if (gepi == "ko") {
            document.getElementById("nyertE").innerText = "You lose!"
            document.getElementById("pontok").innerText = 0;
        }else if (gepi == "papir") {
            document.getElementById("nyertE").innerText = "You win!"
            document.getElementById("pontok").innerText = parseInt(document.getElementById("pontok").innerText) + 1;
        }else{
            document.getElementById("nyertE").innerText = "Same!"
        }
    }
}

function ujJatek(){
    document.getElementById("gameDiv").style.visibility = "visible";
    document.getElementById("megjelenit").style.visibility = "hidden";
}
