import { useState } from "react";
import s from './PostVisibility.module.css';

const PostVisibility = () => {
    const [visibilityIsOpen, setVisibilityIsOpen] = useState(false);
    const toggleDropdown = () => {
        setVisibilityIsOpen(!visibilityIsOpen);
        setPageIsOpen(false);
    };
    const [visibility, setVisibility] = useState("all");
    const handleVisibilityChange = (e) => {
        setVisibility(e.target.value);
    };
    const [pageIsOpen, setPageIsOpen] = useState(false);
    const togglePageDropdown = () => {
        setPageIsOpen(!pageIsOpen);
        setVisibilityIsOpen(false);
    };
    const [pagePost, setPagePost] = useState("myPage");
    const handlePageChange = (e) => {
        setPagePost(e.target.value);
    };
        return (
            <ul className={s.list}>
                <li>
                    <button type="button" onClick={toggleDropdown}>Кто это видит</button>
                    {visibilityIsOpen && (<ul className={s.radioList}>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="all"
                                    checked={visibility === "all"}
                                    onChange={handleVisibilityChange}
                                />
                                Видят все
                            </label>
                        </li>
                        <li>
                        <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="friends"
                                    checked={visibility === "friends"}
                                    onChange={handleVisibilityChange}
                                />
                                Только друзья
                            </label>
                        </li>
                        <li>
                        <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="me"
                                    checked={visibility === "me"}
                                    onChange={handleVisibilityChange}
                                />
                                Только я
                            </label>
                        </li>
                        <li>
                        <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="allBut"
                                    checked={visibility === "allBut"}
                                    onChange={handleVisibilityChange}
                                />
                                Все, кроме
                            </label>
                        </li>
                        <li>
                        <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="some"
                                    checked={visibility === "some"}
                                    onChange={handleVisibilityChange}
                                />
                                Определенные
                            </label>
                        </li>
                    </ul>)}
                </li>
                <li>
                    <button type="button" onClick={togglePageDropdown}>Где разместить</button>
                    {pageIsOpen && (<ul className={s.radioList}>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="myPage"
                                    checked={pagePost === "myPage"}
                                    onChange={handlePageChange}
                                />
                                Моя страница
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="friendsPage"
                                    checked={pagePost === "friendsPage"}
                                    onChange={handlePageChange}
                                />
                                Страница друга
                            </label>
                        </li>
                        </ul>)}
                </li>
            </ul>
)};

export default PostVisibility;