import CardUser from './components/Profile/Profile';
import cardUsers from './components/Profile/user.json';
import SectionStatic from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical.json';
import ListFriends from './components/FriendList/FriendList';
import friends from './components/FriendListItem/friends.json';
import ListTransactions from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
    return <div className="container">
        <CardUser
            imgUrl={cardUsers.avatar}
            userName={cardUsers.name}
            tag={cardUsers.tag}
            location={cardUsers.location}
            statsUser={cardUsers.stats}
        />
        <SectionStatic title="Upload stats" stats={statisticalData} />
        <SectionStatic stats={statisticalData} />;
        <ListFriends friends={friends} />
        <ListTransactions items={transactions} />
    </div>
}