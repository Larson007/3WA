<?php

//* 01 : La liste de tous les utilisateurs :
/*
SELECT * 
    FROM users;
*/

//* 02 : La liste de tous les utilisateurs rangée par noms de famille :
/*
SELECT * 
    FROM `users` 
ORDER BY `users`.`last_name` ASC
*/

//* 03 : Le dernier utilisateur inscrit :
/*
SELECT * 
    FROM `users` 
ORDER BY id DESC LIMIT 1;
*/

//* 04 : La liste de tous les utilisateurs fêtant leur anniversaire ce mois-ci :
/*
SELECT * 
    FROM `users` 
WHERE MONTH(birthdate) = MONTH(NOW());
*/

//* 05 : Le nombre total d'utilisateurs :
/*
SELECT COUNT(*) 
    FROM `users`;
*/

//* 06 : La liste de tous les utilisateurs associés à leurs villes respectives :
/*
SELECT users.first_name, users.last_name, addresses.city 
    FROM `users` 
INNER JOIN `addresses` 
    ON users.address_id = addresses.id;
*/

//* 07 : La liste de tous les utilisateurs vivant à une adresse sans numéro :
/*
SELECT * 
    FROM `users` 
INNER JOIN `addresses` 
    ON users.address_id = addresses.id 
WHERE addresses.number IS NULL
*/

//* 08 : La liste de tous les produits dont le prix est supérieur à 1 000 € :
/*
SELECT * 
    FROM `products` 
WHERE price > 1000;
*/

//* 09 : La liste de tous les produits associés à leurs photos respectives :
/*
SELECT * 
    FROM `products` 
INNER JOIN `pictures` 
    ON pictures.product_id = products.id
*/

//* 10 : La liste de tous les produits appartenant à la catégorie « Voyage » :
/*
SELECT * 
    FROM products AS p, categories AS c, products_categories AS pc 
WHERE c.title = "Voyage" 
    AND p.id = pc.product_id 
    AND c.id = pc.category_id;
*/

//* 11 : La liste de tous les utilisateurs ayant effectué plus de dix commandes :
/*
SELECT users.first_name, users.last_name, users.email, COUNT(*) as order_count 
    FROM orders 
JOIN users 
WHERE users.id = orders.user_id 
GROUP BY users.email HAVING COUNT(*) > 10;
*/

//* 12 : La liste de tous les produits achetés par le premier utilisateur inscrit :
/*
SELECT DISTINCT users.first_name, users.last_name, users.email,users.registration_date, products.name, products.id
    FROM users
JOIN orders
    ON users.id = orders.user_id
JOIN products_orders
    ON orders.id = products_orders.order_id
JOIN products
    ON products.id = products_orders.product_id
        WHERE users.registration_date IN (
        SELECT MIN(users.registration_date) 
        FROM users
);
*/

?>