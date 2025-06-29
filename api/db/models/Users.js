const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_active : { type: Boolean, default: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

class Users extends mongoose.Model { // hook yapısı , burda yazdığımız metodlar users tablosunda bir kayıt yapıldığında öncesinde kontrol edebiliriz.

}

schema.loadClass(Users);
module.exports = mongoose.model('users', schema);