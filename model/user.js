const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model('user', userSchema);