import { Link } from 'react-router-dom';

function Home({ postCount }) {
  return (
    <section>
      <h2>Welcome to CommunityHub</h2>
      <p>A place for IYF Season 12 developers to share what they're building.</p>
      <p>There are currently {postCount} posts in the community.</p>
      <Link className="btn btn-primary btn-medium" to="/posts">Browse posts</Link>
    </section>
  );
}

export default Home;
