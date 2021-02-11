const mongoose = require('mongoose');
const Recipe = require('./recipe');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        min: 2,
        max: 30,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        min: 2,
        max: 30,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    city:{
        type:String
    },
    coverImage: {
        type: Buffer,

    },
    coverImageType: {
        type: String,

    },
});

authorSchema.virtual('coverImagePath').get(function () {
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
});
authorSchema.pre('remove', function (next) {
    Recipe.find({ author: this.id }, (err, recipes) => {
        if (err) {
            next(err);
        }
        else if (recipes.length > 0) {
            next(new Error('Önce tarifleri siliniz !'));
        } else {
            next();
        }
    });
});

module.exports = mongoose.model('author', authorSchema);