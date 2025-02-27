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
            <h2>As a Master's student in Computer Science, I built a CI/CD pipeline to automate the deployment of a React frontend (AWS S3 + CloudFront) and a Node.js backend (AWS Elastic Beanstalk). Using GitHub Actions, the pipeline performs automated building, testing, security checks, and deployment for seamless delivery.</h2>
            <h3>{message}</h3>
        </div>
    );
}

export default App;
