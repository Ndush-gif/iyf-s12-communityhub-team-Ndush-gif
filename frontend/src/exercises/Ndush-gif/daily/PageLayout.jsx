// Day 5 — PageLayout: children, Header + Footer, optional sidebar, responsive.
import './daily.css';

function PageLayout({ children, sidebar }) {
  return (
    <div className="dc-layout">
      <header className="dc-layout-header">CommunityHub</header>
      {/* The grid only gets a second column when a sidebar is passed */}
      <div className={sidebar ? 'dc-layout-body with-sidebar' : 'dc-layout-body'}>
        <main>{children}</main>
        {sidebar && <aside>{sidebar}</aside>}
      </div>
      <footer className="dc-layout-footer">&copy; CommunityHub</footer>
    </div>
  );
}

export default PageLayout;
