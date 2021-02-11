const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required:true,
        lowercase:true
    },
    category: {
        type: String,
        lowercase:true,
        required:true
    },
    coverImage: {
        type: Buffer
    },
    coverImageType: {
        type: String
    },

    ingredients: {

        type: String,
        required:true,
    },
    instructions: {
        type: String,
        required:true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'author'
    }
});
//get işleminde kullanılır
recipeSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
      }
  })

module.exports = mongoose.model('recipe', recipeSchema);