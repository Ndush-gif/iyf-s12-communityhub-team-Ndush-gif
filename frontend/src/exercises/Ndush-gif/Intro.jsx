import { useState } from 'react';

// Task 15.1 — intro component. Replace the placeholder text with your own.
function Intro() {
  const name = 'Your Name';
  // Lazy initial state: read the clock once, on first render.
  const [now] = useState(() => new Date());
  const hour = now.getHours();

  let greeting;
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';
  else greeting = 'Good evening';

  return (
    <section>
      <h1>{name}</h1>
      <p>{greeting}! Thanks for stopping by.</p>
      <p>I'm a Season 12 student at the IYF Weekend Academy, learning full-stack web development.</p>
      <p>Before React I worked through HTML, CSS and JavaScript, and I enjoy building things people can use.</p>
      <p>This term my team is building CommunityHub, a place for developers to share their work.</p>
      <p>Today is {now.toDateString()}.</p>
    </section>
  );
}

export default Intro;
