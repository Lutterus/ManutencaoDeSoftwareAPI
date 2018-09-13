INSERT INTO usuarios (`cod_usuario`, `email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES (1, "fulano@hotmail.com", "fulano", 111111111, 90, 90, 1);
INSERT INTO usuarios (`cod_usuario`, `email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES (2, "ciclano@hotmail.com", "ciclano", 222222222, 90, 90, 1);
INSERT INTO usuarios (`cod_usuario`, `email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES (3, "beltrano@hotmail.com", "beltrano", 333333333, 0, 0, 0);

INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("fulano", 123, 1);
INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("ciclano", 123, 2);
INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("beltrano", 123, 3);

INSERT INTO programa_defaults(`nome`,`text`) VALUES("programa1", "");
INSERT INTO programa_defaults(`nome`,`text`) VALUES("programa2", "");
INSERT INTO programa_defaults(`nome`,`text`) VALUES("programa3", "");

INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (10, "programa1", 4000, NULL, "fulano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (11, "programa2", 4000, NULL, "fulano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (20, "programa2", 5000, NULL, "fulano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (21, "programa2", 5000, NULL, "ciclano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (22, "programa1", 5000, NULL, "ciclano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (23, "programa3", 5000, NULL, "ciclano", 123);
INSERT INTO programas (`cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES (30, "programa3", 6000, NULL, "beltrano", 123);

INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (101, 2000, 20181215, 10, "fulano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (102, 2000, 20181215, 10, "fulano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (103, 4000, 20181215, 11, "fulano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (104, 5000, 20181215, 21, "ciclano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (105, 2500, 20181215, 21, "ciclano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (106, 2500, 20181215, 22, "ciclano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (107, 5000, 20181215, 30, "ciclano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (108, 2000, 20181215, 30, "beltrano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (109, 2000, 20181215, 30, "beltrano");
INSERT INTO milhas (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (110, 2000, 20181215, 30, "beltrano");