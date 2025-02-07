import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumaric, digits and whitespaces only!'],
    },
    category: String,
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumaric, digits and whitespaces only!'],
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumaric, digits and whitespaces only!'],
    },
    year: {
        type: Number,
        min: 1900,
        max: 2025
    },
    imageUrl: {
        type: String,
        match: /^https?:\/\//,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        maxLength: 20,
        match: /^[a-zA-Z 0-9]+$/,
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;