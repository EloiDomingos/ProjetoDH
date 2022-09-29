CREATE DATABASE  IF NOT EXISTS `devsbeer` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `devsbeer`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: devsbeer
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `endereco` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_endereco_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_endereco_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'ali','545413','aqui',6),(7,'Lua','90756','de Mel',12),(8,'Lua','998698','Ali',13),(9,'Algum','5436333','Lugar',14);
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `valortotal` float NOT NULL,
  `status` varchar(45) NOT NULL,
  `pagamento` varchar(45) NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idpedidos_UNIQUE` (`id`),
  KEY `fk_pedidos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_pedidos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `tamanho` int NOT NULL,
  `preco` int NOT NULL,
  `marca` varchar(45) NOT NULL,
  `img` varchar(100) NOT NULL,
  `descri` varchar(500) NOT NULL,
  `tipo_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idprodutos_UNIQUE` (`id`),
  KEY `fk_produtos_tipo1_idx` (`tipo_id`),
  CONSTRAINT `fk_produtos_tipo1` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (2,'Gridania',500,15,'Devs','/imagens/beer01.jpg','Verte um magnífico preto com uma cabeça de algodão doce. Lindo laço. Impressionante aroma de biscoito, atado com um toque de suor e maçã. Paladar esther incrível, com notas de mamão e lúpulo. Sensação de boca elegante e final seco.',3),(3,'Fantasia',500,20,'Devs','/imagens/cerveja-colorado-appia-600ml_77132.jpg','Despeja um mogno vívido com uma cabeça de dois dedos. Laço pesado. Intenso aroma de éter, com apenas uma pitada de nozes pecan e milho. Brilhante paladar de pinheiro, acompanhado de gaiola de hamster e malte para biscoitos. Elegante sensação de boca e leve acabamento.',2),(4,'Norvrandt',500,25,'Devs','/imagens/norv.jpeg','Despeja um magnífico âmbar com uma cabeça de nove centímetros. Lindo lacinho. Aroma florido deslumbrante, com notas de cola e cítricos. Intenso sabor picante, e também um pouco de maçapão e gaiola de hamster. Boca pesada e acabamento seco.',5),(5,'Citrus',500,20,'Devs','/imagens/citrus.jpeg','Põe uma cor dourada vívida com uma cabeça de dois dedos. Lindo lacinho. Aroma de mofo deslumbrante, com apenas um toque de caramelo e bacon. Sexy paladar de galinheiro, e também suor e lilás. Sensação de boca cremosa e acabamento leve.',1),(6,'Black Pink',500,30,'Devs','/imagens/blackpink.jpeg','Despeja um tom de preto de tirar o fôlego com uma cabeça de cumulonimbus. Incrível lacagem. Aroma floral deslumbrante, com notas de pimenta e chiclete. Intensa espinha dorsal de malte do galinheiro, e também recebe um pouco de leite azedo e melaço. Elegante sensação de boca e final longo e longo.',6),(7,'Elpis',500,20,'Devs','/imagens/elpis.jpeg','Despeja um denso vermelho rubi com uma cabeça de dois dedos. Lindo lacinho. Delicado nariz bêbado, com sobretons de sopa de ervilha e bacon rachado. Sexy sabor de ácer, atado com um toque de milho e malte para biscoitos. Densa, densa sensação de boca e acabamento seco. ',4);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos_has_pedidos`
--

DROP TABLE IF EXISTS `produtos_has_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos_has_pedidos` (
  `produtos_id` int NOT NULL,
  `pedidos_id` int NOT NULL,
  PRIMARY KEY (`produtos_id`,`pedidos_id`),
  KEY `fk_produtos_has_pedidos_pedidos1_idx` (`pedidos_id`),
  KEY `fk_produtos_has_pedidos_produtos1_idx` (`produtos_id`),
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1` FOREIGN KEY (`pedidos_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `fk_produtos_has_pedidos_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_has_pedidos`
--

LOCK TABLES `produtos_has_pedidos` WRITE;
/*!40000 ALTER TABLE `produtos_has_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos_has_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Sour'),(2,'IPA'),(3,'Trigo'),(4,'Pilsen'),(5,'Lager'),(6,'Escura');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cpf` varchar(12) NOT NULL,
  `data` date NOT NULL,
  `tele` varchar(45) NOT NULL,
  `senha` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idusuarios_UNIQUE` (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'almira','almira@sasa.com','12332','1111-11-01','1212132131','admin'),(12,'Zenos van Galvus','zenos@gmail.com','999876','2022-09-03','88777659','$2b$11$7muabzXEIucW60/RXOd7R.9dGhhjFNT7JOJbL2kCoN7SldXAV4toq');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-29 15:09:55
