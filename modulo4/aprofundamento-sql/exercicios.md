Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary; vai retirar a coluna salary da tabela

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); altera o nome de gender pra sexe coloca como varchar(6)

c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255); serviria pra alterar a coluna gender, mas como colocou só gender n muda nada

d)ALTER TABLE Actors CHANGE gender gender VARCHAR(100); foi o que usei xD


/-----------------------------------------------------------------------------------------/

Exercício 2

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

UPDATE Actors
SET nome = "lhama sedutora", birth_date = "1999-12-12"
WHERE id = "003";

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*
-
SELECT UPER(nome)
from Actors;

SELECT LOWER(nome)
from Actors;

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*
-
UPDATE Actors
SET nome = "bolota", salary = 500, birth_date = "1999-12-12", gender = "male"
WHERE id = "005";

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
-
estranho deu certo, mas n mudou nenhum...

/-----------------------------------------------------------------------------------------/

Exercício 3

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

DELETE FROM Actors WHERE nome = "Fernanda Montenegro"

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
-
DELETE FROM Actors
WHERE gender = "male" AND salary >1000000

/-----------------------------------------------------------------------------------------/

Exercício 4

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
-
SELECT MAX(salary) FROM Actors;

b) *Escreva uma query que pegue o menor salário das atrizes*
-
SELECT MIN(salary) FROM Actors WHERE gender = "female";

c) *Escreva uma query que pegue a quantidade de atrizes*
-
SELECT COUNT(*) FROM Actors WHERE gender = "female";

d) *Escreva uma query que pegue a soma de todos os salários*
-
SELECT SUM(salary) FROM Actors;

/-----------------------------------------------------------------------------------------/

Exercício 5

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
-
a query conta quantos atores de cada genero existem e organiza por ordem

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
-
SELECT id, nome FROM Actors
ORDER BY nome DESC;

c) *Faça uma query que retorne todos os atores ordenados pelo salário*
-
SELECT * FROM Actors
ORDER BY salary;

d) *Faça uma query que retorne os atores com os três maiores salarios*
-
SELECT * FROM Actors
ORDER BY salary DESC
LIMIT 3;

e) *Faça uma query que retorne a média de salário por gênero*
-
SELECT AVG(salary), gender FROM Actors
GROUP BY gender;

/-----------------------------------------------------------------------------------------/

- Exercício 6 (na minha tabela nomeei como Cinema ao invés de Movie)
    
a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
-
ALTER TABLE Cinema ADD playing_limit_date DATE;


b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

ALTER TABLE Cinema CHANGE Avaliacao Avaliacao FLOAT;
    
c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
-
UPDATE Cinema
-

UPDATE Cinema
SET playing_limit_date = "2020-12-31"
WHERE id = "001"
    
d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

-
DELETE FROM Cinema WHERE id = "001";

/-----------------------------------------------------------------------------------------/

terminadinho xD