// crie uma funcao que recebe o array alunos e um numero que ira representar a med final.
// percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas sao maiores ou iguais a media final
// utilize a tecnica "Object destruturing" para manipular as propriedades desejadas de cada aluno.

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
        nome:'António',
        nota:4,
        turma:'3B',
    },
    {
        nome:'fernado',
        nota:3,
        turma:'3B',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    

    for (let i = 0; i < arr.length; i++){
        const { nota, nome } = arr[i];

        if(nota >= media){

             aprovados.push(nome);
        }
        
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

function alunosReprovados (arr, media){
    let reprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota,nome} = arr[i];
        
        if (nota < media) {
            reprovados.push(nome);
         
            
        }
        
    }
    return reprovados;


}

console.log(alunosReprovados( alunos, 5));




