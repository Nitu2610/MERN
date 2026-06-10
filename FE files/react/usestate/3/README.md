Mistake:->

🧠 React Variable Scope & Persistence — Reference Notes
⚙️ 1. How React Components Work Internally

    React functional components are just functions that React calls on every render.
    Whenever a component’s state or props change, React calls the function again from the top — recreating:

    all local variables (let, const, var)
    all inline functions
    all objects and arrays declared in that function

    So, anything declared inside the component but outside hooks is recreated from scratch on every render.

2. What Happens to “Empty Variables” in Components
Example:

    const Counter = () => {
    let timer; // "empty variable"
    const start = () => {
        timer = setInterval(() => console.log("tick"), 1000);
    };

    const stop = () => {
        clearInterval(timer);
    };

    return <button onClick={start}>Start</button>;
    };

🧩 Problem:
    Every time the component re-renders, React runs the function again → let timer is re-declared and reset.
    The timer value from the previous render is lost.
    So when you call clearInterval(timer), that timer is undefined or stale.
    You can’t persist values across renders using normal variables.
    
3. Why useState Isn’t Ideal for Timers or IDs

    You could do: const [timer, setTimer] = useState(null);

But:
    Changing state triggers a re-render — unnecessary for something like a timer ID.
    You only need to store the ID, not display it.
    That’s why we use useRef().

4. The Correct Solution — useRef()
    useRef gives you a persistent object { current: ... } that React keeps the same across re-renders.
    Anything you assign to ref.current will not be lost when the component re-runs.

    Example:
    const timerRef = useRef(null);

    const start = () => {
    if (timerRef.current) return; // already running
    timerRef.current = setInterval(() => console.log("tick"), 1000);
    };

    const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    };

    ✅ Benefits:
    Persists across renders (doesn’t reset)
    Doesn’t trigger re-renders when updated
    Unique per component instance

