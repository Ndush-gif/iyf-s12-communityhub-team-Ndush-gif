// Day 3 — reusable Tabs: tabs = [{ label, content }], keyboard accessible, fade animation.
import { useState } from 'react';
import './tabs.css';

function Tabs({ tabs, initialIndex = 0, label = 'Tabs' }) {
  const [active, setActive] = useState(initialIndex);

  // Left/Right arrows move between tabs (standard tab keyboard pattern).
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') setActive((i) => (i + 1) % tabs.length);
    if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label={label} onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`tab-${label}-${i}`}
            aria-selected={i === active}
            aria-controls={`panel-${label}-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={i === active ? 'tab active' : 'tab'}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* key={active} remounts the panel so the fade animation replays */}
      <div
        key={active}
        role="tabpanel"
        id={`panel-${label}-${active}`}
        aria-labelledby={`tab-${label}-${active}`}
        className="tab-panel"
      >
        {tabs[active].content}
      </div>
    </div>
  );
}

export default Tabs;
