-- 1. La liste de tous les utilisateurs
SELECT * FROM users


-- 2. La liste de tous les utilisateurs rangée par noms de famille
SELECT * FROM users
ORDER BY users.last_name ASC


-- 3. Le dernier utilisateur inscrit
SELECT * FROM users
ORDER BY users.registration_date DESC
LIMIT 1


-- 4. La liste de tous les utilisateurs fêtant leur anniversaire ce mois-ci
SELECT * FROM users
WHERE MONTH(users.birthdate) = MONTH(CURRENT_TIMESTAMP)


-- 5. Le nombre total d'utilisateurs
SELECT COUNT(users.id) FROM users


-- 6. La liste de tous les utilisateurs associés à leurs villes respectives
SELECT users.*, addresses.city
FROM users
INNER JOIN addresses ON addresses.user_id = users.id


-- 7. La liste de tous les utilisateurs vivant à une adresse sans numéro
SELECT users.*
FROM users
INNER JOIN addresses ON addresses.user_id = users.id
WHERE addresses.number IS NULL


-- 8. La liste de tous les produits dont le prix est supérieur à 1 000 €
SELECT * FROM products WHERE products.price > 1000


-- 9. La liste des photos du produit le moins cher
SELECT pictures.*
FROM pictures
WHERE pictures.product_id IN (
    SELECT * FROM (
        SELECT products.id
        FROM products
        ORDER BY products.price ASC
        LIMIT 1
    ) AS p
)


-- 10. La liste de tous les produits appartenant à la catégorie « Voyage »
SELECT products.*
FROM products
INNER JOIN products_categories
    ON products_categories.product_id = products.id
INNER JOIN categories
    ON categories.id = products_categories.category_id
WHERE categories.title = "Voyage"


-- 11. La liste de tous les utilisateurs ayant effectué plus de dix commandes
SELECT users.*
FROM users
INNER JOIN orders ON orders.user_id = users.id
GROUP BY users.id
HAVING COUNT(orders.id) > 10


-- 12. La liste de tous les produits achetés par le premier utilisateur inscrit
SELECT products.*
FROM products
INNER JOIN products_orders
    ON products_orders.product_id = products.id
INNER JOIN orders
    ON orders.id = products_orders.order_id
INNER JOIN users
    ON users.id = orders.user_id
WHERE users.registration_date IN (
    SELECT MIN(users.registration_date) FROM users
)