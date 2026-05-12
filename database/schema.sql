-- Varlakshmi Jewellery Database - Full Schema
-- Run: mysql -u root -p < database/schema.sql

DROP DATABASE IF EXISTS `varlakshmi_jewllery`;
CREATE DATABASE IF NOT EXISTS `varlakshmi_jewllery` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `varlakshmi_jewllery`;

-- Contact enquiries (add AUTO_INCREMENT after for inserts)
CREATE TABLE IF NOT EXISTS `contact_enq` (
  `contact_id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile_number` int DEFAULT NULL,
  `adress` text,
  `message` text,
  `created_by` int DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int NOT NULL,
  `employee_name` varchar(50) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `image` text,
  `role` int DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile_number` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `enums` (
  `enum_id` int(10) unsigned zerofill NOT NULL,
  `enum_name` varchar(50) DEFAULT NULL,
  `enum_type_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`enum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_type` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `product_img` text,
  `created_by` int DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
