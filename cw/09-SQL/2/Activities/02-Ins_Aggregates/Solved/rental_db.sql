select * from film limit 5;

select rating, count(film_id)
from film
group by rating;

select round(avg(rental_duration),2)
from film;

-- 1. What is the average cost to rent a film in the stores?
select round(avg(rental_rate),2) as "Average Rental Rate" from film;


-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
select rating, round(avg(rental_rate),2) as "Average Rental/Rating" 
from film
group by rating
order by "Average Rental/Rating" desc;

-- 3. How much would it cost to replace all the films in the database?
select sum(replacement_cost) from film;

-- 4. How much would it cost to replace all the films in each ratings category?
select rating, sum(replacement_cost) as replacement_cost
from film
group by rating;

-- 5. How long is the longest movie in the database? The shortest?
select max(length) as Max_length, min(length) as Min_length
from film;


