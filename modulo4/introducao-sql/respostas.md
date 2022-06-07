1-
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

CREATE TABLE Actors (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);`modifiquei algumas coisas pra fazer uns testes`

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

-SHOW DATABASE: mostra o usuario que criou a tabela
-SHOW TABLE: mostra detalhes de database da tabela

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

-mostra a tabela com os detalhes



//---------------------------------------------------------




2-*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

INSERT INTO Actors
VALUE(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

-entrada duplicada '002' para key primaria 

-como foi definido como chave primaria significa que não se pode usar outra pois uma chave primaria deve ser unica

c)

-em "INSERT INTO Actor (id, name, salary)" foram passados para adicionar apenas id, name e salary mas em VALUES foram passados todos os outros pra funcionar não deve se passar nada na primeira linha ou passar todos os parametros a serem adicionados

d)

-situação parecida com a anterior em "INSERT INTO Actor (id, salary, birth_date, gender)"
foram passados todos os parametros corretos porém como no CREATE TABLE definimos que
todos os valores deveriam ser preencidos(NOT NULL) não podemos deixar nenhum parametro faltando

e) 

-caso mais simples onde a data de nascimento deveria ser passada como string(VARCHAR) 
mas foi passada como number



//---------------------------------------------------------


Exercício 3

a) Escreva uma query que retorne todas as informações das atrizes
-
SELECT * from Actors
WHERE gender = "female";

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
-
SELECT salary FROM Actors
WHERE nome = "Tony Ramos"

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
-
- 0 resultados pois ele busca, mas não encontra nenhum logo retorna uma tabela vazia

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
-
SELECT id, nome, salary FROM Actors
WHERE salary <=500000;

e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

- a propriedade nome não pode ser encontrada (embora eu tenha trocado no meu pra nome e ao invez de Actor coloquei Actors da pra perceber)


/------------------------------------------------------------

Exercício 4


a) Explique com as suas palavras a query acima

- a QUERY vai retornar tudo dos atores que iniciarem com as letras A ou J e tiverem um salario maior que 300000

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
-
SELECT * FROM Actors
WHERE nome NOT LIKE "A%" AND salary > 350000


c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*
-

SELECT * FROM Actors
WHERE (nome LIKE "G%" OR nome LIKE "%G" OR nome LIKE "%G%");


d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
-

SELECT * FROM Actors
WHERE (nome LIKE "G%" OR nome LIKE "%G" OR nome LIKE "%G%") AND 
(nome LIKE "a%" OR nome LIKE "%a" OR nome LIKE "%a%") AND
salary > 350000 AND salary < 900000;


/---------------------------------------------------------------------------

Exercício 5

a)
-Usando um TEXT em índices comuns (não full-text) é necessário determinar o tamanho da chave. Você não pode indexar toda a coluna, precisa dizer quantos caracteres quer no índice. E outro ponto importante é que os textos na chave são armazenados sempre com os espaços para que todas as chaves tenham o mesmo tamanho. Isto é ineficiente e se você não souber o que está fazendo, terá resultados falsos.

TEXT não permite valores DEFAULT, o VARCHAR sim.

/-------------------------------------------------------------------------------

Exercício 6

a) Retorne o id, título e avaliação a partir de um id específico;   
-
SELECT id, titulo, avaliacao FROM Cinema
WHERE id = "004"

b) Retorne um filme a partir de um nome específico;
-
SELECT * FROM Cinema
WHERE nome = "auto da compadecida";

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
-
SELECT id, titulo, sinopse FROM Cinema
WHERE avaliacao >= 7;

/-------------------------------------------------------------------------------

Exercício 7

a) Retorna um filme cujo título contenha a palavra `vida`
-
SELECT * FROM Cinema
WHERE (titulo LIKE "%vida%" OR titulo LIKE "%vida"  OR titulo LIKE "vida%");

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
-
SELECT * FROM Cinema
WHERE (sinopse LIKE "%uma%" OR sinopse LIKE "%uma"  OR sinopse LIKE "uma%")

c) Procure por todos os filmes que já tenham lançado
-
SELECT * FROM Cinema
WHERE  data_de_lancamento != 2022

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
-
SELECT * FROM Cinema
WHERE data_de_lancamento != 2022 AND (sinopse LIKE "%uma%" OR sinopse LIKE "%uma"  OR sinopse LIKE "uma%")
AND Avaliacao = 7;


/------------------------------------------/

é isso, deu um trabalhinho pq era mt coisa, mas ta ai xD