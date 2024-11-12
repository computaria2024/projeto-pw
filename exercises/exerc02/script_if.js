function calculateGrade() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let resultText = "";

    if (media >= 70) {
        resultText = `Aprovado com média ${media}`;
        document.getElementById("result").className = "pass";
    } else if (media >= 50) {
        resultText = `Recuperação com média ${media}`;
        document.getElementById("result").className = "recovery";
    } else {
        resultText = `Reprovado com média ${media}`;
        document.getElementById("result").className = "fail";
    }

    document.getElementById("result").innerText = resultText;
}
