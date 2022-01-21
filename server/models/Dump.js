const mongoose = require('mongoose');

const DumpSchema = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        text: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        access: {
            type: String,
            enum: [ 'PVT', 'UNL' ],
            uppercase: true,
            default: 'UNL'
        },
         
        slug: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = Dump = mongoose.model('dump', DumpSchema);
