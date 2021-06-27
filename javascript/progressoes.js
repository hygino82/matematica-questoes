function gerar() {

    var res = window.document.querySelector("div#resultado")
    var txtQuantidade = window.document.querySelector("input#quantidade")
    var txtPosicao = window.document.querySelector("input#posicao")
    var txtRazao = window.document.querySelector("input#razao")
    var txtElemento = window.document.querySelector("input#elemento")

    var pos = Number.parseInt(txtPosicao.value)
    var quant = Number.parseInt(txtQuantidade.value)
    var razao = Number(txtRazao.value)
    var elemento = Number(txtElemento.value)

    var a1 = elemento - (pos - 1) * razao
    res.innerHTML = `<p>Resolução</p>`

    for (var i = 1; i <= quant; i++) {
        res.innerHTML += `<p>a_${i} = ${a1 + (i - 1) * razao}</p>`
    }
}