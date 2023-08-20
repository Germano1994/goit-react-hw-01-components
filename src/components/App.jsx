import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'; 
import user from './user.json';
import statsData from './data.json';
import friendsData from './friends.json';
import transactionsData from './transactions.json'; 

const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};

export default App;
