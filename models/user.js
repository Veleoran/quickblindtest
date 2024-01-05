
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    score: String,
});

module.exports = mongoose.model('User', UserSchema);
