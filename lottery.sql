-- MySQL dump 10.13  Distrib 5.7.23-ndb-7.6.7, for macos10.13 (x86_64)
--
-- Host: localhost    Database: lottery
-- ------------------------------------------------------
-- Server version	5.7.23-ndb-7.6.7-cluster-gpl

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lottery`
--

DROP TABLE IF EXISTS `lottery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lottery` (
  `lotteryId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `sponcerId` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `openType` int(11) DEFAULT '1',
  `startTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `endTime` datetime DEFAULT NULL,
  `imgUrl` varchar(100) DEFAULT NULL,
  `rewardAccount` int(11) NOT NULL DEFAULT '1',
  `sponcerName` varchar(50) DEFAULT NULL,
  `sponcerDesc` text,
  `openTypeAccount` int(11) DEFAULT NULL,
  `path` varchar(80) DEFAULT NULL,
  `appId` varchar(20) DEFAULT NULL,
  `isPublic` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`lotteryId`),
  UNIQUE KEY `lottery_lotteryId_uindex` (`lotteryId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lotteryForAdmin`
--

DROP TABLE IF EXISTS `lotteryForAdmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotteryForAdmin` (
  `lotteryId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `sponcerId` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `openType` int(11) NOT NULL DEFAULT '1',
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `imgUrl` varchar(100) DEFAULT NULL,
  `sponcerName` varchar(50) DEFAULT NULL,
  `rewardAccount` int(11) NOT NULL DEFAULT '1',
  `sponcerDesc` text,
  `countForType` int(11) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  `appId` varchar(50) DEFAULT NULL,
  `lotteryOrder` int(11) NOT NULL,
  `isPublic` tinyint(1) NOT NULL DEFAULT '0',
  UNIQUE KEY `lotteryForAdmin_lotteryId_uindex` (`lotteryId`),
  UNIQUE KEY `lotteryForAdmin_name_uindex` (`name`),
  UNIQUE KEY `lotteryForAdmin_order_uindex` (`lotteryOrder`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lotteryGet`
--

DROP TABLE IF EXISTS `lotteryGet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotteryGet` (
  `userId` int(11) NOT NULL,
  `lotteryId` int(11) NOT NULL,
  KEY `lotteryGet_user_userId_fk` (`userId`),
  KEY `lotteryGet_lottery_lotteryId_fk` (`lotteryId`),
  CONSTRAINT `lotteryGet_lottery_lotteryId_fk` FOREIGN KEY (`lotteryId`) REFERENCES `lottery` (`lotteryId`),
  CONSTRAINT `lotteryGet_user_userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lotteryJoin`
--

DROP TABLE IF EXISTS `lotteryJoin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotteryJoin` (
  `userId` int(11) NOT NULL,
  `lotteryId` int(11) NOT NULL,
  KEY `lotteryJoin_user_userId_fk` (`userId`),
  KEY `lotteryJoin_lottery_lotteryId_fk` (`lotteryId`),
  CONSTRAINT `lotteryJoin_lottery_lotteryId_fk` FOREIGN KEY (`lotteryId`) REFERENCES `lottery` (`lotteryId`),
  CONSTRAINT `lotteryJoin_user_userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lotteryStart`
--

DROP TABLE IF EXISTS `lotteryStart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotteryStart` (
  `userId` int(11) NOT NULL,
  `lotteryId` int(11) NOT NULL,
  KEY `lotteryStart_user_userId_fk` (`userId`),
  KEY `lotteryStart_lottery_lotteryId_fk` (`lotteryId`),
  CONSTRAINT `lotteryStart_lottery_lotteryId_fk` FOREIGN KEY (`lotteryId`) REFERENCES `lottery` (`lotteryId`),
  CONSTRAINT `lotteryStart_user_userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sponcer`
--

DROP TABLE IF EXISTS `sponcer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sponcer` (
  `sponcerId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `sponcerDesc` text,
  PRIMARY KEY (`sponcerId`),
  UNIQUE KEY `sponcer_sponcerId_uindex` (`sponcerId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `openId` varchar(50) NOT NULL,
  `imgUrl` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `user_userId_uindex` (`userId`),
  UNIQUE KEY `user_openId_uindex` (`openId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-05 19:25:26
