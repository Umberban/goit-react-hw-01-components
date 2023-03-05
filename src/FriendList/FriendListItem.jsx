
import PropTypes from "prop-types";
import css from './FriendList.module.css';

const FriendListItem = ({friend: {avatar, name, isOnline}})=> {

  return (
<>
   {isOnline
   ? (<span className={css.online}>{isOnline} </span>)
   : (<span className={css.offline}>{isOnline} </span>)}
   <img className={css.avatar} src={avatar} alt="Avatar"/>
  <p className={css.name}>{name}</p>
</>
  )
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}