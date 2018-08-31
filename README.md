# Supermilhas API

## Project structure :warning:

This project is organized as:

    db/                     | Database scripts
    source/                 | Application folder
      models/               | Database models
      public/               | Static files (images, styles, icons...)
      routes/               | All project routes handlers
        routeGroup1/        | All routes from that group
          all.get.js        | Single route named by response type and http method
        routeGroup2/        | All routes from that other group
        utils/              | Special routes (Not found, error handler...)

        app.js              | Main API file
        database.js         | Database initializer
        docs.js             | Documentation builder

    tests/                  | Application tests
      unit/                 | All aplication tests
        routes/             | Segmented by route
          routeGroup1/      | Single group route
            all.get.test.js | One test file for each route file
          routeGroup2/      | Other group routes
        mocks.js            | All gerneric mocks needed for tests

    package.json            | Dependency manager
    settings.js             | Application global settings
    swagger.js              | Documentation config



Para inicializar o projeto é preciso seguir os seguintes passos:

## 1 - Checar se possui node e npm instalados (node versão 6.* ou maior)

No terminal digite:

```
  node --version
  npm --version
```

## 2 - Instalar as dependências
No terminal digite:

```
  npm install
```

## 3 - Inicializar api localmente
No terminal digite:

```
  npm start
```

## Testes

Para rodar os testes da aplicação apenas rode o script de testes configurado no npm:

```
  npm test
```