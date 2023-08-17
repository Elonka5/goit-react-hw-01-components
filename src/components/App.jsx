import { Profile } from './Profile';
import user from '../components/data/user.json';
import { Statistics } from './Statistics';
import data from '../components/data/data.json';
import { FriendList } from './FriendList';
import friends from '../components/data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
