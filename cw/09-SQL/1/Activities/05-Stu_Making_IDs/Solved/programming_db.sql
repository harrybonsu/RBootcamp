CREATE TABLE programming_languages (
	id SERIAL PRIMARY KEY,
	language VARCHAR(20) NOT NULL,
	rating int
);

SELECT * FROM programming_languages;


INSERT INTO programming_languages (language, rating)
VALUES
('HTML', 95),
('JS', 99),
('JQUERY', 98),
('MYSQL', 70),
('MYSQL', 70);

SELECT * FROM programming_languages WHERE language = 'MYSQL'

DELETE FROM programming_languages WHERE id = 5
