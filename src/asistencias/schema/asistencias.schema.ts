import mongoose from 'mongoose';

export const AsistenciasSchema = new mongoose.Schema({
    cliente: [{type: mongoose.Schema.Types.ObjectId, ref :'clientes'}],
    clase : [{type: mongoose.Schema.Types.ObjectId, ref :'clases'}],
    fecha: {type:Date, required:true}
},{
    timestamps:true
});