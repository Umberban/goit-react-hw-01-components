import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

export const FriendList = ({array})=>{
    return( <ul className={css.friendList}>
    {array.map(item => (<li key={item.id} className={css.item}>
        <FriendListItem friend={item}/>
      </li> ))}
  </ul>
)
} 
FriendList.propTypes = {
  array:PropTypes.array.isRequired,
}