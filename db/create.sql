mysql -u root -p
drop database super_milhas;

CREATE DATABASE super_milhas;
USE super_milhas;

CREATE TABLE IF NOT EXISTS usuarios (
  `cod_usuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(450) NOT NULL,
  `nome` VARCHAR(300) NOT NULL,
  `telefone` VARCHAR(20) NULL,
  PRIMARY KEY (`cod_usuario`))
  AUTO_INCREMENT=1000;
  
CREATE TABLE IF NOT EXISTS contas (
  `login` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cod_usuario` INT NOT NULL,
  `is_admin` BOOLEAN NOT NULL,
  INDEX `usuarioFK_idx` (`cod_usuario` ASC),
  PRIMARY KEY (`login`),
  CONSTRAINT `usuarioFK`
    FOREIGN KEY (`cod_usuario`)
    REFERENCES usuarios (`cod_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS programa_defaults (
	`nome` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(4000) NOT NULL,
    PRIMARY KEY (`nome`)
);

CREATE TABLE IF NOT EXISTS programas (
  `cod_programa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `somaMilhas` INT NULL,
  `milha_expiracao_maisProxima` INT NULL,
  `contaLogin` VARCHAR(45) NULL,
  `contaSenha` VARCHAR(45) NULL,
  PRIMARY KEY (`cod_programa`),
  INDEX `contaFK_idx` (`contaLogin` ASC),
  INDEX `dlistprogramasfk_idx` (`nome` ASC),
  CONSTRAINT `contaFK`
    FOREIGN KEY (`contaLogin`)
    REFERENCES contas (`login`)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `defaultProgramasList` 
	FOREIGN KEY (`nome`)
    REFERENCES programa_defaults (`nome`)
    ON DELETE NO ACTION ON UPDATE NO ACTION)
    AUTO_INCREMENT = 1000;

CREATE TABLE IF NOT EXISTS milhas (
    `cod_milha` INT NOT NULL AUTO_INCREMENT,
    `quantidade` VARCHAR(45) NOT NULL,
    `dt_expiracao` DATE NOT NULL,
    `cod_programa` INT NOT NULL,
    `contaLogin` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`cod_milha`),
    INDEX `programaFK_idx` (`cod_programa` ASC),
    INDEX `contaFK_idx` (`contaLogin` ASC),
    CONSTRAINT `programaFK` FOREIGN KEY (`cod_programa`)
        REFERENCES programas (`cod_programa`)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `contaFKMilhas` FOREIGN KEY (`contaLogin`)
        REFERENCES programas (`contaLogin`)
        ON DELETE NO ACTION ON UPDATE NO ACTION
)
AUTO_INCREMENT=1000;

CREATE TABLE IF NOT EXISTS esquecimento_senhas (
  `idesqueci_senha` INT NOT NULL,
  `email` VARCHAR(450) NOT NULL,
  `token` VARCHAR(450) NOT NULL,
  `dt_criacao` DATE NOT NULL,
  PRIMARY KEY (`idesqueci_senha`));

create event remove_old_miles
on schedule every 24 hour
do delete from milhas where dt_expiracao < curdate() - 10;

create event remove_old_expiration_tokens
on schedule every 24 hour
do delete from esquecimento_senhas where dt_criacao < curdate();
