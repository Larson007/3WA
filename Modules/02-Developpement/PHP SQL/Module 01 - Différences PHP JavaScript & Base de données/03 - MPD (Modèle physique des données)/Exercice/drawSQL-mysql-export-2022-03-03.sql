CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `registration_date` DATETIME NOT NULL,
    `birthdate` DATETIME NOT NULL,
    `address_id` CHAR(255) NOT NULL
);
ALTER TABLE
    `users` ADD PRIMARY KEY `users_id_primary`(`id`);
CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `price` DOUBLE NOT NULL
);
ALTER TABLE
    `products` ADD PRIMARY KEY `products_id_primary`(`id`);
CREATE TABLE `pictures`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `caption` VARCHAR(255) NOT NULL,
    `product_id` CHAR(255) NOT NULL
);
ALTER TABLE
    `pictures` ADD PRIMARY KEY `pictures_id_primary`(`id`);
CREATE TABLE `orders`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `reference` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `user_id` CHAR(255) NOT NULL
);
ALTER TABLE
    `orders` ADD PRIMARY KEY `orders_id_primary`(`id`);
CREATE TABLE `categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `categories` ADD PRIMARY KEY `categories_id_primary`(`id`);
CREATE TABLE `adresses`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NOT NULL,
    `number` VARCHAR(255) NOT NULL,
    `complements` VARCHAR(255) NOT NULL,
    `postal_code` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `user_id` CHAR(255) NOT NULL
);
ALTER TABLE
    `adresses` ADD PRIMARY KEY `adresses_id_primary`(`id`);
CREATE TABLE `products_catgories`(
    `product_id` CHAR(255) NOT NULL,
    `category_id` CHAR(255) NOT NULL
);
CREATE TABLE `products_orders`(
    `product_id` CHAR(255) NOT NULL,
    `order_id` CHAR(255) NOT NULL
);
ALTER TABLE
    `products_orders` ADD CONSTRAINT `products_orders_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `pictures` ADD CONSTRAINT `pictures_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `products_orders` ADD CONSTRAINT `products_orders_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);
ALTER TABLE
    `orders` ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `products_catgories` ADD CONSTRAINT `products_catgories_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `products_catgories` ADD CONSTRAINT `products_catgories_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);