import { useEffect } from 'react';
import style from '../styles/Header.module.css';

function AudioPlayer() {
    useEffect(() => {
        const audio = document.querySelector('audio');
        const onLoadedMetadata = () => {
            audio.currentTime = 0;
            audio.play();
        };
        audio.addEventListener('loadedmetadata', onLoadedMetadata);
        return () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, []);

    return (
        <audio controls autoPlay loop className={style.audio}>
            <source src="/dean.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    );
}

export default AudioPlayer;