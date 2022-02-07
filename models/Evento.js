const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    existencia: {
        type: Number,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }, 
    creado: {
        type: Date,
        default: Date.now() 
    }
});

EventoSchema.index({ nombre: 'text' });

module.exports = mongoose.model('Evento', EventoSchema);