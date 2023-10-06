-- MySQL dump 10.13  Distrib 8.1.0, for macos13.3 (arm64)
--
-- Host: localhost    Database: we4meat4
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `status` int DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (133,17,1,7,1,'2023-10-05 16:07:32',NULL),(142,1,1,3,1,'2023-10-05 19:11:23',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `desc` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'pork',NULL,'2023-09-26 07:53:05','2023-10-05 10:50:57'),(2,'beef',NULL,'2023-09-26 07:53:30','2023-10-05 10:51:06'),(3,'chicken',NULL,'2023-09-26 07:53:37','2023-10-05 10:55:38'),(4,'seafood',NULL,'2023-09-26 07:53:42','2023-10-05 10:56:15'),(5,'mealkit',NULL,'2023-09-26 07:53:47','2023-10-05 10:57:18'),(6,'milk',NULL,'2023-09-26 07:53:52','2023-10-05 10:58:28'),(7,'egg',NULL,'2023-09-26 07:53:59','2023-10-05 10:59:08'),(8,'baby',NULL,'2023-09-26 07:54:03','2023-10-05 10:59:40');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_address`
--

DROP TABLE IF EXISTS `customer_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `message` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_id` (`customer_id`),
  CONSTRAINT `customer_address_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_address`
--

LOCK TABLES `customer_address` WRITE;
/*!40000 ALTER TABLE `customer_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_wallets`
--

DROP TABLE IF EXISTS `customer_wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_wallets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `credit` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `customer_wallets_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_wallets`
--

LOCK TABLES `customer_wallets` WRITE;
/*!40000 ALTER TABLE `customer_wallets` DISABLE KEYS */;
INSERT INTO `customer_wallets` VALUES (1,1,449000,'2023-10-05 05:09:10','2023-10-05 19:33:06'),(2,11,0,'2023-10-05 05:33:27','2023-10-05 05:47:24'),(3,12,0,'2023-10-05 05:49:03',NULL);
/*!40000 ALTER TABLE `customer_wallets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` varchar(13) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phonenumber` (`phonenumber`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'testerhoon1','testeroon@email.com','010-1234-5678','$2b$12$d/Wp/42GNfsUjmZ/1pleb.Ij57tTo5OgBlWX16LTcD8rqks.gImE6',NULL,'2023-09-30 08:40:38',NULL),(11,'권순형','soonhyung2@email.com','010-2345-6789','$2b$12$3Ae84aCENyHFg.byt/lz3eKw444hsCSRZjUDzE9zRWn0HebXv.06O',NULL,'2023-10-05 05:33:27',NULL),(12,'김동언','dongun@email.com','010-3456-7890','$2b$12$wQA5SrPWLUACg.2nNB6fnOo2ruzXNxERrScPDlt0g74gRRgpo0UoC',NULL,'2023-10-05 05:49:03',NULL),(14,'류창선','test@gmail.com','01071607921','$2b$12$SL39tTH77rthYRC23xG64ub5oKsr6aDh6dgebf5CucFTPTp7YfksO',NULL,'2023-10-05 13:06:30',NULL),(17,'성희진','banana@naver.com','01012341234','$2b$12$CGMAeKg4Yg2LLGx.FuPTxO042x05DHQXrgs6/U.8qMoYYl4hJ.mNe',NULL,'2023-10-05 13:17:12',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (31,9,1,1,5,'2023-10-04 21:36:39',NULL),(32,9,1,3,7,'2023-10-04 21:36:39',NULL),(33,9,1,2,8,'2023-10-04 21:36:39',NULL),(37,9,1,4,4,'2023-10-05 19:10:57',NULL),(38,9,1,3,2,'2023-10-05 19:10:57',NULL),(39,9,1,1,12,'2023-10-05 19:10:57',NULL);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `status_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_status_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `total_amount` int NOT NULL,
  `requested_date` date DEFAULT NULL,
  `shipping_message` varchar(40) DEFAULT NULL,
  `order_status` varchar(40) DEFAULT NULL,
  `pay_status` varchar(40) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (9,1,10000,NULL,NULL,NULL,'2','2023-10-04 21:36:39','2023-10-05 09:00:06'),(11,1,228000,NULL,NULL,NULL,NULL,'2023-10-05 19:10:57',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_inventories`
--

DROP TABLE IF EXISTS `product_inventories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_inventories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_inventories`
--

LOCK TABLES `product_inventories` WRITE;
/*!40000 ALTER TABLE `product_inventories` DISABLE KEYS */;
INSERT INTO `product_inventories` VALUES (1,1000,'2023-09-30 06:02:25',NULL,NULL),(2,500,'2023-09-30 08:47:52',NULL,NULL),(3,300,'2023-09-30 08:47:59',NULL,NULL),(4,400,'2023-10-05 17:42:10',NULL,NULL),(5,600,'2023-10-05 17:42:15',NULL,NULL),(6,745,'2023-10-05 17:42:24',NULL,NULL),(7,300,'2023-10-06 01:27:02',NULL,NULL),(8,8,'2023-10-06 01:27:28',NULL,NULL),(9,9,'2023-10-06 01:27:32',NULL,NULL),(10,10,'2023-10-06 01:27:36',NULL,NULL),(11,11,'2023-10-06 01:27:40',NULL,NULL),(12,12,'2023-10-06 01:27:44',NULL,NULL),(13,13,'2023-10-06 01:27:46',NULL,NULL),(14,14,'2023-10-06 01:27:49',NULL,NULL),(15,15,'2023-10-06 01:27:51',NULL,NULL),(16,16,'2023-10-06 01:27:54',NULL,NULL),(17,17,'2023-10-06 01:27:56',NULL,NULL),(18,18,'2023-10-06 01:28:02',NULL,NULL),(19,19,'2023-10-06 01:28:04',NULL,NULL),(20,20,'2023-10-06 01:28:07',NULL,NULL),(21,21,'2023-10-06 01:28:10',NULL,NULL),(22,22,'2023-10-06 01:28:14',NULL,NULL),(23,23,'2023-10-06 01:28:16',NULL,NULL),(24,24,'2023-10-06 01:28:18',NULL,NULL),(25,25,'2023-10-06 01:28:20',NULL,NULL),(26,26,'2023-10-06 01:28:22',NULL,NULL),(27,27,'2023-10-06 01:28:25',NULL,NULL),(28,28,'2023-10-06 01:28:29',NULL,NULL),(29,29,'2023-10-06 01:28:34',NULL,NULL),(30,30,'2023-10-06 01:28:37',NULL,NULL),(31,31,'2023-10-06 01:28:39',NULL,NULL),(32,32,'2023-10-06 01:28:41',NULL,NULL),(33,33,'2023-10-06 01:28:43',NULL,NULL),(34,34,'2023-10-06 01:28:51',NULL,NULL),(35,35,'2023-10-06 01:28:54',NULL,NULL),(36,36,'2023-10-06 01:28:56',NULL,NULL),(37,37,'2023-10-06 01:28:59',NULL,NULL),(38,38,'2023-10-06 01:29:01',NULL,NULL),(39,39,'2023-10-06 01:29:05',NULL,NULL),(40,40,'2023-10-06 01:29:09',NULL,NULL);
/*!40000 ALTER TABLE `product_inventories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `inventory_id` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_img` text,
  `price` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `desc` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `inventory_id` (`inventory_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`inventory_id`) REFERENCES `product_inventories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,4,1,'꼬막','https://user-images.githubusercontent.com/70473564/273078031-04c2999e-e22c-40c3-8bb7-21e056d55da8.jpeg',21600,600,NULL,'2023-10-06 01:38:00',NULL),(2,1,2,'보쌈','https://user-images.githubusercontent.com/70473564/273078043-401f7020-b43b-4ed9-bfeb-62330e209456.jpeg',22800,600,NULL,'2023-10-06 01:43:54',NULL),(3,3,3,'치킨','https://user-images.githubusercontent.com/70473564/273078054-7576e22b-8a29-4120-b5ba-c27ca1a76251.jpeg',21600,600,NULL,'2023-10-06 01:44:56',NULL),(4,1,4,'삽겹살','https://user-images.githubusercontent.com/70473564/273078059-89ae26e0-6fd7-4ffc-b6c7-22e29bfa75be.jpeg',22800,600,NULL,'2023-10-06 01:45:28',NULL),(5,2,5,'스테이크','https://user-images.githubusercontent.com/70473564/273078063-05d3c0db-2a2a-4ed1-bb64-2794ceada358.jpeg',19800,600,NULL,'2023-10-06 01:46:06',NULL),(6,2,6,'레어 스테이크','https://user-images.githubusercontent.com/70473564/273078065-63100adc-2e05-4a8a-b6fb-6301295485b6.jpeg',21600,600,NULL,'2023-10-06 01:47:00',NULL),(7,1,7,'대패삼겹','https://user-images.githubusercontent.com/70473564/273078066-f4bb40a3-a475-4e73-8be8-0355ce0cd921.jpeg',12600,600,NULL,'2023-10-06 01:47:56',NULL),(8,2,8,'드라이 에이지 스테이크','https://user-images.githubusercontent.com/70473564/273078068-36903a52-9e96-4633-8d53-047a94d4d9d1.jpeg',13800,600,NULL,'2023-10-06 01:49:54',NULL),(9,2,9,'육회','https://user-images.githubusercontent.com/70473564/273078069-9b8917f1-eb46-4678-83c8-b6c06b624583.jpeg',12600,600,NULL,'2023-10-06 01:50:25',NULL),(10,1,10,'사각 삼겹','https://user-images.githubusercontent.com/70473564/273078071-1580c8a0-036b-4629-84bf-55fe13aedf44.jpeg',13800,600,NULL,'2023-10-06 01:51:36',NULL),(11,1,11,'삼겹살 마늘구이','https://user-images.githubusercontent.com/70473564/273078073-fec91cac-42b2-47a3-9b00-732657e73b21.jpeg',9600,600,NULL,'2023-10-06 01:52:41',NULL),(12,4,12,'밀키트 완성','https://user-images.githubusercontent.com/70473564/273078074-49d485f1-fc7f-45ef-b595-287b5e1a660f.png',13200,600,NULL,'2023-10-06 01:53:29',NULL),(13,8,13,'유아용 꿀','https://user-images.githubusercontent.com/70473564/273078075-bfa3c99f-5c42-4c21-ad20-a683a8ec6c26.png',12600,600,NULL,'2023-10-06 01:55:13',NULL),(14,4,14,'밀키트 곰도리 도시락','https://user-images.githubusercontent.com/70473564/273078077-9ba8c41b-0a12-4688-ac72-830fc1c4e765.png',12300,600,NULL,'2023-10-06 01:55:49',NULL),(15,2,15,'대존맛 스테이크','https://user-images.githubusercontent.com/70473564/273078079-341cc25e-9e6c-44af-b02e-c44be6a9671f.png',8500,300,NULL,'2023-10-06 01:56:13',NULL),(16,1,16,'돈육 토마호크 스테이크','https://user-images.githubusercontent.com/70473564/273078080-761e963a-8cec-4741-82e0-b462657a474f.png',5500,300,NULL,'2023-10-06 01:56:38',NULL),(17,2,17,'신선 생고기','https://user-images.githubusercontent.com/70473564/273078082-6f1229c5-4880-4873-94ff-07fad1b032e2.png',6500,300,NULL,'2023-10-06 01:57:07',NULL),(18,3,18,'전기구기 통닭','https://user-images.githubusercontent.com/70473564/273078083-7c9fe6fb-6e40-4e72-9169-40d23cf34959.png',18900,300,NULL,'2023-10-06 01:57:49',NULL),(19,3,19,'닭다리','https://user-images.githubusercontent.com/70473564/273078086-047dc445-fb5b-45b1-9bf3-98c0275f546f.png',19800,300,NULL,'2023-10-06 01:58:15',NULL),(20,3,20,'백숙','https://user-images.githubusercontent.com/70473564/273078088-ecad0d5b-bf45-4a1e-a48c-c84ad226e3e0.png',18900,600,NULL,'2023-10-06 01:58:39',NULL),(21,7,21,'신선 계란','https://user-images.githubusercontent.com/70473564/273078091-f1d97df6-cd9a-4c7e-9409-47d56f1a94b0.png',21600,600,NULL,'2023-10-06 01:59:33',NULL),(22,7,22,'계란 한판','https://user-images.githubusercontent.com/70473564/273078092-2b6e7129-9241-4442-99df-fc8fc3787e81.png',22800,600,NULL,'2023-10-06 02:00:18',NULL),(23,7,23,'계한후라이','https://user-images.githubusercontent.com/70473564/273078094-55273edc-8b53-4c28-95d0-ebfddfa3472e.png',21600,600,NULL,'2023-10-06 02:00:44',NULL),(24,4,24,'냉동참치 한마리','https://user-images.githubusercontent.com/70473564/273078098-a293ed7d-7025-473f-81fd-c4a698ee6ea3.png',22800,600,NULL,'2023-10-06 02:01:26',NULL),(25,4,25,'신선새우','https://user-images.githubusercontent.com/70473564/273078099-dc1689e3-b480-42f2-87f7-fa6badee467a.png',19800,600,NULL,'2023-10-06 02:01:57',NULL),(26,4,26,'백합','https://user-images.githubusercontent.com/70473564/273078100-77266263-b7fa-4d25-992b-94b9b050b0fa.png',21600,600,NULL,'2023-10-06 02:03:05',NULL),(27,5,27,'계란 도시락','https://user-images.githubusercontent.com/70473564/273078101-69893693-6ba5-47e3-be35-09d91085a733.png',12600,600,NULL,'2023-10-06 02:03:21',NULL),(28,5,28,'연어 샐러드','https://user-images.githubusercontent.com/70473564/273078104-eb44bdea-4d77-410e-a6d4-b117495f6153.png',13800,600,NULL,'2023-10-06 02:03:38',NULL),(29,5,29,'돈까스 도시락','https://user-images.githubusercontent.com/70473564/273078105-4f119adb-152e-4830-b78f-32414609cf81.png',12600,600,NULL,'2023-10-06 02:03:56',NULL),(30,6,30,'신선우유','https://user-images.githubusercontent.com/70473564/273078107-d568eb31-c4c4-4ddb-b084-d4103b37fc19.png',13800,600,NULL,'2023-10-06 02:04:10',NULL),(31,6,31,'초신선 우유','https://user-images.githubusercontent.com/70473564/273078110-af955eb4-7e0e-495b-803c-f5d9277651fd.png',9600,600,NULL,'2023-10-06 02:04:23',NULL),(32,6,32,'초초초 신선 우유','https://user-images.githubusercontent.com/70473564/273078112-65d5d81f-1dbe-4a78-95c6-356fd6b9b127.png',13200,600,NULL,'2023-10-06 02:04:40',NULL),(33,1,33,'두껍삼겹','https://user-images.githubusercontent.com/70473564/273078116-c7537b6c-cc67-4df1-a100-3f7884cdc0a5.png',12600,600,NULL,'2023-10-06 02:04:52',NULL),(34,1,34,'목살 한근','https://user-images.githubusercontent.com/70473564/273078117-a269b307-9a24-4cb9-a8bb-ffbf985c94a3.png',12300,600,NULL,'2023-10-06 02:05:03',NULL),(35,2,35,'스테이크는 대존맛','https://user-images.githubusercontent.com/70473564/273078118-86390669-dcb5-433a-b051-4cc9ccc1e213.png',7500,300,NULL,'2023-10-06 02:05:16',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `imgUrl` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,1,'삽겹살은 맛있다','진짜 진짜 맛있어요, 둘이 먹다 둘이 죽어도 모를 맛!',NULL,'2023-10-03 10:46:56',NULL),(3,1,2,'한우 1+++? ','지금까지 이런 한우는 없었다. 이것은 투쁠인가 트리플인가?',NULL,'2023-10-03 11:59:53','2023-10-03 12:59:56'),(4,1,3,'이게 당일 도축 생닭?','수정4: 지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-03 12:02:47','2023-10-03 12:58:59'),(5,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 08:55:48',NULL),(7,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 12:10:28',NULL),(8,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 12:10:33',NULL),(9,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 12:10:56',NULL),(10,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 12:10:57',NULL),(11,1,3,'이게 당일 도축 생닭?','지금까지 치킨도 없었다, 이것은 갈비인가 치킨인가, 여기는 정!육!각!',NULL,'2023-10-05 12:10:58',NULL);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 11:12:15
