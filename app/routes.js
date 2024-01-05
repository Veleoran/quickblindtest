app.get('/', async (req, res) => {
    try {
        // Obtenez une piste par son ID ou par une méthode de recherche, etc.
        const trackData = await getTrackById('some-track-id');
        // Rendez une vue pug avec les données de la piste
        res.render('index', { track: trackData });
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération des données de la piste.");
    }
});