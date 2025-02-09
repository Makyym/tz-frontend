import { BsPinAngle } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { LuSendHorizontal, LuSmile } from "react-icons/lu";
import { MdPoll } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";
import s from './PostForm.module.css'
import { FaFeatherAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import PostVisibility from "../PostVisibility/postVisibility.jsx";
import MediaChooser from "../mediaChooser/mediaChooser.jsx";

const PostForm = ({children, poll, media, textProp}) => {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [mediaIsOpen, setIsMediaOpen] = useState(false);
    // const [textCount, setTextCount] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleMedia = () => {
        setIsMediaOpen(!mediaIsOpen);
    };

    useEffect(() => {
        const elementP = document.querySelector('.elementText');
        if (elementP) {
            const length = elementP.textContent.length;
            setCount(length);
        }}, []);
    // useEffect(() => {
    //     setTextCount(text.length);
    // }, [text]);
    return (
            <div className={s.div}>
                    <form action="#">
                        {poll || textProp ? (<div className={s.divPost}>
                            <img className={s.avatar} src="https://mfiles.alphacoders.com/101/1012322.png" alt="avatar" />
                            <div className={s.PostText}>
                                {poll ? <h2 className={s.title}>Создание опроса</h2>
                                : <h2 className={s.title}>Создание поста</h2>}
                                <label htmlFor="postTitle">
                                <input type="text" id="postTitle" className={s.postInput}/>
                                <FaFeatherAlt />
                                </label>
                            </div>
                            {!poll && <p>Символов: {count}</p>}
                            <button type="button" onClick={toggleDropdown}><TfiMoreAlt /></button>
                            {isOpen && <PostVisibility />}
                            </div>) :
                        (<div className={media ? s.divCommentMedia : s.divComment}>
                            <img className={s.avatar} src="https://mfiles.alphacoders.com/101/1012322.png" alt="avatar" />
                                <label htmlFor="comment">
                                <textarea
                                    name="comment"
                                    id="comment"
                                    rows="3"
                                    placeholder="Что у вас нового?"
                                    className={media ? s.commentTextMedia : s.commentText}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                                </label>
                                {media && <button type="button" onClick={toggleDropdown}><TfiMoreAlt /></button>}
                                {isOpen && <PostVisibility />}
                        </div>)}
                        {children}
                        <div className={s.divActions}>
                            <div className={s.divAnonym}>
                                <label htmlFor="anonym" className={s.checkbox}>
                                    <input type="checkbox" id="anonym" name="anonym"/>
                                    <span className={s.checkmark}></span>
                                    Анонимно
                                </label>
                            </div>
                            <button type="button" className={poll || media ? s.pollPoll : s.poll}><MdPoll /></button>
                            <button type="button" className={s.map}><PiMapPinFill /></button>
                            <button type="button" className={s.pin}><BsPinAngle /></button>
                            <button type="button" onClick={toggleMedia} className={poll ? s.pollClipper : s.clipper}><GoPaperclip /></button>
                            {mediaIsOpen && <MediaChooser />}
                            <button type="button" className={s.smile}><LuSmile /></button>
                            <button type="submit" className={poll || media ? s.pollSend : s.send}><LuSendHorizontal /></button>
                        </div>
                    </form>
                </div>
    )
};

export default PostForm;