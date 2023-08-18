import { Profile } from '../components/Profile/Profile';
import user from '../components/data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../components/data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../components/data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
