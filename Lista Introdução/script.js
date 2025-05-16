function calculoCinema(...args) {
    var idades = args;
    var soma = 0;

    for (let entry of idades) {
        if (entry <= 17) {
            soma = soma + 15;
        } else if (entry >= 18 && entry <= 59) {
            soma = soma + 30;
        } else {
            soma = soma + 20;
        }
    }

    return soma;

}

console.log("Exercicio 1");
console.log(calculoCinema(20, 30, 15));

function calculoDiaria(d, a, dia) {
    dia--;
    var quant_dias = 31 - dia;

    if (dia < 16) {
        valor = quant_dias * (d + (dia) * a);

    } else {
        valor = quant_dias * (d + (15) * a);
    }
    return valor;
}

console.log("Exercicio 2");
console.log(calculoDiaria(100, 5, 3));

function quadradoMagico(...args) {
    var matriz = args;
    var tam = matriz.length;

    var sum_row = new Array(tam).fill(0);
    var sum_col = new Array(tam).fill(0);
    var min_row, min_col, max_row, max_col, row, col, val;

    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam; j++) {
            if (matriz[i][j] == undefined) {
                row = i;
                col = j;
                matriz[i][j] = 0;
            }
            sum_row[i] += matriz[i][j];

        }
    }

    for (let i = 0; i < tam; i++) {

        if (i == 0) {
            min_row = sum_row[i];
            max_row = sum_row[i];
        } else {
            if (sum_row[i] <= min_row) {
                min_row = sum_row[i];
            } else {
                max_row = sum_row[i];
            }

        }
    }
    val = max_row - min_row;

    //Apresentação: primeira linha = linha 0 do array para melhorar visualização.
    return `Linha= ${row + 1} Coluna= ${col + 1} Valor= ${val}`;


}

console.log("Exercicio 3");
console.log(quadradoMagico([8, 1, 6], [3, 5, 7], [4, , 2]));

let funcionarios = [
    { nome: "Ricardo", idade: 35, cargo: "Gerente", salario: 2000 },
    { nome: "Amanda", idade: 28, cargo: "Analista", salario: 1500 },
    { nome: "Júlia", idade: 40, cargo: "Gerente", salario: 2000 },
    { nome: "Carlos", idade: 31, cargo: "Desenvolvedor", salario: 3000 },
    { nome: "Mariana", idade: 25, cargo: "Desenvolvedor", salario: 3000 },
    { nome: "Lucas", idade: 45, cargo: "Diretor", salario: 3500 },
    { nome: "Fernanda", idade: 29, cargo: "Analista", salario: 1500 },
    { nome: "Gustavo", idade: 38, cargo: "Diretor", salario: 3500 },
    { nome: "Letícia", idade: 22, cargo: "Analista", salario: 1500 },
    { nome: "Pedro", idade: 33, cargo: "Desenvolvedor", salario: 3000 }
];

function verficacoesFuncionarios(funcionarios) {

    const older25 = funcionarios.every(funcionario => funcionario.idade > 25);
    var analistas = funcionarios.filter((a) => a.cargo.includes("Analista"));
    funcionarios.forEach((a) => a.salario = a.salario * 1.1);
    const mediaIdade = funcionarios
        .filter(f => f.cargo === "Desenvolvedor")
        .reduce((acc, f, _, arr) => acc + f.idade / arr.length, 0);
    funcionarios.sort((a, b) => a.idade - b.idade);
    const primeiroDiretor = funcionarios.find(f => f.cargo === "Diretor");


    console.log(older25);
    console.log(analistas);
    console.log(funcionarios[3].salario.toFixed(2));
    console.log(mediaIdade.toFixed(2));
    console.log(funcionarios);
    console.log(primeiroDiretor);
}

console.log("Exercicio 4");
console.log(verficacoesFuncionarios(funcionarios));
