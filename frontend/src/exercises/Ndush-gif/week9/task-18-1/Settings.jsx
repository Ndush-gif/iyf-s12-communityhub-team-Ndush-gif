// Task 18.1 Ex. 1 — Usage: settings that survive a page refresh.
import useLocalStorage from './useLocalStorage';

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <label htmlFor="settings-theme">Theme</label>
      <select id="settings-theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label htmlFor="settings-font">Font size: {fontSize}px</label>
      <input
        id="settings-font"
        type="range"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        min="12"
        max="24"
      />
      <p style={{ fontSize }}>Preview text</p>
    </div>
  );
}

export default Settings;
