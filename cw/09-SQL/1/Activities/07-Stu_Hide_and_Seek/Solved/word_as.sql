CREATE TABLE wordassociation (
	author INT,
	word1 VARCHAR,
	word2 VARCHAR,
	source VARCHAR
);

SELECT count(*) FROM wordassociation;

SELECT * FROM wordassociation;

-- Create a query in which the data in the `word1` column is `stone`. 
SELECT * FROM wordassociation WHERE word1 = 'stone'

-- Create a query that collects all rows in which the author is within the range 0–10.
SELECT * FROM wordassociation WHERE author >= 1 and author <= 10


-- Create a query that searches for any rows that have `pie` in their `word1` or `word2` columns.
SELECT * FROM wordassociation WHERE word1 = 'pie' OR word2 = 'pie'

* Create a query that will collect all rows with a `source` of BC.
SELECT * FROM wordassociation WHERE SOURCE  = 'BC'
SELECT count(*) FROM wordassociation WHERE SOURCE  = 'BC';

* Create a query that will collect all rows with a `source` of BC and an author range between 333 and 335.
SELECT * FROM wordassociation WHERE SOURCE  = 'BC' AND author >= 333 and author < 335;

