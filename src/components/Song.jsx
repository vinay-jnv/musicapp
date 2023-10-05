import { useEffect, useState } from "react";

// Song Component - Function + JSX return
const Song = () => {
    const [songs, setSongs] = useState([]);
    // function create for api call
    const makeApiCall = async () => {

        const URL = 'https://itunes.apple.com/search?term=ap dhillon&limit=25';
        // to make api call we use fetch
        const response = await fetch(URL);
        // fetch gives response
        // response = Header + Body
        const data = await response.json();
        // response.json() - get the json and convert it into JS Object
        console.log('Data is ', data.results);
        setSongs(data.results); // Set in State
    }
    // It call when component mount
    useEffect(() => {
        // API CALL
        makeApiCall();
        // API CALL (WEB API) (WEB Service)

    }, []);

    // fetch(URL); // Non - Blocking (Async)
    // const promise = fetch(URL);
    // promise.then().catch();
    return (
        <div>
            {songs.length == 0 && <p>No Songs</p>}

            {songs.map(currentSong =>
                <div className="song-header">
                    <img src={currentSong.artworkUrl100} />
                    <p>{currentSong.trackName}</p>
                    <audio controls>
                        <source src={currentSong.previewUrl} type="audio/mp3" />
                    </audio>
                </div>)}

        </div>
    )
}
export default Song;