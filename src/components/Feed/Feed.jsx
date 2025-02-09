import { FaHome } from "react-icons/fa";
import s from './Feed.module.css';

export const Feed = ({children}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.div}>
      <FaHome />
      <h2>Живая лента</h2>
      </div>
      {children}
    </div>
  )
};