import { useState } from "react";
import s from './MediaChooser.module.css';

const MediaChooser = () => {
    const [mediaType, setMediaType] = useState('photo');
    const handleMediaTypeChange = (e) => {
        setMediaType(e.target.value);
    };
    return (
    <div className={s.div}>
        <ul className={s.list}>
            <li>
            <label>
                <input
                    type="radio"
                    name="visibility"
                    value="photo"
                    checked={mediaType === "photo"}
                    onChange={handleMediaTypeChange}
                />
                Фото
            </label>
            </li>
            <li>
            <label>
                <input
                    type="radio"
                    name="mediaType"
                    value="video"
                    checked={mediaType === "video"}
                    onChange={handleMediaTypeChange}
                />
                Видео
            </label>
            </li>
            <li>
                <label>
                <input
                    type="radio"
                    name="mediaType"
                    value="music"
                    checked={mediaType === "music"}
                    onChange={handleMediaTypeChange}
                />
                Музыка
            </label>
            </li>
            <li>
                <label>
                <input
                    type="radio"
                    name="mediaType"
                    value="audiobook"
                    checked={mediaType === "audiobook"}
                    onChange={handleMediaTypeChange}
                />
                Аудиокнига
            </label>
            </li>
            <li>
                <label>
                <input
                    type="radio"
                    name="mediaType"
                    value="translation"
                    checked={mediaType === "translation"}
                    onChange={handleMediaTypeChange}
                />
                Эфир
            </label>
            </li>
            <li>
                <label>
                <input
                    type="radio"
                    name="mediaType"
                    value="file"
                    checked={mediaType === "file"}
                    onChange={handleMediaTypeChange}
                />
                Файл
            </label>
            </li>
        </ul>
    </div>
    )
}

export default MediaChooser