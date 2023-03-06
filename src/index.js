import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/socialCard/socialCard';
import { Statistics } from 'components/statist/Statistics';
import { FriendList} from 'components/friendList/FriendList';
import './index.css';
import data from "./components/statist/data.json";
import friendList from "./components/friendList/friends.json";
import user from "./components/socialCard/user.json";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile data={user}/>
    <Statistics array={data} title="Upload stats" />
    <FriendList array = {friendList}/>
  </React.StrictMode>
);
console.log(data);
