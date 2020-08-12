let alunos = [];

function Aluno(login, senha, nome, CPF, RG, dataNascim, nomeMae, nomePai, notas, materias, pagamentos){
    this.login = login;
    this.senha = senha;
    this.nome = nome;
    this.CPF = CPF;
    this.RG = RG;
    this.dataNascim = dataNascim;
    this.nomeMae = nomeMae;
    this.nomePai = nomePai;
    this.notas = notas;
    this.materias = materias;
    this.pagamentos = pagamentos;
}

let aluno1 = new Aluno("bruno@senai.com", "bruno123","Bruno Rogerio Candido", "123456879", "5874632","30/10/2015", "Maria", "Joao", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno2 = new Aluno("rodrigo@senai.com", "rodrigo123","Rodrigo Rothbarth", "32569875461", "5874632","25/05/2015", "Lucia", "Marcos", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno3 = new Aluno("maria@senai.com", "maria123","Maria Duz", "15498745", "32565412365","16/02/2015", "Flavia", "Vitor", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno4 = new Aluno("rafael@senai.com", "rafael123","Rafael Matos", "32156545", "98563214587","15/09/2015", "Maria", "Eduardo", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);

//console.log(aluno1);

alunos.push(aluno1, aluno2, aluno3, aluno4);

//console.log(alunos);

function validation(){

    let usern = document.getElementById("usuario");
    let pssw = document.getElementById("senha");
    for (i = 0; i <= alunos.length; i++){
        if(i == alunos.length){
            alert("Login Incorreto");
        }
        else if (alunos[i].login == usern.value){
            if(alunos[i].senha == pssw.value){
                console.log("Sucesso");
                localStorage.setItem('myStorage', JSON.stringify(alunos[i]));
                window.location.href="home.html";
            
            }
            else{
                alert("Senha Incorreta");
            }
            break;
        } 
    }
    usern.value = "";
    pssw.value = "";
 
}

function dados(){
    let alunoCadastrado = JSON.parse(localStorage.getItem('myStorage'))

    document.getElementById("nomeAluno").innerHTML = alunoCadastrado.nome
    document.getElementById("CPF").innerHTML = alunoCadastrado.CPF
    document.getElementById("RG").innerHTML = alunoCadastrado.RG
    document.getElementById("dataNasc").innerHTML = alunoCadastrado.dataNascim
    document.getElementById("nomePai").innerHTML = alunoCadastrado.nomePai
    document.getElementById("nomeMae").innerHTML = alunoCadastrado.nomeMae
  
}