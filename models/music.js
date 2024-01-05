import Music from './models/Music.js'; // Supposition d'un schéma Mongoose pour la musique

app.post('/track', async (req, res) => {
    try {
        // Supposons que req.body.id contient l'ID de la piste
        const trackData = await getTrackById(req.body.id);
        const newTrack = new Music(trackData);
        await newTrack.save();
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(500).send("Erreur lors de l'ajout de la piste à la base de données.");
    }
});