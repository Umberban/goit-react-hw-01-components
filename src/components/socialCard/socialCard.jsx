import css from "./socialCard.module.css";
import PropTypes from "prop-types";

export const Profile = ({data:{stats,avatar,username,location,tag }}) => {
  return (
    <div className={css.app}>
      <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
        <li className={css.stat} >
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stat} >
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li><li className={css.stat} >
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
    </ul>
</div>
  );
};
Profile.propTypes = {
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.object,
};
