function calcular() {
    var txta = window.document.querySelector("input#valora")
    var res = window.document.getElementById('resultado')
    a = Number(txta.value)
    if (a == 0) {
        res.innerHTML = "<p>O Valor de a não pode ser zero"
    }
    else {
        var txtb = window.document.querySelector("input#valorb")
        var txtc = window.document.querySelector("input#valorc")
        var b = Number(txtb.value)
        var c = Number(txtc.value)

        res.innerHTML = "<h3>Resolução da questão</h3>"
        res.innerHTML += `<p>a = ${a}</p>`
        res.innerHTML += `<p>b = ${b}</p>`
        res.innerHTML += `<p>c = ${c}</p>`

        var delta = b * b - 4 * a * c
        var xv = -b / (2 * a)
        // var yv = -delta / (4 * a)
        res.innerHTML += `<p>delta = ${delta}</p>`
        if (delta > 0) {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a)
            var x2 = (-b - Math.sqrt(delta)) / (2 * a)
            res.innerHTML += `<p>x1 = ${x2}</p>`
            res.innerHTML += `<p>x2 = ${x1}</p>`
        }
        else if (delta == 0) {
            res.innerHTML += `<p>x1 = x2 = ${xv}</p>`
        }
        else {
            var imaginaria = Math.sqrt(-delta) / (2 * a)
            if (xv == 0) {
                res.innerHTML += `<p>x1 = + ${imaginaria}i </p>`
                res.innerHTML += `<p>x2 = - ${imaginaria}i </p>`
            }
            else {
                res.innerHTML += `<p>x1 = ${xv} + ${imaginaria}i </p>`
                res.innerHTML += `<p>x2 = ${xv} - ${imaginaria}i </p>`
            }
        }



    }
}