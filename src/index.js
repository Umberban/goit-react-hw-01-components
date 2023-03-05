import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'social card/App';
import { Statistics } from 'statist/Statistics';
import { FriendList} from 'FriendList/FriendList';
import './index.css';
import PropTypes from "prop-types";
import data from "./statist/data.json";
import friendList from "./FriendList/friends.json";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Profile/>
    <Statistics array={data} title="Upload stats" /> */}
    <FriendList array = {friendList}/>
  </React.StrictMode>
);
console.log(data);
