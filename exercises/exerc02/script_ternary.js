function calculateGrade() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const resultText = media >= 70 
        ? `Aprovado com média ${media}`
        : media >= 50 
            ? `Recuperação com média ${media}`
            : `Reprovado com média ${media}`;

    const resultClass = media >= 70 
        ? "pass"
        : media >= 50 
            ? "recovery"
            : "fail";

    document.getElementById("result").className = resultClass;
    document.getElementById("result").innerText = resultText;
}
