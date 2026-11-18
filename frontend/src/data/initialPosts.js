// Seed data so the app has something to show before the backend exists (Week 10).
const initialPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'Components, props and state are the three ideas everything else in React is built on. Start small: one component, one piece of state.',
    author: 'Amina Otieno',
    date: '2026-11-15',
    likes: 4,
    liked: false,
  },
  {
    id: 2,
    title: 'JavaScript Best Practices',
    content: 'Use const by default, prefer === over ==, and never mutate state directly. Small habits keep a codebase readable as it grows.',
    author: 'Brian Kamau',
    date: '2026-11-12',
    likes: 7,
    liked: false,
  },
  {
    id: 3,
    title: 'Why We Use Pull Requests',
    content: 'Every change goes through a branch and a review. It feels slower at first, but a second pair of eyes catches bugs before they reach main.',
    author: 'Wanjiru Mwangi',
    date: '2026-11-17',
    likes: 2,
    liked: false,
  },
];

export default initialPosts;
