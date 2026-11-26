import { useState } from 'react';

// Task 15.1 — intro component. 
function Intro() {
  const name = 'Catherine Nduku';
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
      <p>Right now I'm leading my team on CommunityHub. Every project teaches me something new, and I'm excited to keep growing as a developer.</p>
      <p>Today is {now.toDateString()}.</p>
    </section>
  );
}
export default Intro;
