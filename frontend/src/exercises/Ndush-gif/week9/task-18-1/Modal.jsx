// Task 18.1 Ex. 2 — Usage: a modal opened and closed with useToggle.
import useToggle from './useToggle';

function Modal() {
  const [isOpen, { toggle, setFalse }] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>Open Modal</button>

      {isOpen && (
        <div className="modal" role="dialog" aria-label="Example modal">
          <p>Modal Content</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </>
  );
}

export default Modal;
