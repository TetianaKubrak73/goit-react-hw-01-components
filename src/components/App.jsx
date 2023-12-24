import {
  FriendList,
  FriendListItem,
  TransactionHistory,
  Statistics,
  Profile,
} from '../components';

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
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <FriendListItem
        key={friends.id}
        name={friends.name}
        isOnline={friends.isOnline}
        avatar={friends.avatar}
      />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
