import { BsCircle } from "react-icons/bs";
import s from './Poll.module.css';
import { FaFeatherAlt } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const Poll = () => {
    return (
        <ul className={s.list}>
            <li className={s.li}>
                <BsCircle />
                <div className={s.svg}>
                    <label htmlFor="postTitle" className={s.svg}>
                    <input type="text" id="postTitle" className={s.postInput} placeholder="Вариант ответа"/>
                    <FaFeatherAlt />
                    </label>
                </div>
                <span className={s.line}></span>
                <p>0 %</p>
            </li>
            <li className={s.li}>
                <BsCircle />
                <div className={s.svg}>
                    <label htmlFor="postTitle" className={s.svg}>
                    <input type="text" id="postTitle" className={s.postInput} placeholder="Вариант ответа"/>
                    <FaFeatherAlt />
                    </label>
                </div>
                <span className={s.line}></span>
                <p>0 %</p>
            </li>
            <li className={s.addVariant}>
                <CiSquarePlus />
                <p>Добавить вариант ответа</p>
            </li>
        </ul>
    )
};

export default Poll;