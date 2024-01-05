import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';


import { getTrackById } from './src/services/deezerService.js';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI , {
    connectTimeoutMS: 3000, 
    socketTimeoutMS: 20000 
 });

 const db = mongoose.connection;
db.once('open', () => {
   console.log(`Connexion à MongoDB OK !`);
});
db.on('error', console.error.bind(console, 'Erreur de connexion MongoDB:'));

app.get('/track/:id', async (req, res) => {
    try {
        const trackData = await getTrackById(req.params.id);
        res.json(trackData);
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération des données de la piste.");
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

