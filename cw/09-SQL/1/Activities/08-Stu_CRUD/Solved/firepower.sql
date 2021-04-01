-- Drop table if exists
DROP TABLE IF EXISTS firepower;

-- Create new table to import data
CREATE TABLE firepower (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

-- Import data from GlobalFirePower.csv
-- View the table to ensure all data has been imported correctly
SELECT * FROM firepower;

-- Find the rows that have a `ReservePersonnel` of 0 and remove these rows from the dataset.
SELECT * FROM firepower WHERE ReservePersonnel = 0;

DELETE FROM firepower WHERE ReservePersonnel = 0;

-- Let's find which country only has one `FighterAircraft`, and take note of it.
SELECT * FROM firepower WHERE FighterAircraft = 1; -- Sri Lanka

-- Every country in the world at least deserves one `FighterAircraft`—it only seems fair. Let's add one to each nation that has none.
SELECT * FROM firepower WHERE FighterAircraft = 0;

UPDATE public.firepower
SET FighterAircraft = 1 where FighterAircraft = 0;

UPDATE public.firepower
SET TotalAircraftStrength = TotalAircraftStrength+ 1 
where country <> 'SriLanka';

--  Find the [Averages](https://www.w3schools.com/sql/sql_count_avg_sum.asp) for `TotalMilitaryPersonnel`, `TotalAircraftStrength`, 
-- `TotalHelicopterStrength`, and `TotalPopulation`, and rename the columns with their designated average.

SELECT Avg(TotalMilitaryPersonnel) avg_personnel, Avg(TotalAircraftStrength) avg_Air_Strength, 
Avg(TotalHelicopterStrength) avg_Hel_Strength, Avg(TotalPopulation) avg_Population
FROM public.firepower;

SELECT * FROM public.firepower WHERE country in ('india', 'Iran', 'Angola');
