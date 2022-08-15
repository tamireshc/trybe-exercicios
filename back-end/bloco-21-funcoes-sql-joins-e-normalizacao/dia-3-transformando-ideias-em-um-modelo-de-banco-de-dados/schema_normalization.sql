DROP SCHEMA IF EXISTS normalization;
	CREATE SCHEMA normalization;
    USE normalization;
    
    CREATE TABLE funcionarios (
		funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Nome VARCHAR(100) NOT NULL,
        Sobrenome VARCHAR(100) NOT NULL,
        Email VARCHAR(100),
        Telefone VARCHAR(15),
        DataCadastro DATETIME NOT NULL
	);
    CREATE TABLE Setor (
		setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        setor VARCHAR(100) NOT NULL
	);
    
    CREATE TABLE funcionario_setor( 
		setor_id INTEGER NOT NULL,
		funcionario_id INTEGER NOT NULL,
        CONSTRAINT PRIMARY KEY(setor_id, funcionario_id),
        FOREIGN KEY (setor_id) REFERENCES Setor (setor_id),
        FOREIGN KEY (funcionario_id) REFERENCES funcionarios (funcionario_id)
    );
    
    
INSERT INTO funcionarios (funcionario_id, Nome, Sobrenome, Email, Telefone, DataCadastro) VALUES
 (12, 'Joseph',	'Rodrigues', 'jo@gmail.com', '(35)998552-1445',	'2020-05-05 08:50:25'),
 (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
 (14, 'Cíntia',	'Duval', 'cindy@outlook.com', '(33)99855-4669',	'2020-05-05 10:55:35');
 
INSERT INTO Setor (setor) VALUES
('administracao'),
('vendas'),
('operacional'),
('estrategico'),
('marketing');

INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES
(12, 1),
(12,2),
(13, 3),
(14, 4),
(14,2);
	