class businessModel {
    constructor(repotory){
        this.repotory = repository
    }

    insert(login, senha, cod_usario){
        return new Promise((resolve, reject) => {
            this.repotory.findByCodUser(cod_usario).then((res) => {
                reject(res)
            }).catch((res) => { 
                this.repotory.insert({
                    login: login,
                    senha: senha,
                    cod_usario: cod_usario
                }).then((res) => {
                    resolve(res)
                }).catch((res) => {
                    reject(res)
                })
            })
        })
    }
    
    findAll(){
        return new Promise((resolve, reject) => {
            this.repotory.findAll().then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res)
            })
        })
    }

    findByCodUser(){
        return new Promise((resolve, reject) => {
            this.repotory.findByCodUser().then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res)
            })
        })
    }
}

module.exports = businessModel