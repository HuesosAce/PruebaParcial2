import mongoose from 'mongoose';
export const ClasesSchema = new mongoose.Schema({
    nombre : { type: String, required: true },
    instructor : [{ type: mongoose.Schema.Types.ObjectId, ref: 'instructores' }]
},{
    timestamps:true
});