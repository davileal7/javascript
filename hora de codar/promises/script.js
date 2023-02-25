// Promises - based -  then e catch's
function loadsomeData() {
    return new Promise(function (resolve, reject) {

        setTimeout(function(){

            const data = {id: 123, name: "algum dado"};

            resolve(data);
        }, 1000);
        });
    }

    loadsomeData()
    .then(function (data) {
        console.log(`Dados carregados com sucesso:`, data)
        return data;
    })
    .then(function(newData){
        console.log(`O nome é: ${newData.name}`);
    })
    .catch(function(error){
        console.log(`Erro ao carregar dados: ${error}`)
    })
    
