-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 23 mars 2022 à 12:12
-- Version du serveur : 10.4.10-MariaDB
-- Version de PHP : 8.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `formations_php_framework`
--

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`) VALUES
(1, 'Mon premier article', 'Nunc vel libero ac nisi molestie interdum. Quisque quis nibh eget neque congue commodo a sed mauris. Proin vitae lectus at ipsum volutpat lobortis quis sed est. Vivamus lacinia molestie bibendum. Proin eu vulputate nulla. Maecenas pulvinar porttitor mi, at cursus dui. Duis ante est, efficitur quis faucibus ac, pulvinar in augue. Duis vitae lacinia lacus, nec elementum sem. Vivamus in suscipit dui. Sed molestie arcu eget mauris ornare, et ornare ipsum suscipit. Cras nec convallis massa. Vivamus lacinia, nunc non tincidunt porta, arcu leo pharetra magna, eget porta sapien tortor et nisi. Proin rutrum, ante vitae mattis mattis, mi nibh molestie nisl, quis gravida libero turpis sed risus. Donec id velit tincidunt, auctor lorem in, pretium urna.\r\n\r\n', '2022-03-23 11:39:44'),
(2, 'Mon deuxième articles', 'Nam a molestie velit. Curabitur pretium nulla ligula, efficitur mollis enim laoreet aliquam. Vestibulum tempor tortor neque. Integer ut sem id dui semper posuere nec at purus. Aenean quam quam, condimentum vel elementum vitae, convallis id leo. Donec suscipit auctor sapien, a finibus tellus sollicitudin vel. Nullam molestie tortor id rutrum ultrices. Curabitur luctus massa ac ante vestibulum, at tristique est blandit. Fusce rutrum sem at tellus consectetur, et fermentum neque vulputate. Morbi non felis massa. Maecenas vitae magna eu sapien tempus interdum. Nam euismod viverra ipsum, eu consequat sapien. Proin dignissim vitae lectus quis placerat.\r\n\r\n', '2022-03-23 11:40:20');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
