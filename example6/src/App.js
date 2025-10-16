import './App.css';

function App() {
    return (
        <div className="grid-container">
            {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className={`item color-${i + 1}`}>Box {i + 1}</div>
            ))}
        </div>
    );
}

export default App;
