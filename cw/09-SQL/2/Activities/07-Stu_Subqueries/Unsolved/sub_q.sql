select city.city_id, city, district from public.address
inner join public.city
on address.city_id = city.city_id
where city in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')

CREATE VIEW my_view AS
select first_name, last_name, address, city from public.address
inner join public.city
on address.city_id = city.city_id
inner join public.customer
on address.address_id = customer.address_id
where city like 'Q%'

drop view public.my_view

select first_name, last_name from customer where address_id in ( 
	select address_id from address where city_id in (
		select city_id from city where city like 'Q%')
	)
-- Write a query to get the number of copies of a film title that exist in the inventory.

CREATE VIEW title_count AS
select title, count(inventory.film_id) as "Number_of_Copies" from film
inner join inventory 
on film.film_id = inventory.film_id
group by title
order by title asc

select * from public.title_count 
where "Number_of_Copies" = 7 limit 8


