// const collection = 'NEW_COLLECTION_NAME';


//CREATE DATABASE TEST
//USE TEST
//use("test");
//Apagando a collection antes de inserir novos dados.
//db.cardapio.drop();

//Código para criar uma nova collection
//db.createCollection("cardapio");

//Código para inserir vários dados em uma collection criada anteriormente
/*db.cardapio.insertMany([
    {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
    {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
    {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
    {nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
    {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
])*/

//SELECT * FROM test.cardapio;

//No mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
//db.cardapio.find();

//Filtrando pelo nome
//SELECT * FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"});

//Para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})



// use("teretreino");
// db.createCollection("treino");

// db.treino.insertOne(
//     {
//         nome:"Peito e Biceps",
//         diaSemana:"Segunda",
//         exercicios:[
//             {
//                 nome:"Supino",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Martelo",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Voador",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Scott",
//                 serie:4,
//                 repeticoes:15
//             },
            
//         ]
//     }
// )
// db.treino.insertOne(
//     {
//         nome:"Costas e Tríceps",
//         diaSemana:"Quarta",
//         exercicios:[
//             {
//                 nome:"Tríceps Polia",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Tríceps Corda",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Pull Down",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Curvada",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Puxada Alta",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Baixa",
//                 serie:4,
//                 repeticoes:15
//             }
//         ]
//     }
// )

// db.treino.insertOne(
//     {
//         nome:"Inferiores",
//         diaSemana:"Terca e Quinta",
//         exercicios:[
//             {
//                 nome:"Leg Press",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Agachamento",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Levantamento Terra",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Panturrilha",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Extensora ",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Abdutora",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Adutora",
//                 serie:4,
//                 repeticoes:15
//             }
            
//         ]
//     }
// )


// use("teretreino");
// db.treino.find({_id:ObjectId("64f741cda707fa4d20a60cef")})

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f741cda707fa4d20a60cf1")}, 
//     {
//         $set:{
//             diaSemana:"Sexta",
//             nome:"Peito e Biceps A"
//             }
//             }
//         )

// use("teretreino");
// db.treino.updateOne(
//     {_id: ObjectId('64f741cda707fa4d20a60cef'), "exercicios.nome":"Rosca Scott"},
//     {
//         $set:{
//             "exercicios.$.nome":"Rosca Scott",
//             "exercicios.$.serie":"5",
//             "exercicios.$.repeticoes":"12"
//         }
//     }
// )


db.createCollection("cake");

use("dbpatissier");
db.cake.insertMany([
    {
        _id:ObjectId('111111111111'),
        nome:"Cenoura",
        preco: "29,90",
        peso: "1500",
        ingredientes:[
            {
                nome: "oleo",
                quantidade: "1/2 xicara"
            },
            {
                nome: "ovo",
                quantidade: "4"
            },
            {
                nome: "farinha de trigo",
                quantidade: "2 xicaras"
            },
            {
                nome:"cenouras medias raladas",
                quantidade: "3"
            },
            {
                nome: " acucar",
                quantidade: "2 xicaras"
            },
            {
                nome: "fermento em po",
                quantidade: "1 colher"
            }
        ]
    }, 
    {
        _id:ObjectId('222222222222'),
        nome:"Chocolate",
        preco: "59,90",
        peso: "1500",
        ingredientes:[
            {
                nome: "manteiga",
                quantidade: "2 colheres"
            },
            {
                nome: "ovo",
                quantidade: "4 unidades"
            },
            {
                nome: "farinha de trigo",
                quantidade: "3 xicaras"
            },
            {
                nome:"chocolate em po",
                quantidade: "3 xicaras"
            },
            {
                nome: " acucar",
                quantidade: "2 xicaras"
            },
            {
                nome: "fermento em po",
                quantidade: "1 colher"
            }
        ]
    }, 
    {
        _id:ObjectId('333333333333'),
        nome:"Limão",
        preco: "49,90",
        peso: "1000",
        ingredientes:[
            {
                nome: "ovo",
                quantidade: "4"
            },
            {
                nome: "farinha de trigo",
                quantidade: "2 xicaras"
            },
            {
                nome:"margarina",
                quantidade: "3 colheres"
            },
            {
                nome: " acucar",
                quantidade: "2 xicaras"
            },
            {
                nome: "fermento em po",
                quantidade: "1 colher"
            },
            {
                nome: "raspas de limao",
                quantidade: "1 limao"
            },
            {
                nome: "leite",
                quantidade: "1 xicara"
            },
        ]
    }, 
    {
        _id:ObjectId('444444444444'),
        nome:"Laranja",
        preco: "55,90",
        peso: "1000",
        ingredientes:[
            {
                nome: "oleo",
                quantidade: "1/2 xicara"
            },
            {
                nome: "ovo",
                quantidade: "4"
            },
            {
                nome: "farinha de trigo",
                quantidade: "2 xicaras"
            },
            {
                nome:"raspas de laranja",
                quantidade: "3"
            },
            {
                nome: " acucar",
                quantidade: "2 xicaras"
            },
            {
                nome: "fermento em po",
                quantidade: "1 colher"
            },
        ]
    }]
)


use("db_patissier");
db.cake.deleteMany({_id:ObjectId('313131313131313131313131')});

use("db_patissier");
db.cake.find({}, {nome:true,preco:true});

use("db_patissier");
db.cake.find({preco: {$lte:70}}, {nome:true, preco:true});

use("db_patissier");
db.cake.updateOne(
    {_id:ObjectId("343434343434343434343434")},
    {
        $set:{
            nome: "Chocolate",
            peso: "1500",
        },
        $push: {
        ingredientes: {
            nome: "chocolate em po",
            quantidade: "3 xicaras"
        },
    },
  }
)
use("db_patissier");
db.cake.updateOne(
    {_id:ObjectId("323232323232323232323232"), "ingredientes.nome": "manteiga"},
    {
        $set:{
            "ingredientes.$.nome":"ovo",
            "ingredientes.$.quantidade":"3"
        },
    }
)





