// Demo page for the Week 9 exercises and daily challenges.
// Two of them need their own routes (they contain <Routes>), so mount them in App.jsx:
//   <Route path="routing-demo/*" element={<RoutingDemo />} />        (Task 17.3)
//   <Route path="auth-demo/*" element={<ProtectedRouteDemo />} />    (Day 4)
import Counter from './task-17-1/Counter';
import UserProfile from './task-17-1/UserProfile';
import WindowSize from './task-17-1/WindowSize';
import ThemeToggle from './task-17-1/ThemeToggle';
import PostList from './task-17-2/PostList';
import PostListWithHook from './task-17-2/PostListWithHook';
import PostListWithStates from './task-17-4/PostList';
import Settings from './task-18-1/Settings';
import Modal from './task-18-1/Modal';
import ContactForm from './task-18-1/ContactForm';
import Button from './task-18-2/Button';
import Timer from './daily/Timer';
import UserSearch from './daily/UserSearch';
import Tabs from './daily/Tabs';
import UserProfilePage from './daily/UserProfilePage';

function Week9Demo() {
  return (
    <Tabs
      label="week9"
      tabs={[
        { label: '17.1 useEffect', content: <><Counter /><UserProfile userId={1} /><WindowSize /><ThemeToggle /></> },
        { label: '17.2 Fetching', content: <><h3>Ex. 1</h3><PostList /><h3>Ex. 2 (useFetch)</h3><PostListWithHook /></> },
        { label: '17.4 States', content: <PostListWithStates /> },
        { label: '18.1 Hooks', content: <><Settings /><Modal /><ContactForm /></> },
        { label: '18.2 CSS Modules', content: <><Button>Primary</Button> <Button variant="secondary">Secondary</Button></> },
        { label: 'Daily 1–3', content: <><Timer /><UserSearch /></> },
        { label: 'Daily 5', content: <UserProfilePage userId={1} /> },
      ]}
    />
  );
}

export default Week9Demo;
