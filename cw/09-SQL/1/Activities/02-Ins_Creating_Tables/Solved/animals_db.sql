--CREATE TABLE TABLE_NAME (COLUMN DEFN);

--step 1: Create Table
CREATE TABLE people (
	Full_Name VARCHAR (30) NOT NULL,
	Has_Pet BOOLEAN DEFAULT FALSE,
	Pet_type VARCHAR (10) NOT NULL,
	Pet_Name VARCHAR (30) NOT NULL,
	Pet_Age INT
);

--Step 2: check if you can query
SELECT * FROM people;


-- step 3: Add some rows
INSERT INTO people (full_name, has_pet, pet_type, pet_name, pet_age)
VALUES 
('Name1', True, 'Cat', 'Pet1', 5),
('Name2', True, 'Monkey', 'Pet2', 6),
('Name3', Null, '', '', Null);

SELECT * FROM people
WHERE pet_age <=6
and (Pet_Name = 'monkey'
	 or 
	 Pet_type = 'cat');