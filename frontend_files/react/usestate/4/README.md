🕒 Stopwatch App

A simple and interactive React Stopwatch that allows you to start, stop, and reset time with smooth updates and a clean modern UI.
Built using React hooks (useState and useRef) to handle state and intervals effectively.

🚀 Features
⏱ Start counting seconds in real-time
🛑 Stop the timer anytime
🔄 Reset back to 0 instantly
💎 Beautiful glassmorphism UI with responsive design
🧭 Dynamic browser tab title showing current time
⚡ Efficient use of React hooks to prevent bugs or memory leaks

🧩 Core React Concepts Used
    1. useState
    The useState hook is used to store and update the time value on the screen.

    const [time, setTimer] = useState(0);

    time holds the current number of seconds elapsed.
    setTimer is used to update time every second while the stopwatch is running.

    Example of updating state every second:

    setTimer(prev => prev + 1);

    This ensures React re-renders the component whenever the time value changes.

    2. useRef
        The useRef hook is used to store a reference to the timer interval — without causing re-renders.

    const timerRef = useRef(null);

    It stores the interval ID returned by setInterval().
    Because useRef doesn’t trigger re-renders, it’s perfect for keeping track of the running timer.

    Usage example:

    timerRef.current = setInterval(() => {
    setTimer(prev => prev + 1);
    }, 1000);

    When stopping or resetting, we can safely clear the interval:
    clearInterval(timerRef.current);
    timerRef.current = null;

    This prevents multiple timers from running at once.

⚙️ How It Works

Start Button:
    If no timer is running (timerRef.current is null), a new interval starts updating the time every second.

Stop Button:
    Clears the active interval and pauses the timer.

Reset Button:
    Resets the time to 0 and keeps the stopwatch ready to restart.

Dynamic Title:
    The browser tab updates in real-time to show the current stopwatch value:
    document.title = `Stopwatch ${time}`;

🧠 Learning Takeaways
    Understand how to manage state updates efficiently with useState.
    Learn to control side effects like intervals with references (useRef).
    Prevent unwanted re-renders and duplicate intervals.
    Build a clean and dynamic UI using React and CSS.

🖼️ Preview
![Stopwatch Preview](.\src\assets/Images/snip1.PNG)
[Stopwatch Preview](.\src\assets/Images/snip2.PNG)

💻 Installation & Usage
    # Clone the repository
    git clone https://github.com/yourusername/react-stopwatch.git
    # Navigate into the folder
    cd react-stopwatch
    # Install dependencies
    npm install
    # Start the development server
    npm start


Then open http://localhost:3000
 in your browser 🚀

🎨 Tech Stack
    React.js
    JavaScript (ES6+)
    CSS3 (Glassmorphism UI)

📄 License
    This project is open-source and available under the MIT License.