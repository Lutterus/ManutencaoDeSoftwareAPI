INSERT INTO usuarios (`email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES ("fulano@hotmail.com", "fulano", 111111111, 90, 90, 1);
INSERT INTO usuarios (`email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES ("ciclano@hotmail.com", "ciclano", 222222222, 90, 90, 1);
INSERT INTO usuarios (`email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`) VALUES ("beltrano@hotmail.com", "beltrano", 333333333, 0, 0, 0);

INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("fulano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "fulano"));
INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("ciclano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "ciclano"));
INSERT INTO contas (`login`, `senha`, `cod_usario`) VALUES ("beltrano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "beltrano"));

INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("programa1", "https://http2.mlstatic.com/locomotiva-motorizada-thomas-seus-amigos-thomas-10cm-trem-D_NQ_NP_602328-MLB26013645215_092017-F.jpg");
INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("programa2", "https://vignette.wikia.nocookie.net/jayjay/images/f/f8/Fun_meet_savannah_lg.jpg/revision/latest?cb=20120725183431");
INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("programa3", "https://i.imgur.com/qbjvM45.jpg");

INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa1", 4000, 1001, "fulano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa1", 5000, 1003, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa2", 5000, 1002, "fulano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa2", 5000, 1006, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa3", 5000, 1010, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("programa3", 6000, 1004, "beltrano@hotmail.com", 123);

INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181215, (select cod_programa from programas where nome = "programa1" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181214, (select cod_programa from programas where nome = "programa1" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181218, (select cod_programa from programas where nome = "programa2" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181213, (select cod_programa from programas where nome = "programa1" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181212, (select cod_programa from programas where nome = "programa3" and contaLogin = "beltrano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2500, 20181211, (select cod_programa from programas where nome = "programa2" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2500, 20181210, (select cod_programa from programas where nome = "programa2" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181209, (select cod_programa from programas where nome = "programa3" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181208, (select cod_programa from programas where nome = "programa3" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181207, (select cod_programa from programas where nome = "programa3" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181206, (select cod_programa from programas where nome = "programa3" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");