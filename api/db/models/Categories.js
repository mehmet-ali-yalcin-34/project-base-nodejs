const mongoose = require('mongoose');

const schema = mongoose.Schema({
    is_active : { type: Boolean, default: true },
    created_by : { type: mongoose.SchemaTypes.ObjectId, required: true },
    
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

class Catetories extends mongoose.Model { // hook yapısı , burda yazdığımız metodlar users tablosunda bir kayıt yapıldığında öncesinde kontrol edebiliriz.

}

schema.loadClass(Catetories);
module.exports = mongoose.model('categories', schema);