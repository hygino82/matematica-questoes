var resMenu = window.document.querySelector("div#menu")
var opcao = 1//para usar os menus

function gerar() {
    var res = window.document.querySelector("div#resultado")

    var txtPosicao = window.document.querySelector("input#posicao")
    var txtElemento = window.document.querySelector("input#elemento")
    var txtQuantidade = window.document.querySelector("input#quantidade")

    var pos = Number.parseInt(txtPosicao.value)
    var quant = Number.parseInt(txtQuantidade.value)
    var elemento = Number(txtElemento.value)
    res.innerHTML = `<p>Resolução</p>`

    switch (opcao) {
        case 1:

            var txtRazao = window.document.querySelector("input#razao")
            var razao = Number(txtRazao.value)
            var a1 = elemento - (pos - 1) * razao

            for (var i = 1; i <= quant; i++) {
                res.innerHTML += `<p>a_${i} = ${a1 + (i - 1) * razao}</p>`
            }
            break
        case 2:

            var txtPosicao2 = window.document.querySelector("input#posicao2")

            if (txtPosicao.value == txtPosicao2.value) {
                window.alert('Os elementos devem ter posições distintas')
            }
            else {
                var txtElemento2 = window.document.querySelector("input#elemento2")

                var pos2 = Number.parseInt(txtPosicao2.value)
                var elemento2 = Number(txtElemento2.value)

                var razao = (elemento2 - elemento) / (pos2 - pos)

                res.innerHTML += `Razão = ${razao}`
                var a1 = elemento2 - (pos2 - 1) * razao

                for (var i = 1; i <= quant; i++) {
                    res.innerHTML += `<p>a_${i} = ${a1 + (i - 1) * razao}</p>`
                }
                break
            }
        default: window.alert("Opção inválida")
            break
    }
}

function menu01() {
    resMenu.innerHTML = `<p>Posição do elemento</p>
    <input type="number" name="posicao" id="posicao">
    <p>Elemento</p>
    <input type="number" name="elemento" id="elemento">
    <p>Razão</p>
    <input type="number" name="razao" id="razao">
    <p>Quantidade de elementos a gerar</p>
    <input type="number" name="quantidade" id="quantidade">
    </br>
    <input type="button" value="gerar" onclick="gerar()"> `
    opcao = 1
}

function menu02() {
    opcao = 2
    resMenu.innerHTML = `<p>Posição do elemento</p>
    <input type="number" name="posicao" id="posicao">
    <p>Elemento</p>
    <input type="number" name="elemento" id="elemento">

    <p>Posição do elemento</p>
    <input type="number" name="posicao2" id="posicao2">
    <p>Elemento</p>
    <input type="number" name="elemento2" id="elemento2">

    <p>Quantidade de elementos a gerar</p>
    <input type="number" name="quantidade" id="quantidade">
    </br>
    <input type="button" value="gerar" onclick="gerar()">`

}