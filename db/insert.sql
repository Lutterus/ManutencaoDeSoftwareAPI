INSERT INTO usuarios (`email`, `nome`, `telefone`) VALUES ("fulano@hotmail.com", "fulano", 111111111);
INSERT INTO usuarios (`email`, `nome`, `telefone`) VALUES ("ciclano@hotmail.com", "ciclano", 222222222);
INSERT INTO usuarios (`email`, `nome`, `telefone`) VALUES ("beltrano@hotmail.com", "beltrano", 333333333);

INSERT INTO contas (`login`, `senha`, `cod_usuario`, `is_admin`) VALUES ("fulano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "fulano"), false);
INSERT INTO contas (`login`, `senha`, `cod_usuario`, `is_admin`) VALUES ("ciclano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "ciclano"), false);
INSERT INTO contas (`login`, `senha`, `cod_usuario`, `is_admin`) VALUES ("beltrano@hotmail.com", 123, (select cod_usuario from usuarios where nome = "beltrano"), false);

INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("Livelo", "http://emalta.com.br/wp-content/uploads/2016/10/livelo-vale-a-pena-810x519.jpg");
INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("Smiles", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gol_Smiles_logo.svg/1200px-Gol_Smiles_logo.svg.png");
INSERT INTO programa_defaults(`nome`,`imagem`) VALUES("Azul", "data:image/png;base64,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");

INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Livelo", 4000, 1001, "fulano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Livelo", 5000, 1003, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Smiles", 5000, 1002, "fulano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Smiles", 5000, 1006, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Azul", 5000, 1010, "ciclano@hotmail.com", 123);
INSERT INTO programas (`nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`) VALUES ("Azul", 6000, 1004, "beltrano@hotmail.com", 123);

INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181215, (select cod_programa from programas where nome = "Livelo" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181214, (select cod_programa from programas where nome = "Livelo" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181218, (select cod_programa from programas where nome = "Smiles" and contaLogin = "fulano@hotmail.com"), "fulano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181213, (select cod_programa from programas where nome = "Livelo" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181212, (select cod_programa from programas where nome = "Azul" and contaLogin = "beltrano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2500, 20181211, (select cod_programa from programas where nome = "Smiles" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2500, 20181210, (select cod_programa from programas where nome = "Smiles" and contaLogin = "ciclano@hotmail.com"), "ciclano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (5000, 20181209, (select cod_programa from programas where nome = "Azul" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181208, (select cod_programa from programas where nome = "Azul" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181207, (select cod_programa from programas where nome = "Azul" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");
INSERT INTO milhas (`quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`) VALUES (2000, 20181206, (select cod_programa from programas where nome = "Azul" and contaLogin = "ciclano@hotmail.com"), "beltrano@hotmail.com");