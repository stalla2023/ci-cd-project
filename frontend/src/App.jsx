import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(response => setMessage(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React + Node.js CI/CD Project</h1>
            <h2>{message}</h2>
        </div>
    );
}

export default App;
