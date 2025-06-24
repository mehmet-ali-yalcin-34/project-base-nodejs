const mongoose = require('mongoose');

const schema = mongoose.Schema({

    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    permissions: String,
    created_by: { type: mongoose.SchemaTypes.ObjectId, required: true }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

class RolePrivilages extends mongoose.Model { // hook yapısı , burda yazdığımız metodlar users tablosunda bir kayıt yapıldığında öncesinde kontrol edebiliriz.

}

schema.loadClass(RolePrivilages);
module.exports = mongoose.model('role_privileges', schema);