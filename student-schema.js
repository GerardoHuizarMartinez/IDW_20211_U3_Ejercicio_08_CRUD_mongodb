var mongoose = require ('mongoose')

module.exports = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            lowercase : true,
            match: /.+@.+\..+/
        },
        grade: {
            type: Number,
            default: 70
        }    
});
