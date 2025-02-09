import { useId } from "react";
import { useState } from "react";
import s from './MediaLoader.module.css';
import { AiOutlinePlus } from "react-icons/ai";

const MediaLoader = () => {
    const [mediaFiles, setMediaFiles] = useState([]);
    const mediaId = useId();

    const addMedia = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMediaFiles([...mediaFiles, { file, id: mediaId, isVisible: true,}])
        }
    };
    const toggleVisibility = (id) => {
        setMediaFiles(mediaFiles.map(media =>
            media.id === id ? {...media, isVisible: !media.isVisible} : media
        ));
    };
    return (
        <div>
            <div id="mediaBlocks" className={s.div}>
                {mediaFiles.map(media => {
                    return (
                        <div key={media.id} className={s.mediaContainer}>
                            {media.file.type.startsWith('image/') && media.isVisible && (
                                <img src={URL.createObjectURL(media.file)} alt={media.id} style={{ maxWidth: '100%' }} />
                            )}
                            {media.file.type.startsWith('video/') && media.isVisible && (
                                <video src={URL.createObjectURL(media.file)} controls style={{ maxWidth: '100%' }} />
                            )}
                            {!(<button onClick={() => toggleVisibility(media.id)}>
                                {media.isVisible ? 'hide' : 'shows'}
                            </button>)}
                        </div>
                    )
                })}
                <div className={s.inputDiv}>
                    <input type="file" onChange={addMedia} accept="image/*, video/*"/>
                    <button><AiOutlinePlus /></button>
                </div>
            </div>
        </div>
    );
};

export default MediaLoader;