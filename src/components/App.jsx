import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Statistics from './Statistics/Statistics';
import Profile from './Profile/Profile';

import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';

export const App = () => {
  return (
    <div className="APP">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
