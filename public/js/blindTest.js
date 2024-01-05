// Exemple de script pour lire un extrait sonore sur la page
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.querySelector('#audioPlayer');
    const playButton = document.querySelector('#playButton');

    playButton.addEventListener('click', () => {
        // Faire une requête au serveur pour obtenir une piste aléatoire
        fetch('/game')
            .then(response => response.json())
            .then(track => {
                audioPlayer.src = track.preview; // L'URL de l'extrait sonore
                audioPlayer.play();
            })
            .catch(error => console.error('Erreur lors de la récupération de la piste:', error));
    });
});