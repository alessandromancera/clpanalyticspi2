
by Durval Sproesser<br> 
Projeto Integrador II - Univesp 2022.

### Membros do Grupo:
Alessandro Lima Mancera, 2008684<br>
Andre Luiz Felix Da Rosa, 2011349<br>
Carlos Alberto Guedes Golino, 1802881<br>
Durval Sproesser Neto, 2000799<br>
Edson Inácio De Lima, 2004603<br>
Maxuel Araujo Ferreira Da Silva, 2013257<br>
Rafael Montoro Da Silva, 2000952<br>
Rogerio Rodella, 2009359<br>

### Install

1. Verify .ENV: dbName/connections
2. Create mySQL DB named: `clpanalyticspi2` or execute `yarn sequelize db:create`
3. Execute `yarn sequelize db:migrate`
4. Execute `yarn sequelize db:seed:all`

```
#install dependence
yarn or npm install

#Start Dev Project
yarn dev or npm run dev
```


### EndPoints
```
1. Esteira:
    1.1. Count [retorna total de registros] - GET:/esteira/c
    1.2. Index [retorna todos os registros] - GET:/esteira/
    1.3. Show  [retorna um único registro ] - GET:/esteira/{id}

2. Forno:
    2.1. Count [retorna total de registros] - GET:/forno/c
    2.2. Index [retorna todos os registros] - GET:/forno/
    2.3. Show  [retorna um único registro ] - GET:/forno/{id}

3. FlowPack:
    3.1. Count [retorna total de registros] - GET:/flowpack/c
    3.2. Index [retorna todos os registros] - GET:/flowpack/
    3.3. Show  [retorna um único registro ] - GET:/flowpack/{id}
```
