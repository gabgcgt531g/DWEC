-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-07-2011 a las 10:48:03
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

CREATE USER 'ajax'@'localhost' IDENTIFIED BY 'dwec';

GRANT USAGE ON * . * TO 'ajax'@'localhost' IDENTIFIED BY 'dwec' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;

CREATE DATABASE IF NOT EXISTS `ajax` ;

GRANT ALL PRIVILEGES ON `ajax` . * TO 'ajax'@'localhost';

use  `ajax`;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ajax`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rss`
--

CREATE TABLE IF NOT EXISTS `rss` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Volcar la base de datos para la tabla `rss`
--

INSERT INTO `rss` (`id`, `titulo`, `url`) VALUES
(1, '20 minutos', 'http://20minutos.es/rss'),
(17, 'El Pais', 'http://www.elpais.com/rss/feed.html?feedId=1022');
