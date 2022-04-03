const mongoose = require ("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    country :{type: String, required: false, default:"India"},
    name :{type: String, required: true,},
    email :{type: String, required: true, unique:true},
    password :{type: String, required: true,},
    newsletter :{type: Boolean, required: false, default:false},
},
{
    versionKey:false,
    timestamps:true,
})

userSchema.pre('save', function(next) {
    // do stuff
    const hash = bcrypt.hashSync(this.password, 10);
    this.password=hash;
    next();
  });

userSchema.methods.verifyPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

const User =mongoose.model("user", userSchema);

module.exports =User;