CREATE TABLE cities (city VARCHAR(30) NOT NULL,
					 state VARCHAR (30) NOT NULL,
					 population int	 
);

SELECT * FROM cities;

INSERT INTO cities (city, state, population)

VALUES 
('Almeda', 'California', 79177),
('Mesa', 'Arizona', 496401),
('Boerne', 'Texas', 16056),
('Anaheim', 'California', 352497),
('Tucson', 'Arizona', 535677),
('Garland', 'Texas', 238002);

--select only cities
SELECT city FROM cities;

--1. Filter the table to view only cities in Arizona.
SELECT * FROM cities WHERE state = 'Arizona'

--2. Filter the table to view only cities with a population of less than 100,000.
SELECT * FROM cities WHERE population < 100000

--3. Filter the table to view California cities with a population of less than 100,000.
SELECT city FROM cities WHERE state = 'California'
and
population < 100000