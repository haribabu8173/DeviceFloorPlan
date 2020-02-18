const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    devices: [{
        deviceId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Devices', DeviceSchema);
