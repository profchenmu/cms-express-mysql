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
-- Dumping data for table `lottery`
--

LOCK TABLES `lottery` WRITE;
/*!40000 ALTER TABLE `lottery` DISABLE KEYS */;
INSERT INTO `lottery` VALUES (1,'test',1,1,1,'2018-10-31 08:34:05','2018-11-30 08:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(2,'test0',1,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(3,'test1',2,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(4,'test2',3,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(5,'test0',1,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(6,'test0',1,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(7,'test1',2,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(8,'test2',3,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(9,'test3',4,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(10,'test4',5,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(11,'test5',6,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(12,'test6',7,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(13,'test7',8,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(14,'test8',9,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0),(15,'test9',10,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg',1,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `lottery` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `lotteryForAdmin`
--

LOCK TABLES `lotteryForAdmin` WRITE;
/*!40000 ALTER TABLE `lotteryForAdmin` DISABLE KEYS */;
INSERT INTO `lotteryForAdmin` VALUES (1,'test',1,1,1,'2018-10-31 00:34:05','2018-11-30 00:34:12','http://aa.bb.com/foo/bar.jpg','aaaaa',1,'aaaaaa',2,NULL,NULL,2,0);
/*!40000 ALTER TABLE `lotteryForAdmin` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `lotteryGet`
--

LOCK TABLES `lotteryGet` WRITE;
/*!40000 ALTER TABLE `lotteryGet` DISABLE KEYS */;
INSERT INTO `lotteryGet` VALUES (1,1),(2,1),(1,2),(2,2);
/*!40000 ALTER TABLE `lotteryGet` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `lotteryJoin`
--

LOCK TABLES `lotteryJoin` WRITE;
/*!40000 ALTER TABLE `lotteryJoin` DISABLE KEYS */;
INSERT INTO `lotteryJoin` VALUES (1,1);
/*!40000 ALTER TABLE `lotteryJoin` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `lotteryStart`
--

LOCK TABLES `lotteryStart` WRITE;
/*!40000 ALTER TABLE `lotteryStart` DISABLE KEYS */;
INSERT INTO `lotteryStart` VALUES (1,1);
/*!40000 ALTER TABLE `lotteryStart` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `sponcer`
--

LOCK TABLES `sponcer` WRITE;
/*!40000 ALTER TABLE `sponcer` DISABLE KEYS */;
/*!40000 ALTER TABLE `sponcer` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test1','http://aa.bb.com/foo/bar.jpg','aaa-bbb-ccc','aaabbb'),(2,'test2','http://aa.bb.com/foo/bar.jpg','ccc-bbb-aaa','bbbaaa');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-05 20:00:20
