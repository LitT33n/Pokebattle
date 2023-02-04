let info = document.getElementById("info")

let lucarioLife = document.getElementById("lucario-life")

let charizardLife = document.getElementById("charizard-life")

let charizardNumberHp = document.getElementById("charizardnumberhp")
let lucarioNumberHp = document.getElementById("lucarionumberhp")
let faintedCharizard = document.getElementById("faintedCharizard")
let faintedLucario = document.getElementById("faintedLucario")

// -----------------------------------------------------------------------

let lanzallamasButton = document.getElementById("lanzallamas")
let anilloIgneoButton = document.getElementById("anillo-igneo")
let recuperacionButton = document.getElementById("recuperacion")
let ataqueAlaButton = document.getElementById("ataque-ala")

// ---------------------------------------------------------------------

let esferaAuralButton = document.getElementById("esfera-aural")
let ondaCerteraButton = document.getElementById ("onda-certera")
let puñoTruenoButton = document.getElementById("puño-trueno")
let aBocajarroButton = document.getElementById("a-bocajarro")

//-------------- LISTENERS --------------------------------

lanzallamasButton.addEventListener("click",lanzallamas)
anilloIgneoButton.addEventListener("click",anilloIgneo)
recuperacionButton.addEventListener("click",recuperacion)
ataqueAlaButton.addEventListener("click",ataqueAla)

// ------------------------------------------------------------------------

esferaAuralButton.addEventListener("click",esferaAural)
ondaCerteraButton.addEventListener("click",ondaCertera)
puñoTruenoButton.addEventListener("click",puñoTrueno)
aBocajarroButton.addEventListener("click",aBocajarro)

// ---------------------- VARIABLES ------------------------------

let lucarioHp = 215
let charizardHp = 230
let turno = "Charizard"

// ------------- HELPERS -----------------

function ruleOfThree (cienPorCiento,actual){
    let  x = (actual * 100)/cienPorCiento
    return x
}

// -------------------------------------------

function updateLifeNumber (){
    lucarioNumberHp.innerText = `HP: ${lucarioHp} / 215`
    charizardNumberHp.innerText = `HP: ${charizardHp} / 230`
}





// ----------- ATAQUES CHARIZARD

function lanzallamas () {
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Charizard") {
        lucarioHp = lucarioHp - 50
        let x
        
        if(lucarioHp <= 0) {
            lucarioHp = 0
			faintedLucario.setAttribute("style","display: block")
			x = 0
        } else {
            x = ruleOfThree(215, lucarioHp)
        }
        updateLifeNumber()
        info.innerText = ("Charizard usó lanzallamas, los hp de Lucario son de " + lucarioHp)
       lucarioLife.style.width = x+"%"
       if (x <= 50 && x > 25){
        lucarioLife.style.background = "yellow" 
        } else if (x <= 25){
            lucarioLife.style.background = "red"
        }
    } 
    else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Lucario"
    }

function ataqueAla () {
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Charizard"){
    lucarioHp = lucarioHp - 30
    
    let x

    if(lucarioHp <= 0) {
        lucarioHp = 0
		faintedLucario.setAttribute("style","display: block")
        x = 0
    } else {
        x = ruleOfThree(215, lucarioHp)
    }
    updateLifeNumber()
    info.innerText=("Charizard usó ataque ala, los hp de Lucario son de " + lucarioHp )
   lucarioLife.style.width = x+"%"
   if (x <= 50 && x > 25){
    lucarioLife.style.background = "yellow" 
    } else if (x <= 25){
        lucarioLife.style.background = "red"
    }
} 
    else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Lucario"
} 


function recuperacion () {
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Charizard"){
        charizardHp = charizardHp + 60
        
        let x
    
    if (charizardHp > 230){
        charizardHp = 230
        x = 100
    } else {
        x = ruleOfThree(230, charizardHp)
    }
    updateLifeNumber()
    info.innerText = "Charizard usó Recuperación, los hp de Charizard son de " + charizardHp
    charizardLife.style.width = x+"%"
    if (x > 50){
        charizardLife.style.background = "green" 
        } else if (x => 25){
            charizardLife.style.background = "yellow"
        }
} else {
        
    info.innerText = "Todavía no es tu turno"
   
} 
    turno = "Lucario"
}


function anilloIgneo () {
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Charizard"){
    lucarioHp = lucarioHp - 70
    let x

    if(lucarioHp <= 0) {
        lucarioHp = 0
		faintedLucario.setAttribute("style","display: block")
		x = 0
    } else {
        x = ruleOfThree(215, lucarioHp)
    }
    updateLifeNumber()
    info.innerText = "Charizard usó Anillo ígneo, los hp de Lucario son de " + lucarioHp
   lucarioLife.style.width = x+"%"
   if (x <= 50 && x > 25){
    lucarioLife.style.background = "yellow" 
    } else if (x <= 25){
        lucarioLife.style.background = "red"
    }
} else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Lucario"
}

// ------------------ ATAQUES LUCARIO --------------------------------------------------------

function esferaAural (){
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Lucario"){
    charizardHp = charizardHp - 50
    let x

    if (charizardHp <= 0){
        charizardHp = 0
		faintedCharizard.setAttribute("style", "display: block")
        x = 0
    } else {
        x = ruleOfThree(230,charizardHp)
    }
    updateLifeNumber()
    info.innerText=("Lucario usó esfera aureal, los hp de Charizard son de "+ charizardHp )
    charizardLife.style.width = x+"%"
    if (x <= 50 && x > 25){
        charizardLife.style.background = "yellow" 
        } else if (x <= 25){
            charizardLife.style.background = "red"
        }
} 
    
    else {
        info.innerText = "Todavía no es tu turno"
        
    }
    turno = "Charizard"
}

function aBocajarro (){
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Lucario"){
    charizardHp = charizardHp - 70
    let x

    if (charizardHp <= 0){
        charizardHp = 0
		faintedCharizard.setAttribute("style", "display: block")
        x = 0
    } else {
        x = ruleOfThree(230,charizardHp)
    }
    updateLifeNumber()
    info.innerText=("Lucario usó a bocajarro, los hp de Charizard son de "+ charizardHp )
    charizardLife.style.width = x+"%"
    if (x <= 50 && x > 25){
        charizardLife.style.background = "yellow" 
        } else if (x <= 25){
            charizardLife.style.background = "red"
        }
} 
    else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Charizard"
}

function puñoTrueno (){
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Lucario"){
    charizardHp = charizardHp - 60
    let x

    if (charizardHp <= 0){
        charizardHp = 0
		faintedCharizard.setAttribute("style", "display: block")
        x = 0
    } else {
        x = ruleOfThree(230,charizardHp)
    }
    updateLifeNumber()
    info.innerText=("Lucario usó puño trueno, los hp de Charizard son de "+ charizardHp )
    charizardLife.style.width = x+"%"
    if (x <= 50 && x > 25){
        charizardLife.style.background = "yellow" 
        } else if (x <= 25){
            charizardLife.style.background = "red"
        }
} 
    else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Charizard"
}

function ondaCertera (){
    if(charizardHp <= 0 || lucarioHp <= 0){
        info.innerText = `La batalla terminó, el hp de Lucario es de ${lucarioHp} y los de charizard son ${charizardHp}`
    }

    else if (turno == "Lucario"){
    charizardHp = charizardHp - 70
    let x

    if (charizardHp <= 0){
        charizardHp = 0
		faintedCharizard.setAttribute("style", "display: block")
        x = 0
    } else {
        x = ruleOfThree(230,charizardHp)
    }
    updateLifeNumber()
    info.innerText=("Lucario usó onda certera, los hp de Charizard son de "+ charizardHp )
    charizardLife.style.width = x+"%"
    if (x <= 50 && x > 25){
        charizardLife.style.background = "yellow" 
        } else if (x <= 25){
            charizardLife.style.background = "red"
        }
} 
    else {
        info.innerText = "Todavía no es tu turno"
    }
    turno = "Charizard"
}

// 215 100%
        // lucarioHp = x

        // lucarioHp x 100/215


// while (lucarioHp > 0 || charizardHp > 0){
//     if(lucarioHp > 0 && charizardHp > 0) {
//         lanzallamas()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         esferaAural()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         ondaCertera()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         puñoTrueno()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         aBocajarro()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         anilloIgneo()
//     } else {
//         break
//     }
//     if(lucarioHp > 0 && charizardHp > 0) {
//         recuperacion()
//     } else {
//         break
//     } if(lucarioHp > 0 && charizardHp > 0) {
//         ataqueAla()
//     } else {
//         break
//     }
// }

if (lucarioHp <= 0){
    console.log("Lucario has faintedCharizard")
} else if (charizardHp <= 0){
    console.log("Charizard has faintedCharizard")
}
    






