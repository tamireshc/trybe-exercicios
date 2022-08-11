SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 3);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT CHAR_LENGTH('Oi, eu sou uma string');
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE ('trybe');
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?','DuckDuckGo?', 'Google?');
-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer');
-- Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas',13, 10 );
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', em que deve-se 
-- avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme".
-- Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'conheco o filme',"Não conheço o filme" )AS 'conheço o filme?'
FROM sakila.film;
-- Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de 'público-alvo' 
-- em que colocaremos a classificação do filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

SELECT title, rating, CASE
 WHEN rating = 'G' THEN "Livre para todos"
 WHEN rating = 'PG' THEN "Não recomendado para menores de 10 anos"
 WHEN rating = 'PG-13' THEN "Não recomendado para menores de 13 anos"
 WHEN rating = 'R' THEN "Não recomendado para menores de 17 anos"
 ELSE "Proibido para menores de idade"
  END AS 'público-alvo' 
FROM sakila.film;


-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0,  'Par','Ímpar') AS 'Par ou Ímpar';
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;
-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;

-- Monte uma query que gere um valor entre 15 e 20.
SELECT ROUND(15 + RAND()*5);
-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971,5);
-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);
-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('11:00:00','10:25:45');

-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film ;
-- A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film ;
-- A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film ;
-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROm sakila.film;
-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(*)  FROM sakila.customer GROUP BY active;
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID
--  da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, active, COUNT(*) FROM sakila.customer GROUP BY store_id, active;
-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados 
-- na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(rental_duration) FROM sakila.film GROUP BY rating ORDER BY rating DESC;
-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. 
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(*) FROM sakila.address GROUP BY district;

-- Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50.
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. 
-- Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media between 115 AND 121.50
ORDER BY duracao_media DESC;