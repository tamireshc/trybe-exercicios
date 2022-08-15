DROP SCHEMA IF EXISTS zoologico;
	CREATE SCHEMA zoologico;
    USE zoologico;
    
    CREATE TABLE gerente (
		gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		nome VARCHAR(100) NOT NULL
    );
    
    CREATE TABLE animal(
		animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        sexo VARCHAR(1) NOT NULL,
        idade INT NOT NULL,
        localizacao VARCHAR(100)
    );
    
    CREATE TABLE cuidador(
		cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        gerente_id INT NOT NULL,
			FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
    );
    
    CREATE TABLE animalPorCuidador(
		animal_id INT NOT NULL,
        cuidador_id INT NOT NULL,
			CONSTRAINT PRIMARY KEY (animal_id, cuidador_id),
			FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
            FOREIGN KEY (animal_id) REFERENCES animal (animal_id)
    );
		

		
		