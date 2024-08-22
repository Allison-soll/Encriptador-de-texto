const regex = /^[a-z\s]*$/;

document.querySelector('.boton-encriptar').addEventListener('click', function() {
    let textoParaEncriptar = document.querySelector('.input-texto-para-encriptar').value;
    const respuestaDiv = document.querySelector('.respuesta');

    if (regex.test(textoParaEncriptar)) {
        respuestaDiv.innerHTML = '';

        const textoInicial = document.createElement('p');
        textoInicial.textContent = textoParaEncriptar;
        respuestaDiv.appendChild(textoInicial);

        let listaDeLetras = textoParaEncriptar.split('');

        let contador = 0;

        while (contador < listaDeLetras.length) {
            if (listaDeLetras[contador] === 'a') { 
                listaDeLetras[contador] = "ai";
            }
            else if(listaDeLetras[contador] === 'e') { 
                listaDeLetras[contador] = "enter";
            }
            else if(listaDeLetras[contador] === 'i') { 
                listaDeLetras[contador] = "imes";
            }
            else if(listaDeLetras[contador] === 'o') { 
                listaDeLetras[contador] = "ober";
            }
            else if(listaDeLetras[contador] === 'u') { 
                listaDeLetras[contador] = "ufat";
            }
            contador += 1;
        }

        textoInicial.textContent = listaDeLetras.join('');

        const nuevoBoton = document.createElement('button');
        nuevoBoton.textContent = 'Copiar Texto';
        nuevoBoton.className = 'boton-copiar';
        respuestaDiv.appendChild(nuevoBoton);

        nuevoBoton.addEventListener('click', function() {
            const textArea = document.createElement('textarea');
            textArea.value = textoInicial.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });

    } else {
        respuestaDiv.innerHTML = "No puedes ingresar mayúsculas, ni caracteres especiales.";
    }
});

document.querySelector('.boton-desencriptar').addEventListener('click', function() {
    let textoParaDesencriptar = document.querySelector('.input-texto-para-encriptar').value;
    const respuestaDiv = document.querySelector('.respuesta');

    if (regex.test(textoParaDesencriptar)) {
        respuestaDiv.innerHTML = '';

        let textoDesencriptado = textoParaDesencriptar
            .replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        const textoInicial = document.createElement('p');
        textoInicial.textContent = textoDesencriptado;
        respuestaDiv.appendChild(textoInicial);
    } else {
        respuestaDiv.innerHTML = "No puedes ingresar mayúsculas, ni caracteres especiales.";
    }
});


