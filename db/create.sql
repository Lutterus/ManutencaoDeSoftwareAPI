CREATE DATABASE SUPER_MILHAS;
USE SUPER_MILHAS;

CREATE TABLE IF NOT EXISTS USUARIOS (
  `cod_usuario` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(300) NOT NULL,
  `telefone` INT NULL,
  `aviso_expiracao_telefone` INT NULL,
  `aviso_expiracao_email` INT NULL,
  `oferta_compra` INT NOT NULL,
  PRIMARY KEY (`cod_usuario`));
  
CREATE TABLE IF NOT EXISTS CONTAS (
  `login` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cod_usario` INT NOT NULL,
  INDEX `usuarioFK_idx` (`cod_usario` ASC),
  PRIMARY KEY (`login`),
  CONSTRAINT `usuarioFK`
    FOREIGN KEY (`cod_usario`)
    REFERENCES USUARIOS (`cod_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS PROGRAMAS (
  `cod_programa` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `somaMilhas` INT NULL,
  `milha_expiracao_maisProxima` INT NULL,
  `contaLogin` VARCHAR(45) NULL,
  `contaSenha` VARCHAR(45) NULL,
  PRIMARY KEY (`cod_programa`),
  INDEX `contaFK_idx` (`contaLogin` ASC),
  CONSTRAINT `contaFK`
    FOREIGN KEY (`contaLogin`)
    REFERENCES CONTAS (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS MILHAS (
    `cod_milha` INT NOT NULL,
    `quantidade` VARCHAR(45) NOT NULL,
    `dt_expiracao` DATE NOT NULL,
    `cod_programa` INT NOT NULL,
    `contaLogin` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`cod_milha`),
    INDEX `programaFK_idx` (`cod_programa` ASC),
    INDEX `contaFK_idx` (`contaLogin` ASC),
    CONSTRAINT `programaFK` FOREIGN KEY (`cod_programa`)
        REFERENCES PROGRAMAS (`cod_programa`)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `contaFKMilhas` FOREIGN KEY (`contaLogin`)
        REFERENCES PROGRAMAS (`contaLogin`)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);