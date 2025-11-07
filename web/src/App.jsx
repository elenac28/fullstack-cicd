import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // When running locally, your backend will be at localhost:8080
        fetch("http://localhost:8080/api/hello")
            .then((res) => res.json())
            .then(setData)
            .catch((err) => setData({ error: err.message }));
    }, []);

    return (
        <div style={{ fontFamily: "system-ui", padding: 24 }}>
            <h1>Full Stack CI/CD</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;

