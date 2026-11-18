// Day 1 — Greeting: name + timeOfDay props, default name "Guest".
const messages = {
  morning: 'Good morning',
  afternoon: 'Good afternoon',
  evening: 'Good evening',
};

function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const message = messages[timeOfDay] ?? 'Hello';
  return (
    <p className="greeting">
      {message}, {name}!
      {timeOfDay === 'evening' && ' Hope your day went well.'}
    </p>
  );
}

export default Greeting;
