import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import data from "./friends.json";


export const FriendList = ({array})=>{
    return( <ul className="friend-list">
    {array.map((item)=> <li key={item.id} className={css.item}>
        <img srs={item.avatar} alt="profile-avatar" className={css.image}/>
        <p className={css.name}>{item.percentage}</p>
      </li> )}
  </ul>
)

}