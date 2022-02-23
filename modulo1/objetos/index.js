//- **Exercícios de interpretação de código**
//    
//    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
//    
//    1.  Leia o código abaixo
//        
//        ```jsx
//        const filme = {
//        	nome: "Auto da Compadecida", 
//        	ano: 2000, 
//        	elenco: [
//        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//        		"Virginia Cavendish"
//        		], 
//        	transmissoesHoje: [
//        		{canal: "Telecine", horario: "21h"}, 
//        		{canal: "Canal Brasil", horario: "19h"}, 
//        		{canal: "Globo", horario: "14h"}
//        		]
//        }
//        
//        console.log(filme.elenco[0])
//        console.log(filme.elenco[filme.elenco.length - 1])
//        console.log(filme.transmissoesHoje[2])
//        ```
//        
//        a) O que vai ser impresso no console?

//        console.log(filme.elenco[0]) ============> Matheus Nachtergaele
//        console.log(filme.elenco[filme.elenco.length - 1]) ===========> 18
//        console.log(filme.transmissoesHoje[2])===========> {canal: "Canal Brasil", horario: "19h"}

//        ```

//2. Leia o código abaixo
//    
//    ```jsx
//    const cachorro = {
//    	nome: "Juca", 
//    	idade: 3, 
//    	raca: "SRD"
//    }
//    
//    const gato = {...cachorro, nome: "Juba"}
//    
//    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//    
//    console.log(cachorro)
//    console.log(gato)
//    console.log(tartaruga)
//    ```
//    
//    a) O que vai ser impresso no console?
//    
//    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

