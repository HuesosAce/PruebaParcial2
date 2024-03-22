import mongoose from 'mongoose';

export const InstructoresSchema = new mongoose.Schema({
    nombre : { type: String, required: true }
});