import axios from 'axios';

export const getTrackById = async (trackId) => {
    const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


