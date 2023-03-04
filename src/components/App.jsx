import css from "../modules/App.module.css"
import PropTypes from "prop-types";
import user from "../user.json"
const Description = ({ avatar, username,location,tag }) => (
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
);
const Stat = ({stats,quantity,type})=>(
  <li className={css.stat} >
    <span className={css.label}>{type}</span>
    <span className={css.quantity}>{stats[quantity]}</span>
  </li>
)

const Stats = ()=> (
<ul className={css.stats}>
  <Stat stats={user.stats} type="Followers" quantity="followers" ></Stat>
  <Stat stats={user.stats} type="Likes" quantity="likes" ></Stat>
  <Stat stats={user.stats} type="Views" quantity="views" ></Stat>
</ul>

);
export const App = (children) => {
  return (
    <div className={css.app}>
      <Description username={user.username}
         tag={user.tag}
          location={user.location}
          avatar={user.avatar} />
      <Stats stats={user.stats}/>
  
</div>
  );
};
Description.propTypes = {
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
};
Stat.propTypes = {
  stats:PropTypes.object,
  
};