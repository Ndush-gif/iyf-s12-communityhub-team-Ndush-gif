# CommunityHub

## Team
- **Lead:** Catherine Nduku — [@Ndush-gif](https://github.com/Ndush-gif)
- **Member:** Ann Catherine Waweru — [@anncathy-commits](https://github.com/anncathy-commits)
- **Started:** November 2026 (Week 8), continuing to Week 12

## Project Description
CommunityHub is a community site where IYF Season 12 developers can share posts about what they are building. Week 8 covers the React frontend: the page layout, a list of posts held in state, and a form for creating new posts. A backend is added in Week 10.

## Technologies Used
- React 19 (function components and `useState`)
- Vite 8
- React Router
- Vitest (unit tests)
- oxlint
- CSS

## Features
- Header with site name, navigation and a login button placeholder
- Post list rendered from state: title, excerpt, author, date and likes
- Create-post form that adds a new post to the list
- Like/unlike and delete posts
- Search posts by title or author
- Sidebar with About, Popular Posts and Tags
- Footer with links and copyright
- Tested helpers in `frontend/src/utils/posts.js`

## How to Run
```bash
git clone https://github.com/Ndush-gif/iyf-s12-communityhub-team-Ndush-gif.git
cd iyf-s12-communityhub-team-Ndush-gif/frontend
npm install
npm run dev     # development server
npm test        # unit tests
npm run lint    # linter
```
Requires Node 22.12 or newer.

## Project Structure
```
frontend/src/
├── components/
│   ├── Layout/   Header, Footer, Sidebar, Layout
│   ├── Post/     PostCard, PostList, CreatePost
│   └── shared/   Button, Input, Card
├── pages/        Home, Posts, PostDetail, About, NotFound
├── utils/        posts.js + posts.test.js
├── data/         seed posts
└── exercises/    each member's lesson exercises
```

## Lessons Learned
- Lifting state to `App` lets every page work from the same posts list.
- State must be updated with new arrays and objects (`map`, `filter`, spread), never mutated.
- Values like the filtered list can be derived during render instead of being stored in state.
- Pure helper functions are easy to test because they have no side effects.

## Challenges Faced
- Removing the Vite demo without breaking imports: we replaced `App.jsx` first, then deleted the demo assets, and ran `npm run build` to confirm nothing still pointed at them.
- Coordinating a shared repo: branch protection means every change needs a teammate's review, so we split the work into small PRs.
