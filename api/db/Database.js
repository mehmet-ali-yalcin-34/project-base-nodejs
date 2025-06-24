const mongoose = require('mongoose')

let instance = null
class Database {

    constructor() {
        if (!instance) { //singleton
            this.mongoConnection = null;
            instance = this;
        }
        return instance
    }


    async connect(options){

        try{
            console.log("Connecting to database...")

            let db = await mongoose.connect(options.CONNECTION_STRING)

            this.mongoConnection = db;

            console.log("Connected to database")
        }
        catch(e){
            console.error(e)
            process.exit(1)
        }
        
    }

}

module.exports = Database