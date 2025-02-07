import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 250,
        //match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumaric, digits and whitespaces only!'],
    },
    category: {
        type: String,
        required: true,
        enum: [
            'tv-show',
            'animation',
            'movie',
            'documentary',
            'short-film'
        ]
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: 5,
        maxLength: 250,
        match: /^[a-zA-Z 0-9]+$/,
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        minLength: 5,
        maxLength: 250,
        match: /^[a-zA-Z 0-9]+$/,
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
        minLength: 20,

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