




const resultado = document.getElementById("resultado")
const paragrafo = document.getElementById("texto__resultado")
const entrada = document.getElementById('entrada')


function criptografar() {



    const textoInput = document.getElementById("texto").value

    if (textoInput == "") {
        entrada.children[0].removeAttribute("hidden")
        entrada.children[1].removeAttribute("hidden")
        entrada.children[2].removeAttribute("hidden")

        resultado.style.display = "none"
    } else {

        let textoCriptografado = textoInput.toLowerCase()
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");



        entrada.children[0].setAttribute("hidden", true)
        entrada.children[1].setAttribute("hidden", true)
        entrada.children[2].setAttribute("hidden", true)

        resultado.style.display = "flex"
        paragrafo.innerHTML = textoCriptografado
    }



}

function descriptografar() {

    const texto = document.getElementById('texto').value

    if (texto == "") {
        entrada.children[0].removeAttribute("hidden")
        entrada.children[1].removeAttribute("hidden")
        entrada.children[2].removeAttribute("hidden")

        resultado.style.display = "none"
    } else {
        let textoDescriptografado = texto.toLowerCase()
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");


        entrada.children[0].setAttribute("hidden", true)
        entrada.children[1].setAttribute("hidden", true)
        entrada.children[2].setAttribute("hidden", true)


        resultado.style.display = "flex"
        paragrafo.innerHTML = textoDescriptografado
    }


 

}



 async function copiarTexto(){
    
        const texto = paragrafo.innerHTML
      
 
        try {
          await navigator.clipboard.writeText(texto);
        } catch (error) {
          console.error(error.message);
        }
      
     navigator.clipboard.writeText(texto);
     mudarForma("botao__resultado");
    
}



function mudarForma(id) {
    const button = document.getElementById(id);
    const originalColor = button.style.backgroundColor;
    const orignalText = button.innerHTML;
    button.disabled = true;

    button.innerHTML = "Copiado!";
    button.style.backgroundColor = "#28ff68";
    setTimeout(() => {
        button.innerHTML = orignalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 1000);
}