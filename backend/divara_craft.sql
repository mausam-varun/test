-- MySQL dump 10.13  Distrib 8.0.45, for Linux (aarch64)
--
-- Host: localhost    Database: divara_craft
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` enum('super_admin','admin','partner') NOT NULL DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `preferred_currency` varchar(10) NOT NULL DEFAULT 'USD',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_admin_users_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--

LOCK TABLES `admin_users` WRITE;
/*!40000 ALTER TABLE `admin_users` DISABLE KEYS */;
INSERT INTO `admin_users` VALUES (2,'mausam@gmail.com','e10adc3949ba59abbe56e057f20f883e','super_admin','2026-03-31 17:05:05','2026-03-31 17:05:20','INR'),(3,'mausamvarun@gmail.com','$2b$10$DHfqKlbbbMu3uCGOTjRWhemlYrThaRqtkhobaeQeVW1Q7BiBP3RFK','super_admin','2026-04-05 04:10:39',NULL,'USD'),(4,'adminfix1775362463@example.com','$2b$10$7iS17iqXVQOm1qdejL5Hc.urX32u.A8cKgnwhSsDPM8897TDUL2lG','super_admin','2026-04-05 04:14:23','2026-04-05 05:14:03','USD'),(6,'mausamvarun1@gmail.com','$2b$10$t97ea2FbHcyMQR8qX9sG0OkJ9vq1aCQ4ifyHwZTIuMdYzeJr3g/s.','super_admin','2026-04-05 04:16:06','2026-04-05 04:16:19','INR'),(7,'mausam12@gmail.com','$2b$10$zxbTi6APMs0XRrwcqxReMeHfuO6gwjt2SfrHyj5yRAA8sKzKg9J52','super_admin','2026-04-10 17:02:41','2026-05-09 14:02:53','USD'),(8,'admin@divaracraft.com','$2b$10$96KXfROrNIJvfP0aOGkCGe4RV/5DSNPx.VBanlWz4NB.iKMWn/3nu','super_admin','2026-04-25 05:42:49','2026-04-25 05:51:41','USD');
/*!40000 ALTER TABLE `admin_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ai_search_results`
--

DROP TABLE IF EXISTS `ai_search_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_search_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `upload_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `score` float DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_upload` (`upload_id`),
  KEY `idx_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_search_results`
--

LOCK TABLES `ai_search_results` WRITE;
/*!40000 ALTER TABLE `ai_search_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `ai_search_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_settings`
--

DROP TABLE IF EXISTS `app_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_settings` (
  `key` varchar(100) NOT NULL,
  `value` text NOT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_settings`
--

LOCK TABLES `app_settings` WRITE;
/*!40000 ALTER TABLE `app_settings` DISABLE KEYS */;
INSERT INTO `app_settings` VALUES ('frontend_settings','{\"sections\":{\"hero\":true,\"aiMatch\":true,\"categories\":true,\"featured\":true,\"testimonials\":true,\"newsletter\":true,\"flashDeals\":true,\"recommendedProducts\":true,\"recentlyViewed\":true},\"theme\":{\"primaryColor\":\"#4a1942\",\"secondaryColor\":\"#64748b\",\"accentColor\":\"#d97706\",\"addToCartButtonColor\":\"#4a1942\",\"addToCartButtonHoverColor\":\"#9e338a\",\"wishlistButtonHoverColor\":\"#fecaca\",\"headerMenuHoverColor\":\"#f3f4f6\",\"fontFamily\":\"DM Sans\"}}',0,'2026-05-10 09:44:55'),('home_category_display_count','4',NULL,'2026-04-12 09:17:40'),('theme_colors','{\"primaryGradientStart\":\"#D946EF\",\"primaryGradientEnd\":\"#9333EA\",\"primaryPurple\":\"#9333EA\",\"deepPurple\":\"#7E22CE\",\"pink\":\"#D946EF\",\"gold\":\"#C9A45C\",\"textMain\":\"#111827\",\"textSecondary\":\"#1F2937\",\"textBody\":\"#6B7280\",\"textLight\":\"#9CA3AF\",\"borderLight\":\"#E5E7EB\",\"bgLight\":\"#F9FAFB\"}',NULL,'2026-04-12 03:21:40'),('usd_display_multiplier','1',7,'2026-05-09 15:27:20');
/*!40000 ALTER TABLE `app_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bangleAiMatches`
--

DROP TABLE IF EXISTS `bangleAiMatches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bangleAiMatches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dress_product_id` int DEFAULT NULL,
  `bangle_product_id` int NOT NULL,
  `color_similarity_score` decimal(3,2) DEFAULT '0.00',
  `matched_color_families` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_match` (`dress_product_id`,`bangle_product_id`),
  KEY `idx_bangle` (`bangle_product_id`),
  KEY `idx_color_similarity` (`color_similarity_score`),
  CONSTRAINT `bangleAiMatches_ibfk_1` FOREIGN KEY (`bangle_product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bangleAiMatches`
--

LOCK TABLES `bangleAiMatches` WRITE;
/*!40000 ALTER TABLE `bangleAiMatches` DISABLE KEYS */;
/*!40000 ALTER TABLE `bangleAiMatches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_cart` (`user_id`,`product_id`),
  KEY `idx_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
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
  `slug` varchar(100) DEFAULT NULL,
  `description` text,
  `is_home_visible` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int NOT NULL DEFAULT '0',
  `image_url` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Ever Green','ever-green','',1,3,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777643100/divara-craft/products/v6cpdktci4wekrpkj86h.jpg'),(2,'Other festival','other-festival','',1,4,'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'),(3,'Formal','formal','',1,2,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777642927/divara-craft/products/qztobyk3wthawklrpunl.jpg'),(4,'Navratri spacial','navratri-spacial','',1,1,'https://res.cloudinary.com/drom1d8qt/image/upload/v1775982283/divara-craft/products/cfpztnco9oqwrtygtyw5.jpg'),(5,'Womens','womens','',1,5,'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'),(6,'Bridal','bridal','',1,0,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777642281/divara-craft/products/a1jhkjsmlqgtsfwzvmst.jpg'),(7,'bangles','bangles',NULL,1,0,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color_name` varchar(100) NOT NULL,
  `color_code` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `color_name` (`color_name`),
  KEY `idx_colors_name` (`color_name`)
) ENGINE=InnoDB AUTO_INCREMENT=603 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'green','#000000','2026-04-08 18:09:46'),(2,'red','#FF0000','2026-04-08 18:11:01'),(3,'gold','#FFD700','2026-04-08 18:11:01'),(8,'maroon','#800000','2026-04-08 18:51:55'),(9,'olive green','#C4B454','2026-04-08 18:57:19'),(11,'silver','#C0C0C0','2026-04-08 18:57:19'),(12,'white','#FFFFFF','2026-04-08 18:57:19'),(111,'yellow','#FFFF00','2026-04-09 18:07:32'),(128,'off-white',NULL,'2026-04-10 17:33:35'),(129,'deep blue','#D4AF37','2026-04-10 17:35:43'),(131,'cream',NULL,'2026-04-10 17:35:43'),(132,'light blue',NULL,'2026-04-10 17:35:43'),(137,'orange','#FFD700','2026-04-10 17:39:28'),(140,'blue','#008000','2026-04-10 17:39:28'),(142,'black','#000000','2026-04-10 17:39:28'),(143,'deep red','#A10C1B','2026-04-10 17:41:54'),(144,'emerald green','#0F6F4C','2026-04-10 17:41:54'),(202,'multicolor',NULL,'2026-04-11 02:47:45'),(203,'traditional',NULL,'2026-04-11 02:47:45');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  `currency_code` varchar(10) DEFAULT NULL,
  `price_multiplier` decimal(5,2) DEFAULT '1.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `idx_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currencies`
--

DROP TABLE IF EXISTS `currencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(10) DEFAULT NULL,
  `symbol` varchar(10) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `exchange_rate` decimal(12,6) DEFAULT NULL,
  `is_base` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `idx_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currencies`
--

LOCK TABLES `currencies` WRITE;
/*!40000 ALTER TABLE `currencies` DISABLE KEYS */;
/*!40000 ALTER TABLE `currencies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `festive_season_banners`
--

DROP TABLE IF EXISTS `festive_season_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `festive_season_banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `top_label` varchar(255) NOT NULL DEFAULT 'FESTIVE SEASON',
  `main_title` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL DEFAULT '',
  `button_text` varchar(255) NOT NULL DEFAULT 'SHOP NOW',
  `button_link` varchar(500) NOT NULL DEFAULT '/shop',
  `image_url` varchar(500) DEFAULT NULL,
  `banner_color` varchar(50) NOT NULL DEFAULT '#FF6B6B',
  `accent_color` varchar(50) NOT NULL DEFAULT '#FFD700',
  `sort_order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `festive_season_banners`
--

LOCK TABLES `festive_season_banners` WRITE;
/*!40000 ALTER TABLE `festive_season_banners` DISABLE KEYS */;
INSERT INTO `festive_season_banners` VALUES (1,'FESTIVE SEASON','Festival','','SHOP NOW','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777794487/divara-craft/products/asngc47pdwe7h1cilxhz.jpg','#FF6B6B','#FFD700',0,1,'2026-05-03 07:48:00','2026-05-03 07:57:50'),(2,'FESTIVE SEASON','FESTIVE','','SHOP NOW','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777794530/divara-craft/products/yrihdwikfqfdxxysczh3.jpg','#FF6B6B','#FFD700',0,1,'2026-05-03 07:48:42','2026-05-03 07:57:50');
/*!40000 ALTER TABLE `festive_season_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flash_deals_banner`
--

DROP TABLE IF EXISTS `flash_deals_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flash_deals_banner` (
  `id` int NOT NULL DEFAULT '1',
  `main_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Festive Offers',
  `description` text COLLATE utf8mb4_unicode_ci,
  `shop_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '/shop',
  `background_image_url` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `flash_deals_banner_chk_1` CHECK ((`id` = 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flash_deals_banner`
--

LOCK TABLES `flash_deals_banner` WRITE;
/*!40000 ALTER TABLE `flash_deals_banner` DISABLE KEYS */;
INSERT INTO `flash_deals_banner` VALUES (1,'Festive Offers You\'ll Love','Exclusive Deals on Our Most Loved Bangles','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777784528/divara-craft/products/butdxiw6fq3mxmf4fb5c.jpg','2026-05-02 05:36:55','2026-05-03 05:02:01');
/*!40000 ALTER TABLE `flash_deals_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generated_designs`
--

DROP TABLE IF EXISTS `generated_designs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generated_designs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `upload_id` int DEFAULT NULL,
  `prompt` text,
  `image_url` text,
  `status` enum('generated','approved','rejected') DEFAULT 'generated',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_upload` (`upload_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generated_designs`
--

LOCK TABLES `generated_designs` WRITE;
/*!40000 ALTER TABLE `generated_designs` DISABLE KEYS */;
/*!40000 ALTER TABLE `generated_designs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_promo_banners`
--

DROP TABLE IF EXISTS `hero_promo_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero_promo_banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `banner_key` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `subtitle` varchar(500) NOT NULL DEFAULT '',
  `button_text` varchar(100) NOT NULL DEFAULT 'SHOP NOW →',
  `link` varchar(500) NOT NULL DEFAULT '/shop',
  `image_url` varchar(1000) NOT NULL DEFAULT '',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `banner_key` (`banner_key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_promo_banners`
--

LOCK TABLES `hero_promo_banners` WRITE;
/*!40000 ALTER TABLE `hero_promo_banners` DISABLE KEYS */;
INSERT INTO `hero_promo_banners` VALUES (1,'festive','FESTIVE PICKS','Celebrate in Every Color','SHOP NOW →','/shop?category=festive','https://res.cloudinary.com/drom1d8qt/image/upload/v1777813225/divara-craft/products/c4kqtnmfa8ilvgkxdnzn.jpg',1,'2026-05-03 13:00:18'),(2,'bridal','BRIDAL COLLECTION','Exclusive 20% OFF','EXPLORE NOW →','/shop?category=bridal','https://res.cloudinary.com/drom1d8qt/image/upload/v1777813266/divara-craft/products/mb1sq3ydjsntqqve9s03.jpg',1,'2026-05-09 20:52:30');
/*!40000 ALTER TABLE `hero_promo_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home3_banners`
--

DROP TABLE IF EXISTS `home3_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home3_banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eyebrow` varchar(255) NOT NULL DEFAULT '',
  `heading` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL DEFAULT '',
  `view_more_url` varchar(500) NOT NULL DEFAULT '/shop',
  `image_url` varchar(500) NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home3_banners`
--

LOCK TABLES `home3_banners` WRITE;
/*!40000 ALTER TABLE `home3_banners` DISABLE KEYS */;
INSERT INTO `home3_banners` VALUES (1,'NOURISH YOUR STYLE','Luxurious Bangle Collection','A beautiful collection','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777615356/divara-craft/products/hguzydugzcbo1hectm3p.jpg',0,1,'2026-05-01 05:55:49','2026-05-01 06:03:40'),(2,'TEST','TEST HEADING','TEST','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777615396/divara-craft/products/nj0svlhbmrtuupc8qdmn.jpg',0,1,'2026-05-01 05:59:53','2026-05-01 06:03:28'),(3,'Eyebrow Label','Heading','Description Description Description Description Description Description','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777615490/divara-craft/products/hv7flhn9mierupaa4f1x.jpg',0,1,'2026-05-01 06:04:44','2026-05-01 06:04:44');
/*!40000 ALTER TABLE `home3_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_sections`
--

DROP TABLE IF EXISTS `home_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `section` varchar(50) NOT NULL,
  `image_url` text,
  `top_label` varchar(100) DEFAULT NULL,
  `main_title` varchar(255) DEFAULT NULL,
  `description` text,
  `button_text` varchar(100) DEFAULT NULL,
  `button_link` varchar(500) DEFAULT NULL,
  `is_active` tinyint DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `section` (`section`),
  KEY `idx_section_active` (`section`,`is_active`)
) ENGINE=InnoDB AUTO_INCREMENT=473 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_sections`
--

LOCK TABLES `home_sections` WRITE;
/*!40000 ALTER TABLE `home_sections` DISABLE KEYS */;
INSERT INTO `home_sections` VALUES (1,'new_arrivals',NULL,'New Arrivals',NULL,NULL,NULL,NULL,1,'2026-04-12 05:17:45','2026-04-12 05:17:45'),(2,'our_story',NULL,'Our Story',NULL,NULL,NULL,NULL,1,'2026-04-12 05:17:45','2026-04-12 05:17:45');
/*!40000 ALTER TABLE `home_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_products_banner`
--

DROP TABLE IF EXISTS `new_products_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_products_banner` (
  `id` int NOT NULL DEFAULT '1',
  `image_url` varchar(1000) NOT NULL DEFAULT '',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_products_banner`
--

LOCK TABLES `new_products_banner` WRITE;
/*!40000 ALTER TABLE `new_products_banner` DISABLE KEYS */;
INSERT INTO `new_products_banner` VALUES (1,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777634941/divara-craft/products/acjzkrvovyojtzrgcpdt.jpg','2026-05-01 11:28:53');
/*!40000 ALTER TABLE `new_products_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_order` (`order_id`),
  KEY `idx_product` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,16,123.00,1,'2026-03-28 09:33:49'),(2,2,14,233.00,2,'2026-03-28 18:21:43'),(3,2,15,23.00,1,'2026-03-28 18:21:43'),(4,3,6,1500.00,1,'2026-03-28 18:33:40'),(5,4,14,233.00,1,'2026-03-28 18:40:48'),(6,4,16,123.00,1,'2026-03-28 18:40:48'),(7,5,15,23.00,2,'2026-03-29 01:45:17'),(8,6,15,25.50,6,'2026-03-31 17:50:44'),(9,6,14,30.00,1,'2026-03-31 17:50:44'),(10,6,6,20.00,2,'2026-03-31 17:50:44'),(11,6,16,35.50,2,'2026-03-31 17:50:44'),(12,6,17,11.45,1,'2026-03-31 17:50:44'),(13,7,16,35.50,3,'2026-03-31 17:52:03'),(14,7,17,11.45,1,'2026-03-31 17:52:03'),(15,7,18,14.46,1,'2026-03-31 17:52:03'),(16,8,16,35.50,4,'2026-03-31 17:55:01'),(17,9,17,11.45,1,'2026-04-01 02:49:17'),(18,10,17,11.45,1,'2026-04-05 05:29:46'),(19,11,17,11.45,1,'2026-04-05 05:37:12'),(20,12,6,20.00,5,'2026-04-09 18:50:59'),(21,13,6,20.00,1,'2026-04-09 18:57:23'),(22,14,25,36.13,1,'2026-04-09 18:58:49'),(23,15,25,36.13,1,'2026-04-10 02:19:46'),(24,16,25,36.13,1,'2026-04-10 02:20:07'),(25,17,36,500.00,1,'2026-05-09 18:55:41'),(26,18,36,500.00,1,'2026-05-09 20:29:36');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `base_amount` decimal(10,2) DEFAULT NULL,
  `display_amount` decimal(10,2) DEFAULT NULL,
  `currency_code` varchar(10) DEFAULT NULL,
  `exchange_rate` decimal(12,6) DEFAULT NULL,
  `price_multiplier` decimal(5,2) DEFAULT NULL,
  `payment_status` enum('pending','paid','failed') DEFAULT NULL,
  `payment_method` enum('online','cod') DEFAULT NULL,
  `order_status` enum('placed','processing','shipped','delivered','cancelled') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `order_number` varchar(40) DEFAULT NULL,
  `customer_name` varchar(150) DEFAULT NULL,
  `customer_email` varchar(200) DEFAULT NULL,
  `customer_phone` varchar(40) DEFAULT NULL,
  `address_line1` varchar(255) DEFAULT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `postal_code` varchar(40) DEFAULT NULL,
  `country` varchar(120) DEFAULT NULL,
  `subtotal_amount` decimal(10,2) DEFAULT NULL,
  `shipping_amount` decimal(10,2) DEFAULT NULL,
  `tax_amount` decimal(10,2) DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `shiprocket_order_id` varchar(100) DEFAULT NULL,
  `shiprocket_shipment_id` varchar(100) DEFAULT NULL,
  `awb_code` varchar(100) DEFAULT NULL,
  `courier_name` varchar(150) DEFAULT NULL,
  `tracking_url` text,
  `razorpay_order_id` varchar(100) DEFAULT NULL,
  `razorpay_payment_id` varchar(100) DEFAULT NULL,
  `delivered_at` datetime DEFAULT NULL,
  `is_rating_eligible` tinyint(1) NOT NULL DEFAULT '0',
  `is_rated` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_status` (`order_status`),
  KEY `idx_payment` (`payment_status`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,NULL,129.15,129.15,'USD',1.000000,1.00,'pending','cod','placed','2026-03-28 09:33:49','DVC-MNA4UZ84-CO48QB','Test User','test@example.com','9876543210','123 Craft Street','Suite 4','Jaipur','Rajasthan','302001','India',123.00,0.00,6.15,129.15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(2,NULL,513.45,513.45,'USD',1.000000,1.00,'pending','cod','placed','2026-03-28 18:21:43','DVC-MNANPV8B-HWWXXN','mausam','mausam.test2@gmail.com','9939977402','sdsdsdsd','ssdsdsd','indore','MP','222222','India',489.00,0.00,24.45,513.45,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(3,NULL,1575.00,1575.00,'USD',1.000000,1.00,'pending','cod','placed','2026-03-28 18:33:40','-DC00000001','mausam','mausam.test2@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',1500.00,0.00,75.00,1575.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(4,NULL,373.80,373.80,'USD',1.000000,1.00,'pending','cod','placed','2026-03-28 18:40:48','-DC00000002','mausam','mausam.test2@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',356.00,0.00,17.80,373.80,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(5,NULL,53.29,53.29,'USD',1.000000,1.00,'pending','cod','placed','2026-03-29 01:45:17','-DC00000003','mausam','mausam.test2@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',46.00,4.99,2.30,53.29,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(6,NULL,320.72,320.72,'USD',1.000000,1.00,'pending','cod','placed','2026-03-31 17:50:44','-DC00000004','mausam','mausam.varun22@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',305.45,0.00,15.27,320.72,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(7,NULL,139.03,139.03,'USD',1.000000,1.00,'pending','cod','placed','2026-03-31 17:52:03','-DC00000005','mausam','mausam.varun22@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',132.41,0.00,6.62,139.03,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(8,NULL,149.10,149.10,'USD',1.000000,1.00,'pending','cod','placed','2026-03-31 17:55:01','-DC00000006','mausam','mausam.varun22@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',142.00,0.00,7.10,149.10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(9,NULL,17.01,17.01,'USD',1.000000,1.00,'pending','cod','placed','2026-04-01 02:49:17','-DC00000007','mausam','mausam.varun22@gmail.com','8839977402','23sdsdsdsd','sdsdsd','indore','MP','4500000','India',11.45,4.99,0.57,17.01,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(10,4,17.01,17.01,'USD',1.000000,1.00,'pending','cod','delivered','2026-04-05 05:29:46','-DC00000008','mausam','mausam.test4@gmail.com','8839977402','14b','14b','indore','MP','452003','India',11.45,4.99,0.57,17.01,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2026-03-31 17:55:01',1,1),(11,4,17.01,17.01,'USD',1.000000,1.00,'pending','cod','delivered','2026-04-05 05:37:12','-DC00000009','mausam','mausam.test4@gmail.com','8839977402','14b','14b','indore','MP','452003','India',11.45,4.99,0.57,17.01,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2026-03-31 17:55:01',1,0),(12,5,105.00,105.00,'USD',1.000000,1.00,'pending','cod','placed','2026-04-09 18:50:59','-DC00000010','Divara Craft','mausamvarun@gmail.com','12323323','2323','2323','2323','2323','232323','India2323',100.00,0.00,5.00,105.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(13,NULL,25.99,25.99,'USD',1.000000,1.00,'pending','online','placed','2026-04-09 18:57:23','-DC00000011','Test User','test@example.com','9999999999','123 Test St','','Mumbai','Maharashtra','400001','India',20.00,4.99,1.00,25.99,NULL,NULL,NULL,NULL,NULL,'order_SbV8E9J9FrS3IC',NULL,NULL,0,0),(14,5,42.93,42.93,'USD',1.000000,1.00,'pending','online','placed','2026-04-09 18:58:49','-DC00000012','Divara Craft','mausamvarun@gmail.com','12323323','2323','2323','2323','2323','232323','India2323',36.13,4.99,1.81,42.93,NULL,NULL,NULL,NULL,NULL,'order_SbV9jbaDDj3UoD',NULL,NULL,0,0),(15,5,42.93,42.93,'USD',1.000000,1.00,'pending','online','placed','2026-04-10 02:19:46','-DC00000013','Divara Craft','mausamvarun@gmail.com','12323323','2323','2323','2323','2323','232323','India2323',36.13,4.99,1.81,42.93,NULL,NULL,NULL,NULL,NULL,'order_SbcfX9w7O3QPjz',NULL,NULL,0,0),(16,5,42.93,42.93,'USD',1.000000,1.00,'pending','online','placed','2026-04-10 02:20:07','-DC00000014','Divara Craft','mausamvarun@gmail.com','12323323','2323','2323','2323','2323','232323','India2323',36.13,4.99,1.81,42.93,NULL,NULL,NULL,NULL,NULL,'order_Sbcfsnn2hG0UP8',NULL,NULL,0,0),(17,6,525.00,525.00,'USD',1.000000,1.00,'pending','online','placed','2026-05-09 18:55:41','-DC00000015','mausam','mausam.test@gmail.com','8839977402','14b','wewe','indore','madhya','452003','India',500.00,0.00,25.00,525.00,NULL,NULL,NULL,NULL,NULL,'order_SnN8ELCPiLbr4Y',NULL,NULL,0,0),(18,6,525.00,525.00,'USD',1.000000,1.00,'pending','online','placed','2026-05-09 20:29:36','-DC00000016','mausam','mausam.test@gmail.com','8839977402','14b','wewe','Ludhiana','Punjab','141007','India',500.00,0.00,25.00,525.00,NULL,NULL,NULL,NULL,NULL,'order_SnOjS2puVoL4br',NULL,NULL,0,0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_ai_metadata`
--

DROP TABLE IF EXISTS `product_ai_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_ai_metadata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `colors` json DEFAULT NULL,
  `pattern` varchar(100) DEFAULT NULL,
  `style` varchar(100) DEFAULT NULL,
  `material` varchar(100) DEFAULT NULL,
  `ai_description` text,
  `embedding_id` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_product` (`product_id`),
  KEY `idx_pattern` (`pattern`),
  KEY `idx_style` (`style`),
  KEY `idx_embedding` (`embedding_id`),
  CONSTRAINT `product_ai_metadata_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_ai_metadata`
--

LOCK TABLES `product_ai_metadata` WRITE;
/*!40000 ALTER TABLE `product_ai_metadata` DISABLE KEYS */;
INSERT INTO `product_ai_metadata` VALUES (1,27,'[\"blue\", \"gold\"]','[\"zari\"]','[\"modern\"]','[\"velvet\",\"gold zari\"]',NULL,NULL,'2026-04-11 02:42:25'),(2,28,'[\"yellow\", \"red\"]','[\"sequin\"]','[\"festive\"]','[\"thread\",\"sequin\"]',NULL,NULL,'2026-04-11 02:42:25'),(6,27,'[\"blue\", \"gold\"]','[\"zari\"]','[\"modern\"]','[\"velvet\",\"gold zari\"]',NULL,NULL,'2026-04-11 02:43:02'),(7,28,'[\"yellow\", \"red\"]','[\"sequin\"]','[\"festive\"]','[\"thread\",\"sequin\"]',NULL,NULL,'2026-04-11 02:43:02'),(11,33,'[\"Olive Green\", \"Olive Green\", \"Silver\", \"Gold\", \"Olive Green\", \"Silver\", \"Gold\"]','[\"Floral\",\"Geometric\",\"Abstract\"]','[\"Ethnic\",\"Traditional\",\"Indian\",\"Festive\"]','[\"Fabric (Silk Thread)\",\"Metal (Base)\",\"Sequins\",\"Beads\",\"Metallic Thread\"]',NULL,NULL,'2026-04-11 02:49:50'),(12,34,'[\"white\"]','[\"geometric\", \"tribal\"]','[\"ethnic\", \"traditional\"]','[\"fabric\", \"thread\"]',NULL,NULL,'2026-04-11 02:58:14'),(14,36,'[\"Blue\", \"Blue\", \"Gold\", \"white\", \"Blue\", \"Gold\", \"white\"]','[\"Floral\",\"Geometric\"]','[\"Ethnic\"]','[\"Fabric (velvet-like)\",\"Metallic Thread\",\"Metal (base)\",\"Lace\",\"Trim\"]',NULL,NULL,'2026-04-13 10:46:43'),(15,36,NULL,'[\"Floral\",\"Geometric\"]','[\"Ethnic\"]','[\"Fabric (velvet-like)\",\"Metallic Thread\",\"Metal (base)\",\"Lace\",\"Trim\"]',NULL,NULL,'2026-05-09 15:27:00'),(16,27,NULL,'[\"Floral\",\"Geometric (scalloped trim)\"]','[\"Ethnic\",\"Traditional\",\"Festive\"]','[\"Velvet fabric\",\"Metal (base)\",\"Zari thread\",\"Cotton\",\"Silk thread\",\"Metallic lace\",\"trim\"]',NULL,NULL,'2026-05-09 15:48:19'),(17,36,NULL,'[\"Floral\",\"Geometric\"]','[\"Ethnic\"]','[\"Fabric (velvet-like)\",\"Metallic Thread\",\"Metal (base)\",\"Lace\",\"Trim\"]',NULL,NULL,'2026-05-09 18:30:51'),(18,36,NULL,'[\"Floral\",\"Geometric\"]','[\"Ethnic\"]','[\"Fabric (velvet-like)\",\"Metallic Thread\",\"Metal (base)\",\"Lace\",\"Trim\"]',NULL,NULL,'2026-05-09 18:31:09'),(19,36,NULL,'[\"Floral\",\"Geometric\"]','[\"Ethnic\"]','[\"Fabric (velvet-like)\",\"Metallic Thread\",\"Metal (base)\",\"Lace\",\"Trim\"]',NULL,NULL,'2026-05-09 18:31:29');
/*!40000 ALTER TABLE `product_ai_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attributes`
--

DROP TABLE IF EXISTS `product_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_attributes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `attribute_key` varchar(100) NOT NULL,
  `attribute_value` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_product_attribute` (`product_id`,`attribute_key`,`attribute_value`),
  KEY `idx_product_attribute_product` (`product_id`),
  KEY `idx_product_attribute_key` (`attribute_key`),
  KEY `idx_product_attribute_key_value` (`attribute_key`,`attribute_value`),
  CONSTRAINT `product_attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1302 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attributes`
--

LOCK TABLES `product_attributes` WRITE;
/*!40000 ALTER TABLE `product_attributes` DISABLE KEYS */;
INSERT INTO `product_attributes` VALUES (561,33,'product_type','Bangles','2026-04-11 02:49:50'),(562,33,'category','bangles','2026-04-11 02:49:50'),(563,33,'sub_category','Bracelets & Bangles','2026-04-11 02:49:50'),(564,33,'primary_color','Olive Green','2026-04-11 02:49:50'),(565,33,'secondary_colors','Olive Green','2026-04-11 02:49:50'),(566,33,'secondary_colors','Silver','2026-04-11 02:49:50'),(567,33,'secondary_colors','Gold','2026-04-11 02:49:50'),(568,33,'color_family','Green','2026-04-11 02:49:50'),(569,33,'color_family','Metallic','2026-04-11 02:49:50'),(570,33,'material_estimated','Fabric (Silk Thread)','2026-04-11 02:49:50'),(571,33,'material_estimated','Metal (Base)','2026-04-11 02:49:50'),(572,33,'material_estimated','Sequins','2026-04-11 02:49:50'),(573,33,'material_estimated','Beads','2026-04-11 02:49:50'),(574,33,'material_estimated','Metallic Thread','2026-04-11 02:49:50'),(575,33,'finish','Matte, Metallic','2026-04-11 02:49:50'),(576,33,'style','Ethnic','2026-04-11 02:49:50'),(577,33,'style','Traditional','2026-04-11 02:49:50'),(578,33,'style','Indian','2026-04-11 02:49:50'),(579,33,'style','Festive','2026-04-11 02:49:50'),(580,33,'occasion','Festive','2026-04-11 02:49:50'),(581,33,'occasion','Wedding','2026-04-11 02:49:50'),(582,33,'occasion','Cultural Events','2026-04-11 02:49:50'),(583,33,'occasion','Party Wear','2026-04-11 02:49:50'),(584,33,'pattern','Floral','2026-04-11 02:49:50'),(585,33,'pattern','Geometric','2026-04-11 02:49:50'),(586,33,'pattern','Abstract','2026-04-11 02:49:50'),(587,33,'design_elements','Floral motifs','2026-04-11 02:49:50'),(588,33,'design_elements','Geometric borders','2026-04-11 02:49:50'),(589,33,'design_elements','Thread work','2026-04-11 02:49:50'),(590,33,'design_elements','Sequin work','2026-04-11 02:49:50'),(591,33,'embellishments','Sequins','2026-04-11 02:49:50'),(592,33,'embellishments','Small Beads','2026-04-11 02:49:50'),(593,33,'embellishments','Metallic thread embroidery','2026-04-11 02:49:50'),(594,33,'craft_type','Thread wrapping','2026-04-11 02:49:50'),(595,33,'craft_type','Embroidery','2026-04-11 02:49:50'),(596,33,'craft_type','Sequin work','2026-04-11 02:49:50'),(597,33,'texture','Smooth, Slightly Raised','2026-04-11 02:49:50'),(598,33,'visual_density','Moderate to High','2026-04-11 02:49:50'),(599,33,'shape','Round','2026-04-11 02:49:50'),(600,33,'usage','Wrist wear','2026-04-11 02:49:50'),(601,33,'usage','Fashion accessory','2026-04-11 02:49:50'),(602,33,'aesthetic_tags','Traditional','2026-04-11 02:49:50'),(603,33,'aesthetic_tags','Elegant','2026-04-11 02:49:50'),(604,33,'aesthetic_tags','Festive','2026-04-11 02:49:50'),(605,33,'aesthetic_tags','Indian','2026-04-11 02:49:50'),(606,33,'aesthetic_tags','Handicraft','2026-04-11 02:49:50'),(607,33,'aesthetic_tags','Embellished','2026-04-11 02:49:50'),(608,33,'aesthetic_tags','Bohemian','2026-04-11 02:49:50'),(609,33,'cultural_inference','Indian / South Asian','2026-04-11 02:49:50'),(610,33,'quality_inference','Handcrafted, intricate detailing, good finish.','2026-04-11 02:49:50'),(611,33,'target_gender','Women','2026-04-11 02:49:50'),(612,34,'product_type','Bangles','2026-04-11 02:58:13'),(613,34,'category','bangles','2026-04-11 02:58:13'),(614,34,'sub_category','Bangles','2026-04-11 02:58:13'),(615,34,'primary_color','White','2026-04-11 02:58:13'),(616,34,'secondary_colors','White','2026-04-11 02:58:13'),(617,34,'secondary_colors','Orange','2026-04-11 02:58:13'),(618,34,'secondary_colors','Yellow','2026-04-11 02:58:13'),(619,34,'secondary_colors','Red','2026-04-11 02:58:13'),(620,34,'secondary_colors','Blue','2026-04-11 02:58:13'),(621,34,'secondary_colors','Green','2026-04-11 02:58:13'),(622,34,'secondary_colors','Black','2026-04-11 02:58:13'),(623,34,'color_family','Multi-color','2026-04-11 02:58:13'),(624,34,'color_family','Vibrant','2026-04-11 02:58:13'),(625,34,'color_family','Bright','2026-04-11 02:58:13'),(626,34,'material_estimated','Fabric','2026-04-11 02:58:13'),(627,34,'material_estimated','Thread','2026-04-11 02:58:13'),(628,34,'material_estimated','Base material (likely plastic or wood)','2026-04-11 02:58:13'),(629,34,'finish','Matte','2026-04-11 02:58:13'),(630,34,'style','Ethnic','2026-04-11 02:58:13'),(631,34,'style','Traditional','2026-04-11 02:58:13'),(632,34,'style','Folk Art','2026-04-11 02:58:13'),(633,34,'style','Bohemian','2026-04-11 02:58:13'),(634,34,'occasion','Casual','2026-04-11 02:58:13'),(635,34,'occasion','Festive','2026-04-11 02:58:13'),(636,34,'occasion','Cultural Events','2026-04-11 02:58:13'),(637,34,'pattern','Geometric (triangles','2026-04-11 02:58:13'),(638,34,'pattern','zigzags','2026-04-11 02:58:13'),(639,34,'pattern','chevrons)','2026-04-11 02:58:13'),(640,34,'pattern','Figural (human figures)','2026-04-11 02:58:13'),(641,34,'pattern','Abstract','2026-04-11 02:58:13'),(642,34,'design_elements','Embroidered patterns','2026-04-11 02:58:13'),(643,34,'design_elements','Thread wrapping','2026-04-11 02:58:13'),(644,34,'design_elements','Tribal art figures','2026-04-11 02:58:13'),(645,34,'embellishments','Embroidery','2026-04-11 02:58:13'),(646,34,'embellishments','Thread work','2026-04-11 02:58:13'),(647,34,'craft_type','Embroidery','2026-04-11 02:58:14'),(648,34,'craft_type','Thread art','2026-04-11 02:58:14'),(649,34,'craft_type','Folk art (Warli-inspired)','2026-04-11 02:58:14'),(650,34,'texture','Soft fabric and thread','2026-04-11 02:58:14'),(651,34,'visual_density','Moderate to High','2026-04-11 02:58:14'),(652,34,'shape','Circular','2026-04-11 02:58:14'),(653,34,'usage','Personal accessory','2026-04-11 02:58:14'),(654,34,'usage','Fashion','2026-04-11 02:58:14'),(655,34,'usage','Cultural expression','2026-04-11 02:58:14'),(656,34,'aesthetic_tags','Handmade','2026-04-11 02:58:14'),(657,34,'aesthetic_tags','Vibrant','2026-04-11 02:58:14'),(658,34,'aesthetic_tags','Folk art','2026-04-11 02:58:14'),(659,34,'aesthetic_tags','Traditional','2026-04-11 02:58:14'),(660,34,'aesthetic_tags','Colorful','2026-04-11 02:58:14'),(661,34,'aesthetic_tags','Unique','2026-04-11 02:58:14'),(662,34,'aesthetic_tags','Artisan','2026-04-11 02:58:14'),(663,34,'aesthetic_tags','Boho','2026-04-11 02:58:14'),(664,34,'cultural_inference','Strongly reminiscent of Indian Warli tribal art or similar folk art styles.','2026-04-11 02:58:14'),(665,34,'quality_inference','Appears to be handmade with good attention to detail in embroidery and wrapping. Good craftsmanship.','2026-04-11 02:58:14'),(666,34,'target_gender','Women','2026-04-11 02:58:14'),(962,27,'product_type','Bangles','2026-05-09 15:48:19'),(963,27,'category','bangles','2026-05-09 15:48:19'),(964,27,'sub_category','Bangles','2026-05-09 15:48:19'),(965,27,'primary_color','Deep Blue','2026-05-09 15:48:19'),(966,27,'secondary_colors','Deep Blue','2026-05-09 15:48:19'),(967,27,'secondary_colors','Gold','2026-05-09 15:48:19'),(968,27,'secondary_colors','Cream','2026-05-09 15:48:19'),(969,27,'secondary_colors','Light Blue','2026-05-09 15:48:19'),(970,27,'color_family','Blue','2026-05-09 15:48:19'),(971,27,'color_family','Gold','2026-05-09 15:48:19'),(972,27,'color_family','Metallic','2026-05-09 15:48:19'),(973,27,'color_family','Neutral','2026-05-09 15:48:19'),(974,27,'material_estimated','Velvet fabric','2026-05-09 15:48:19'),(975,27,'material_estimated','Metal (base)','2026-05-09 15:48:19'),(976,27,'material_estimated','Zari thread','2026-05-09 15:48:19'),(977,27,'material_estimated','Cotton','2026-05-09 15:48:19'),(978,27,'material_estimated','Silk thread','2026-05-09 15:48:19'),(979,27,'material_estimated','Metallic lace','2026-05-09 15:48:19'),(980,27,'material_estimated','trim','2026-05-09 15:48:19'),(981,27,'finish','Matte (fabric), Metallic (gold embroidery and trim)','2026-05-09 15:48:19'),(982,27,'style','Ethnic','2026-05-09 15:48:19'),(983,27,'style','Traditional','2026-05-09 15:48:19'),(984,27,'style','Festive','2026-05-09 15:48:19'),(985,27,'occasion','Wedding','2026-05-09 15:48:19'),(986,27,'occasion','Festive','2026-05-09 15:48:19'),(987,27,'occasion','Party','2026-05-09 15:48:19'),(988,27,'occasion','Cultural Events','2026-05-09 15:48:19'),(989,27,'pattern','Floral','2026-05-09 15:48:19'),(990,27,'pattern','Geometric (scalloped trim)','2026-05-09 15:48:19'),(991,27,'design_elements','Fabric-wrapped bangles','2026-05-09 15:48:19'),(992,27,'design_elements','Intricate embroidery','2026-05-09 15:48:19'),(993,27,'design_elements','Layered bangles','2026-05-09 15:48:19'),(994,27,'embellishments','Zari embroidery','2026-05-09 15:48:19'),(995,27,'embellishments','Metallic lace trim','2026-05-09 15:48:19'),(996,27,'craft_type','Fabric wrapping','2026-05-09 15:48:19'),(997,27,'craft_type','Zari embroidery','2026-05-09 15:48:19'),(998,27,'craft_type','Thread work','2026-05-09 15:48:19'),(999,27,'texture','Soft (velvet), Smooth (trim)','2026-05-09 15:48:19'),(1000,27,'visual_density','High','2026-05-09 15:48:19'),(1001,27,'shape','Circular (bangles), Cylindrical (stacked)','2026-05-09 15:48:19'),(1002,27,'usage','Wristwear','2026-05-09 15:48:19'),(1003,27,'usage','Fashion accessory','2026-05-09 15:48:19'),(1004,27,'aesthetic_tags','Indian ethnic','2026-05-09 15:48:19'),(1005,27,'aesthetic_tags','Boho chic','2026-05-09 15:48:19'),(1006,27,'aesthetic_tags','Traditional','2026-05-09 15:48:19'),(1007,27,'aesthetic_tags','Festive','2026-05-09 15:48:19'),(1008,27,'aesthetic_tags','Handcrafted','2026-05-09 15:48:19'),(1009,27,'aesthetic_tags','Elegant','2026-05-09 15:48:19'),(1010,27,'cultural_inference','Indian / South Asian traditional jewelry, typically worn for festive and ceremonial occasions.','2026-05-09 15:48:19'),(1011,27,'quality_inference','Handcrafted with attention to detail, indicating good quality for ethnic wear.','2026-05-09 15:48:19'),(1012,27,'target_gender','Women','2026-05-09 15:48:19'),(1070,37,'product_type','Bangles','2026-05-09 16:20:51'),(1071,37,'category','bangles','2026-05-09 16:20:51'),(1072,37,'sub_category','Bangles Set','2026-05-09 16:20:51'),(1073,37,'primary_color','Black','2026-05-09 16:20:51'),(1074,37,'secondary_colors','Black','2026-05-09 16:20:51'),(1075,37,'secondary_colors','Gold','2026-05-09 16:20:51'),(1076,37,'secondary_colors','Silver','2026-05-09 16:20:51'),(1077,37,'color_family','Dark','2026-05-09 16:20:51'),(1078,37,'color_family','Metallic','2026-05-09 16:20:51'),(1079,37,'color_family','Neutral','2026-05-09 16:20:51'),(1080,37,'material_estimated','Fabric (likely velvet or silk thread)','2026-05-09 16:20:51'),(1081,37,'material_estimated','Glass','2026-05-09 16:20:51'),(1082,37,'material_estimated','Acrylic (mirrors)','2026-05-09 16:20:51'),(1083,37,'material_estimated','Metallic Thread (Zari)','2026-05-09 16:20:51'),(1084,37,'material_estimated','Sequins','2026-05-09 16:20:51'),(1085,37,'material_estimated','Base material (plastic','2026-05-09 16:20:51'),(1086,37,'material_estimated','lac)','2026-05-09 16:20:51'),(1087,37,'finish','Matte (fabric), Mirrored, Metallic Sheen','2026-05-09 16:20:51'),(1088,37,'style','Ethnic','2026-05-09 16:20:51'),(1089,37,'style','Traditional Indian','2026-05-09 16:20:51'),(1090,37,'style','Bohemian','2026-05-09 16:20:51'),(1091,37,'style','Festive','2026-05-09 16:20:51'),(1092,37,'occasion','Festive','2026-05-09 16:20:51'),(1093,37,'occasion','Wedding','2026-05-09 16:20:51'),(1094,37,'occasion','Cultural Events','2026-05-09 16:20:51'),(1095,37,'occasion','Parties','2026-05-09 16:20:51'),(1096,37,'occasion','Celebrations','2026-05-09 16:20:51'),(1097,37,'pattern','Geometric (mirror arrangement)','2026-05-09 16:20:51'),(1098,37,'pattern','Floral (sequins)','2026-05-09 16:20:51'),(1099,37,'pattern','Abstract Curved Lines','2026-05-09 16:20:51'),(1100,37,'design_elements','Mirror work (Shisha','2026-05-09 16:20:51'),(1101,37,'design_elements','Abla work)','2026-05-09 16:20:51'),(1102,37,'design_elements','Thread embroidery','2026-05-09 16:20:51'),(1103,37,'design_elements','Sequins','2026-05-09 16:20:51'),(1104,37,'embellishments','Mirrors','2026-05-09 16:20:51'),(1105,37,'embellishments','Sequins','2026-05-09 16:20:51'),(1106,37,'embellishments','Gold Zari','2026-05-09 16:20:52'),(1107,37,'embellishments','Metallic Thread','2026-05-09 16:20:52'),(1108,37,'craft_type','Mirror work','2026-05-09 16:20:52'),(1109,37,'craft_type','Thread work','2026-05-09 16:20:52'),(1110,37,'craft_type','Handcrafted jewelry','2026-05-09 16:20:52'),(1111,37,'texture','Soft (fabric base), Smooth (mirrors), Slightly raised (embroidery/sequins)','2026-05-09 16:20:52'),(1112,37,'visual_density','High','2026-05-09 16:20:52'),(1113,37,'shape','Circular','2026-05-09 16:20:52'),(1114,37,'usage','Wrist wear','2026-05-09 16:20:52'),(1115,37,'usage','Fashion accessory','2026-05-09 16:20:52'),(1116,37,'usage','Cultural attire','2026-05-09 16:20:52'),(1117,37,'aesthetic_tags','Traditional','2026-05-09 16:20:52'),(1118,37,'aesthetic_tags','Ethnic Chic','2026-05-09 16:20:52'),(1119,37,'aesthetic_tags','Festive Wear','2026-05-09 16:20:52'),(1120,37,'aesthetic_tags','Handcrafted','2026-05-09 16:20:52'),(1121,37,'aesthetic_tags','Statement Piece','2026-05-09 16:20:52'),(1122,37,'aesthetic_tags','Bohemian','2026-05-09 16:20:52'),(1123,37,'aesthetic_tags','Mirror Embellished','2026-05-09 16:20:52'),(1124,37,'cultural_inference','Strongly suggests Indian/South Asian traditional jewelry, especially due to the prominent mirror work (Shisha/Abla style).','2026-05-09 16:20:52'),(1125,37,'quality_inference','Appears to be well-crafted with intricate details, suggesting good workmanship and a hand-finished quality.','2026-05-09 16:20:52'),(1126,37,'target_gender','Women','2026-05-09 16:20:52'),(1127,28,'product_type','Jewelry','2026-05-09 16:21:17'),(1128,28,'category','bangles','2026-05-09 16:21:17'),(1129,28,'sub_category','Bangles Set','2026-05-09 16:21:17'),(1130,28,'primary_color','Yellow','2026-05-09 16:21:17'),(1131,28,'secondary_colors','Yellow','2026-05-09 16:21:17'),(1132,28,'secondary_colors','Red','2026-05-09 16:21:17'),(1133,28,'secondary_colors','Gold','2026-05-09 16:21:17'),(1134,28,'color_family','Warm Tones','2026-05-09 16:21:17'),(1135,28,'color_family','Bright','2026-05-09 16:21:17'),(1136,28,'material_estimated','Fabric (likely velvet or silk thread)','2026-05-09 16:21:17'),(1137,28,'material_estimated','Cardboard','2026-05-09 16:21:17'),(1138,28,'material_estimated','Lac base','2026-05-09 16:21:17'),(1139,28,'material_estimated','Sequins','2026-05-09 16:21:17'),(1140,28,'material_estimated','Embroidery thread (zari','2026-05-09 16:21:17'),(1141,28,'material_estimated','silk)','2026-05-09 16:21:17'),(1142,28,'finish','Matte, Shimmer','2026-05-09 16:21:17'),(1143,28,'style','Traditional','2026-05-09 16:21:17'),(1144,28,'style','Ethnic','2026-05-09 16:21:17'),(1145,28,'style','Festive','2026-05-09 16:21:17'),(1146,28,'occasion','Festive','2026-05-09 16:21:17'),(1147,28,'occasion','Wedding','2026-05-09 16:21:17'),(1148,28,'occasion','Cultural Events','2026-05-09 16:21:17'),(1149,28,'occasion','Parties','2026-05-09 16:21:17'),(1150,28,'pattern','Geometric','2026-05-09 16:21:17'),(1151,28,'pattern','Floral Motifs','2026-05-09 16:21:17'),(1152,28,'pattern','Abstract','2026-05-09 16:21:17'),(1153,28,'design_elements','Thread work','2026-05-09 16:21:17'),(1154,28,'design_elements','Embroidery','2026-05-09 16:21:17'),(1155,28,'design_elements','Sequin embellishment','2026-05-09 16:21:17'),(1156,28,'embellishments','Sequins','2026-05-09 16:21:17'),(1157,28,'embellishments','Zari work','2026-05-09 16:21:17'),(1158,28,'embellishments','Thread embroidery','2026-05-09 16:21:17'),(1159,28,'craft_type','Handcrafted','2026-05-09 16:21:17'),(1160,28,'craft_type','Embroidery','2026-05-09 16:21:17'),(1161,28,'craft_type','Thread wrapping','2026-05-09 16:21:17'),(1162,28,'texture','Soft, Smooth, Bumpy (due to embellishments)','2026-05-09 16:21:17'),(1163,28,'visual_density','Moderate','2026-05-09 16:21:17'),(1164,28,'shape','Cylindrical','2026-05-09 16:21:17'),(1165,28,'usage','Wristwear','2026-05-09 16:21:17'),(1166,28,'usage','Fashion accessory','2026-05-09 16:21:17'),(1167,28,'aesthetic_tags','Vibrant','2026-05-09 16:21:17'),(1168,28,'aesthetic_tags','Colorful','2026-05-09 16:21:17'),(1169,28,'aesthetic_tags','Ornate','2026-05-09 16:21:17'),(1170,28,'aesthetic_tags','Traditional Indian','2026-05-09 16:21:17'),(1171,28,'aesthetic_tags','Ethnic Chic','2026-05-09 16:21:17'),(1172,28,'aesthetic_tags','Handmade','2026-05-09 16:21:17'),(1173,28,'cultural_inference','Strongly suggests South Asian/Indian culture, commonly worn during festivals and weddings.','2026-05-09 16:21:17'),(1174,28,'quality_inference','Appears to be handmade with visible craftsmanship, indicating a good but possibly variable quality typical of handcrafted items.','2026-05-09 16:21:17'),(1175,28,'target_gender','Women','2026-05-09 16:21:17'),(1260,36,'product_type','Bangles','2026-05-09 18:31:29'),(1261,36,'category','bangles','2026-05-09 18:31:29'),(1262,36,'sub_category','Bracelets & Bangles','2026-05-09 18:31:29'),(1263,36,'primary_color','Blue','2026-05-09 18:31:29'),(1264,36,'secondary_colors','Blue','2026-05-09 18:31:29'),(1265,36,'secondary_colors','Gold','2026-05-09 18:31:29'),(1266,36,'secondary_colors','white','2026-05-09 18:31:29'),(1267,36,'color_family','Blue','2026-05-09 18:31:29'),(1268,36,'color_family','Metallic','2026-05-09 18:31:29'),(1269,36,'color_family','Neutral','2026-05-09 18:31:29'),(1270,36,'material_estimated','Fabric (velvet-like)','2026-05-09 18:31:29'),(1271,36,'material_estimated','Metallic Thread','2026-05-09 18:31:29'),(1272,36,'material_estimated','Metal (base)','2026-05-09 18:31:29'),(1273,36,'material_estimated','Lace','2026-05-09 18:31:29'),(1274,36,'material_estimated','Trim','2026-05-09 18:31:29'),(1275,36,'finish','Matte (fabric), Metallic (embroidery and trim)','2026-05-09 18:31:29'),(1276,36,'style','Ethnic','2026-05-09 18:31:29'),(1277,36,'occasion','Festive','2026-05-09 18:31:29'),(1278,36,'occasion','Wedding','2026-05-09 18:31:29'),(1279,36,'pattern','Floral','2026-05-09 18:31:29'),(1280,36,'pattern','Geometric','2026-05-09 18:31:29'),(1281,36,'design_elements','Embroidery','2026-05-09 18:31:29'),(1282,36,'design_elements','Metallic trim','2026-05-09 18:31:29'),(1283,36,'design_elements','Stacked design','2026-05-09 18:31:29'),(1284,36,'design_elements','Fabric wrapped','2026-05-09 18:31:29'),(1285,36,'embellishments','Zari work','2026-05-09 18:31:29'),(1286,36,'embellishments','Metallic lace','2026-05-09 18:31:29'),(1287,36,'embellishments','Thread embroidery','2026-05-09 18:31:29'),(1288,36,'craft_type','Embroidery','2026-05-09 18:31:29'),(1289,36,'texture','Soft (fabric), Slightly raised (embroidery), Smooth (trim)','2026-05-09 18:31:29'),(1290,36,'visual_density','Moderate','2026-05-09 18:31:29'),(1291,36,'shape','Round','2026-05-09 18:31:29'),(1292,36,'usage','Fashion','2026-05-09 18:31:29'),(1293,36,'usage','Traditional Wear','2026-05-09 18:31:29'),(1294,36,'aesthetic_tags','Ethnic Chic','2026-05-09 18:31:29'),(1295,36,'aesthetic_tags','Traditional Indian','2026-05-09 18:31:29'),(1296,36,'aesthetic_tags','Handmade','2026-05-09 18:31:29'),(1297,36,'aesthetic_tags','Regal','2026-05-09 18:31:29'),(1298,36,'aesthetic_tags','Vibrant','2026-05-09 18:31:29'),(1299,36,'cultural_inference','Indian subcontinent (suggested by style, materials, and embellishments typical of \'churi\' or bangles)','2026-05-09 18:31:29'),(1300,36,'quality_inference','Good, handmade quality with detailed craftsmanship.','2026-05-09 18:31:29'),(1301,36,'target_gender','Women','2026-05-09 18:31:29');
/*!40000 ALTER TABLE `product_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'bangles'),(2,'bracelet');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color_metadata`
--

DROP TABLE IF EXISTS `product_color_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_color_metadata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `primary_color_family` varchar(50) DEFAULT NULL,
  `secondary_color_families` json DEFAULT NULL,
  `compatible_color_families` json DEFAULT NULL,
  `color_group` varchar(100) DEFAULT NULL,
  `extracted_colors` json DEFAULT NULL,
  `user_provided_colors` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_id` (`product_id`),
  KEY `idx_primary_color` (`primary_color_family`),
  KEY `idx_color_group` (`color_group`),
  CONSTRAINT `product_color_metadata_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color_metadata`
--

LOCK TABLES `product_color_metadata` WRITE;
/*!40000 ALTER TABLE `product_color_metadata` DISABLE KEYS */;
INSERT INTO `product_color_metadata` VALUES (1,27,'blue','[\"red\", \"gold\"]','[\"green\", \"teal\", \"purple\", \"white\", \"gray\"]','mixed',NULL,'[]','2026-04-10 18:15:27','2026-04-10 18:24:55'),(2,28,'red','[\"gold\"]','[\"pink\", \"orange\", \"purple\", \"gold\", \"burgundy\"]','mixed',NULL,'[]','2026-04-10 18:15:27','2026-04-10 18:24:55'),(7,33,'green','[\"gold\", \"gray\", \"white\"]','[\"blue\", \"teal\", \"white\", \"gold\", \"brown\"]','green-based','[\"Olive Green\", \"Gold\", \"Silver\", \"White\"]','[\"Olive Green\", \"Olive Green\", \"Silver\", \"Gold\", \"Olive Green\", \"Silver\", \"Gold\"]','2026-04-11 02:49:50','2026-04-11 02:49:50'),(8,34,'white','[\"orange\", \"gold\", \"red\", \"blue\", \"green\", \"black\"]','[]','white-based','[\"White\", \"Orange\", \"Yellow\", \"Red\", \"Blue\", \"Green\", \"Black\"]','[\"White\", \"White\", \"Orange\", \"Yellow\", \"Red\", \"Blue\", \"Green\", \"Black\", \"White\", \"Orange\", \"Yellow\", \"Red\", \"Blue\", \"Green\", \"Black\"]','2026-04-11 02:58:14','2026-04-11 02:58:14'),(10,36,'blue','[\"gold\", \"white\"]','[\"green\", \"teal\", \"purple\", \"white\", \"gray\"]','blue-based','[\"Royal Blue\", \"Gold\", \"Cream\"]','[\"Blue\", \"Blue\", \"Gold\", \"white\", \"Blue\", \"Gold\", \"white\"]','2026-04-13 10:46:43','2026-04-13 10:46:43'),(11,37,'black','[\"gold\", \"gray\", \"brown\"]','[]','black-based','[\"Black\", \"Gold\", \"Silver\", \"Beige\"]','[\"Black\", \"Black\", \"Gold\", \"Silver\", \"Black\", \"Gold\", \"Silver\"]','2026-05-03 14:33:27','2026-05-03 14:33:27');
/*!40000 ALTER TABLE `product_color_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_colors`
--

DROP TABLE IF EXISTS `product_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `color_name` varchar(100) NOT NULL,
  `color_hex` varchar(20) DEFAULT NULL,
  `sort_order` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `color_id` int DEFAULT NULL,
  `color_code` varchar(20) DEFAULT NULL,
  `is_primary_color` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_product_color` (`product_id`,`color_name`),
  KEY `idx_product_color_product` (`product_id`),
  KEY `idx_product_color_name` (`color_name`),
  CONSTRAINT `product_colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5460 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_colors`
--

LOCK TABLES `product_colors` WRITE;
/*!40000 ALTER TABLE `product_colors` DISABLE KEYS */;
INSERT INTO `product_colors` VALUES (97,33,'olive green','#C4B454',0,'2026-04-11 02:49:50',9,'#C4B454',1),(98,33,'silver','#C0C0C0',1,'2026-04-11 02:49:50',11,'#C0C0C0',0),(99,33,'gold','#FFD700',2,'2026-04-11 02:49:50',3,'#FFD700',0),(100,34,'white','#FF8C00',0,'2026-04-11 02:58:13',12,'#FF8C00',1),(101,34,'orange','#FFD700',1,'2026-04-11 02:58:13',137,'#FFD700',0),(102,34,'yellow','#FF0000',2,'2026-04-11 02:58:13',111,'#FF0000',0),(103,34,'red','#0000FF',3,'2026-04-11 02:58:13',2,'#0000FF',0),(104,34,'blue','#008000',4,'2026-04-11 02:58:13',140,'#008000',0),(105,34,'green','#000000',5,'2026-04-11 02:58:13',1,'#000000',0),(106,34,'black','#000000',6,'2026-04-11 02:58:13',142,'#000000',0),(5048,27,'deep blue','#D4AF37',0,'2026-05-09 15:48:19',129,'#D4AF37',1),(5049,27,'gold','#FFD700',1,'2026-05-09 15:48:19',3,'#FFD700',0),(5050,27,'cream',NULL,2,'2026-05-09 15:48:19',131,NULL,0),(5051,27,'light blue',NULL,3,'2026-05-09 15:48:19',132,NULL,0),(5055,27,'blue','#008000',0,'2026-05-09 15:54:56',140,'#008000',1),(5115,37,'black','#000000',0,'2026-05-09 16:20:51',142,'#000000',1),(5116,37,'gold','#FFD700',1,'2026-05-09 16:20:51',3,'#FFD700',0),(5117,37,'silver','#C0C0C0',2,'2026-05-09 16:20:51',11,'#C0C0C0',0),(5118,28,'yellow','#FFFF00',0,'2026-05-09 16:21:17',111,'#FFFF00',1),(5119,28,'red','#FF0000',1,'2026-05-09 16:21:17',2,'#FF0000',0),(5120,28,'gold','#FFD700',2,'2026-05-09 16:21:17',3,'#FFD700',0),(5172,36,'blue','#0000FF',0,'2026-05-09 18:31:29',140,'#0000FF',1),(5173,36,'gold','#FFD700',1,'2026-05-09 18:31:29',3,'#FFD700',0),(5174,36,'white','#FFFFFF',2,'2026-05-09 18:31:29',12,'#FFFFFF',0);
/*!40000 ALTER TABLE `product_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `is_primary_image` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_product_images_product_id` (`product_id`),
  CONSTRAINT `fk_product_images_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (34,27,'https://res.cloudinary.com/drom1d8qt/image/upload/v1775842542/divara-craft/products/mbcbtswn8a5xhk97pefy.jpg',1,'2026-04-10 17:35:43'),(35,28,'https://res.cloudinary.com/drom1d8qt/image/upload/v1775842684/divara-craft/products/vl3fifzetvbl41duftmd.jpg',1,'2026-04-10 17:38:05'),(40,33,'https://res.cloudinary.com/drom1d8qt/image/upload/v1775875790/divara-craft/products/wcyr92rf2wjzxmebcjwk.jpg',1,'2026-04-11 02:49:50'),(41,34,'https://res.cloudinary.com/drom1d8qt/image/upload/v1775876293/divara-craft/products/me1vfcrln44sehzoauqj.jpg',1,'2026-04-11 02:58:13'),(43,36,'https://res.cloudinary.com/drom1d8qt/image/upload/v1776077203/divara-craft/products/ytxpnx0onw2lmb9ao5gj.jpg',1,'2026-04-13 10:46:42'),(44,37,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777818814/divara-craft/products/o8feuzxrfyqtf15k8wlk.jpg',1,'2026-05-03 14:33:26');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_reviews`
--

DROP TABLE IF EXISTS `product_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `user_id` int NOT NULL,
  `overall_rating` tinyint unsigned NOT NULL,
  `material_quality` tinyint unsigned DEFAULT NULL,
  `design_rating` tinyint unsigned DEFAULT NULL,
  `craftsmanship` tinyint unsigned DEFAULT NULL,
  `comfort` tinyint unsigned DEFAULT NULL,
  `value_for_money` tinyint unsigned DEFAULT NULL,
  `emotion` enum('Loved it','Happy','Okay','Disappointed') NOT NULL,
  `review_text` text,
  `images` json DEFAULT NULL,
  `support_follow_up_required` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_product_reviews_order` (`order_id`),
  KEY `idx_product_reviews_user` (`user_id`),
  KEY `idx_product_reviews_rating` (`overall_rating`),
  KEY `idx_product_reviews_support` (`support_follow_up_required`),
  CONSTRAINT `fk_product_reviews_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_product_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_reviews`
--

LOCK TABLES `product_reviews` WRITE;
/*!40000 ALTER TABLE `product_reviews` DISABLE KEYS */;
INSERT INTO `product_reviews` VALUES (1,10,4,4,3,4,3,5,5,'Happy','shared','[]',1,'2026-04-05 05:35:42'),(2,11,4,5,5,5,5,5,5,'Happy','happy','[]',0,'2026-04-05 05:41:57');
/*!40000 ALTER TABLE `product_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `size_value` varchar(50) NOT NULL,
  `stock` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_product_size` (`product_id`,`size_value`),
  KEY `idx_product` (`product_id`),
  CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sizes`
--

LOCK TABLES `product_sizes` WRITE;
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_slider`
--

DROP TABLE IF EXISTS `product_slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_slider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` text NOT NULL,
  `title` varchar(255) DEFAULT '',
  `subtitle` varchar(255) DEFAULT '',
  `sort_order` int DEFAULT '0',
  `is_active` tinyint DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cta_url` varchar(500) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `idx_slider_active_sort` (`is_active`,`sort_order`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_slider`
--

LOCK TABLES `product_slider` WRITE;
/*!40000 ALTER TABLE `product_slider` DISABLE KEYS */;
INSERT INTO `product_slider` VALUES (10,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777813902/divara-craft/products/kgcr3syxy0rkvmadf3fq.jpg','New Wedding','',1,1,'2026-05-03 13:11:35','2026-05-03 13:11:35',''),(11,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777814001/divara-craft/products/ipqglnobyyg6lavir0ak.jpg','Haldi','',0,1,'2026-05-03 13:13:14','2026-05-03 13:13:14',''),(12,'https://res.cloudinary.com/drom1d8qt/image/upload/v1777814499/divara-craft/products/l7sa7mfjvgb9v0qudkkw.jpg','Mehendi','',0,1,'2026-05-03 13:21:33','2026-05-03 13:21:33','');
/*!40000 ALTER TABLE `product_slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_slider_settings`
--

DROP TABLE IF EXISTS `product_slider_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_slider_settings` (
  `id` tinyint NOT NULL,
  `display_count` tinyint NOT NULL DEFAULT '5',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `autoplay_interval` int NOT NULL DEFAULT '4000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_slider_settings`
--

LOCK TABLES `product_slider_settings` WRITE;
/*!40000 ALTER TABLE `product_slider_settings` DISABLE KEYS */;
INSERT INTO `product_slider_settings` VALUES (1,3,'2026-05-01 13:10:47',0);
/*!40000 ALTER TABLE `product_slider_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int DEFAULT '0',
  `category` varchar(120) NOT NULL,
  `description` text,
  `image_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_meta_description` text,
  `tags` text,
  `product_category_id` int DEFAULT NULL,
  `total_added_quantity` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_prod_pc` (`product_category_id`),
  CONSTRAINT `fk_prod_pc` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (27,'Divara Craft Deep Blue Velvet & Gold Zari Embroidered Bangle Set',60.23,10,'bangles','<p>Elevate your ethnic ensemble with this exquisite set of handcrafted bangles from Divara Craft. Featuring a rich deep blue velvet base, each bangle is meticulously wrapped and embellished with intricate gold zari thread work depicting elegant floral patterns. The set is further enhanced by delicate gold metallic lace trim, adding a touch of traditional glamour. Ideal for weddings, festivals, and special celebrations, these bangles offer a blend of traditional charm and contemporary elegance.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1775842542/divara-craft/products/mbcbtswn8a5xhk97pefy.jpg','2026-04-10 17:35:43','2026-05-09 15:48:19','Divara Craft Deep Blue Velvet & Gold Zari Embroidered Bangle Set','Elevate your ethnic ensemble with this exquisite set of handcrafted bangles from Divara Craft. Featuring a rich deep blue velvet base, each bangle is meticulous','Divara Craft, Bangles, Velvet Bangles, Zari Work, Gold Embroidery, Indian Jewelry, Ethnic Jewelry, Festive Wear, Wedding Bangles, Handcrafted, Deep Blue, Traditional',1,0),(28,'Divara Craft Vibrant Yellow & Red Embroidered Sequin Bangle Set',26.77,20,'bangles','<p>This exquisite set of Divara Craft bangles features a rich yellow fabric base, meticulously hand-embroidered with traditional red thread patterns and shimmering gold-toned sequins. Each bangle is crafted to provide a comfortable fit while adding a touch of traditional elegance to your ensemble. Ideal for weddings, festivals, cultural celebrations, or as a vibrant accessory for ethnic wear, this set promises to enhance any outfit with its detailed artistry and brilliant colors.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1775842684/divara-craft/products/vl3fifzetvbl41duftmd.jpg','2026-04-10 17:38:05','2026-05-09 16:21:17','Divara Craft Vibrant Yellow & Red Embroidered Sequin Bangle Set','This exquisite set of Divara Craft bangles features a rich yellow fabric base, meticulously hand-embroidered with traditional red thread patterns and shimmering','Bangles, Indian Jewelry, Ethnic Jewelry, Handcrafted, Yellow Bangles, Red Embroidery, Sequin Bangles, Festive Wear, Wedding Jewelry, Traditional, Divara Craft, Women\'s Accessories',1,20),(33,'Divara Craft Olive Green Thread Work Bangles with Sequin & Gold Embroidery - Set of 6',18.06,30,'Navratri spacial','<p>Embrace traditional elegance with this stunning set of six Divara Craft bangles. Each bangle is meticulously hand-wrapped in a rich olive green silk thread, offering a smooth matte finish. The design features a blend of intricate floral motifs and geometric patterns, embellished with sparkling silver sequins, tiny white beads, and fine gold metallic thread work. These bangles are designed to add a touch of sophistication and festive charm to any ethnic or contemporary outfit, making them ideal for weddings, festivals, parties, or cultural events. Lightweight and comfortable for prolonged wear, this set makes a wonderful gift or a cherished addition to your jewelry collection.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1775875790/divara-craft/products/wcyr92rf2wjzxmebcjwk.jpg','2026-04-11 02:49:50','2026-04-23 18:36:06','Divara Craft Olive Green Thread Work Bangles with Sequin & Gold Embroidery - Set of 6','Embrace traditional elegance with this stunning set of six Divara Craft bangles. Each bangle is meticulously hand-wrapped in a rich olive green silk thread, off','Bangles, Thread Bangles, Olive Green Bangles, Indian Jewelry, Ethnic Jewelry, Traditional Bangles, Sequin Bangles, Embroidered Bangles, Festive Wear, Wedding Jewelry, Handmade Jewelry, Divara Craft',1,0),(34,'Divara Craft Handmade Embroidered Fabric Bangles with Tribal Art Design',24.10,47,'Navratri spacial','<p>Embrace traditional artistry with Divara Craft\'s exquisite set of handmade fabric bangles. Each bangle is meticulously wrapped in soft white fabric, serving as a vibrant canvas for intricate multi-colored embroidery. The design showcases captivating geometric patterns, including triangles and zigzags, alongside charming tribal figures reminiscent of Warli art. With a lively palette of orange, yellow, red, blue, and green threads, these bangles are a celebration of color and culture. Lightweight and comfortable for all-day wear, they are an ideal accessory for casual outings, festive occasions, or as a unique cultural statement piece. Elevate your style with these artisan-crafted, folk-inspired bangles.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1775876293/divara-craft/products/me1vfcrln44sehzoauqj.jpg','2026-04-11 02:58:13','2026-04-23 18:36:06','Divara Craft Handmade Embroidered Fabric Bangles with Tribal Art Design','Embrace traditional artistry with Divara Craft\'s exquisite set of handmade fabric bangles. Each bangle is meticulously wrapped in soft white fabric, serving as','Handmade Bangles, Fabric Bangles, Embroidered Jewelry, Ethnic Jewelry, Warli Art Style, Tribal Jewelry, Indian Folk Art, Colorful Bangles, Thread Bangles, Artisan Crafted, Bohemian Style, Festive Wear',1,0),(36,'Divara Craft Blue & Gold Embroidered Fabric Bangle Set',500.00,10,'bangles','<p>Adorn your wrists with this stunning Divara Craft bangle set, meticulously crafted with a rich, deep blue fabric, reminiscent of velvet, offering a luxurious feel. Each bangle is beautifully embellished with delicate gold floral embroidery, showcasing traditional artistry, complemented by shimmering metallic gold and cream lace trim. The stackable design allows for versatile styling, whether paired with traditional Indian attire like sarees and lehengas, or used to add an ethnic touch to contemporary ensembles. Ideal for weddings, festivals, cultural celebrations, or any special occasion where you want to make a sophisticated statement.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1776077203/divara-craft/products/ytxpnx0onw2lmb9ao5gj.jpg','2026-04-13 10:46:42','2026-05-09 18:31:29','Divara Craft Blue & Gold Embroidered Fabric Bangle Set','Adorn your wrists with this stunning Divara Craft bangle set, meticulously crafted with a rich, deep blue fabric, reminiscent of velvet, offering a luxurious fe','Bangles, Fabric Bangles, Gold Embroidery, Blue Bangles, Ethnic Jewelry, Indian Jewelry, Festive Wear, Wedding Jewelry, Traditional, Handmade, Zari Work, Stackable Bangles',1,10),(37,'Divara Craft Handcrafted Black Mirror Work Bangles Set',20.00,40,'bangles','<p>- **Traditional Craftsmanship**: Each bangle is meticulously handcrafted, featuring classic mirror work (Shisha/Abla style) that reflects light beautifully.<br>- **Elegant Design**: A set of four bangles in rich black, embellished with shimmering gold thread patterns and delicate sequins, creating a captivating visual appeal.<br>- **Versatile Styling**: Ideal for pairing with ethnic Indian attire like sarees, lehengas, and salwar suits, or to add a bohemian touch to contemporary outfits.<br>- **Festive & Celebratory**: Perfect for weddings, festivals such as Diwali and Eid, cultural events, and other special celebrations.<br>- **Comfortable Fit**: Designed for comfortable wear throughout your festive occasions.</p>','https://res.cloudinary.com/drom1d8qt/image/upload/v1777818814/divara-craft/products/o8feuzxrfyqtf15k8wlk.jpg','2026-05-03 14:33:26','2026-05-09 16:20:51','Divara Craft Handcrafted Black Mirror Work Bangles Set','- **Traditional Craftsmanship**: Each bangle is meticulously handcrafted, featuring classic mirror work (Shisha/Abla style) that reflects light beautifully.\r\n- *','Bangles, Mirror Work, Black Bangles, Gold Embroidery, Ethnic Jewelry, Traditional, Indian Jewelry, Handcrafted, Festive Wear, Divara Craft, Shisha Work, Abla Work',1,40);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotional_banners`
--

DROP TABLE IF EXISTS `promotional_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotional_banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'e.g., SPECIAL PRODUCTS, 30% OFF THIS WEEK',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'e.g., Keep Your Feet Cool And Comfy',
  `cta_text` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'Shop Now' COMMENT 'Call-to-action button text',
  `cta_link` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '#' COMMENT 'Call-to-action button link',
  `image_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Cloudinary image URL',
  `background_color` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Gradient background, e.g., linear-gradient(135deg, #F5E6D3 0%, #E8D4BF 100%)',
  `display_order` int DEFAULT '0' COMMENT 'Sort order for banners',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_is_active` (`is_active`),
  KEY `idx_display_order` (`display_order`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotional_banners`
--

LOCK TABLES `promotional_banners` WRITE;
/*!40000 ALTER TABLE `promotional_banners` DISABLE KEYS */;
INSERT INTO `promotional_banners` VALUES (1,'SPECIAL PRODUCTS','Keep Your Feet Cool And Comfy','Shop Now','/shop','https://res.cloudinary.com/drom1d8qt/image/upload/v1777097044/divara-craft/products/uiqr6zgzc6vow3nkgcve.jpg','linear-gradient(285deg, #ff8fc5 0%, #fbe4b1 100%)',1,1,'2026-04-17 05:20:50','2026-04-25 06:04:26'),(2,'30% OFF THIS WEEK','Sunglasses New Collection','Shop Now','/shop?category=accessories','https://res.cloudinary.com/drom1d8qt/image/upload/v1777098039/divara-craft/products/r17ymbo3j24ibi6tczq4.jpg','linear-gradient(217deg, #FFD9E8 0%, #dc2e82 100%)',2,1,'2026-04-17 05:20:50','2026-04-25 06:21:02'),(3,'SPECIAL PRODUCTS','Prepare For Your Latest Season','Shop Now','/shop?category=fashion','https://res.cloudinary.com/drom1d8qt/image/upload/v1777096452/divara-craft/products/fvc166xtq89y26nrxyhs.jpg','linear-gradient(135deg, #B8D9F1 0%, #7DB3E8 100%)',3,1,'2026-04-17 05:20:50','2026-04-25 05:54:26');
/*!40000 ALTER TABLE `promotional_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_recently_viewed`
--

DROP TABLE IF EXISTS `user_recently_viewed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_recently_viewed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `viewed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_user_product` (`user_id`,`product_id`),
  KEY `idx_user_viewed` (`user_id`,`viewed_at`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `user_recently_viewed_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_recently_viewed_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_recently_viewed`
--

LOCK TABLES `user_recently_viewed` WRITE;
/*!40000 ALTER TABLE `user_recently_viewed` DISABLE KEYS */;
INSERT INTO `user_recently_viewed` VALUES (2,1,27,'2026-05-02 03:55:36'),(3,4,36,'2026-05-04 10:13:49'),(4,6,36,'2026-05-09 18:45:05'),(8,6,34,'2026-05-09 20:50:34'),(11,6,33,'2026-05-10 09:45:49');
/*!40000 ALTER TABLE `user_recently_viewed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_uploads`
--

DROP TABLE IF EXISTS `user_uploads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_uploads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `image_url` text,
  `colors` json DEFAULT NULL,
  `pattern` varchar(100) DEFAULT NULL,
  `style` varchar(100) DEFAULT NULL,
  `embedding` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_pattern` (`pattern`),
  CONSTRAINT `user_uploads_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_uploads`
--

LOCK TABLES `user_uploads` WRITE;
/*!40000 ALTER TABLE `user_uploads` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `country_code` varchar(10) DEFAULT NULL,
  `currency_code` varchar(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `avatar_url` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_email` (`email`),
  KEY `idx_country` (`country_code`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Copilot Test','copilot_test_1774706850@example.com','$2b$10$onOLm4NwUE1XQkKFrYxFteg5VV9aQoG67u7AgoeVJjnYp.J2BoMKW','+919876543210','user',NULL,NULL,'2026-03-28 14:07:30',NULL),(2,'mausam','mausam.test2@gmail.com','$2b$10$xEEvONNYbThulcsf.oCbKOOrlHA.aYqwFAUm3EJ/akjhE03yk5r6u','+919713563637','user',NULL,NULL,'2026-03-28 17:26:48',NULL),(3,'mausam varun','mausam.varun22@gmail.com',NULL,NULL,'user',NULL,NULL,'2026-03-29 11:02:39','https://lh3.googleusercontent.com/a/ACg8ocLjcIoqHPrrT1zrYwJmnNOOPRRmTcsDp7RuOJCqp2JSmylxjS4J=s96-c'),(4,'mausa test','mausam.test4@gmail.com',NULL,NULL,'user',NULL,NULL,'2026-04-05 05:21:47',NULL),(5,'Mausam Varun','mausamvarun@gmail.com',NULL,NULL,'user',NULL,NULL,'2026-04-09 03:00:10',NULL),(6,'Testaccount Test','mausam.test@gmail.com',NULL,NULL,'user',NULL,NULL,'2026-05-09 18:16:12',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_transactions`
--

DROP TABLE IF EXISTS `wallet_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `type` enum('credit','debit') DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `purpose` enum('add_money','design_generation','refund') DEFAULT NULL,
  `reference_id` varchar(255) DEFAULT NULL,
  `status` enum('pending','success','failed') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_status` (`status`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_transactions`
--

LOCK TABLES `wallet_transactions` WRITE;
/*!40000 ALTER TABLE `wallet_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `wallet_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallets`
--

DROP TABLE IF EXISTS `wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT '0.00',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `idx_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallets`
--

LOCK TABLES `wallets` WRITE;
/*!40000 ALTER TABLE `wallets` DISABLE KEYS */;
/*!40000 ALTER TABLE `wallets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-12 19:05:21
