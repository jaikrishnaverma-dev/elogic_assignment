import React from "react";
import CubeAnimation from "../auth/CubeAnimation";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <div style={{ width: "100%", minHeight: "80vh",padding:"0px 20px" }}>
      <>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#333333",textAlign:"center" }}>
          eLogic Assignment App
        </h1>
        <p style={{ fontSize: 16, lineHeight: "1.5", color: "#666666" }}>
          This is a React application built for the eLogic company assignment.
          It utilizes Redux for state management, React Router DOM for
          navigation, and Material UI for UI design.
        </p>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          Features
        </h2>
        <ul
          style={{ listStyleType: "disc", paddingLeft: 20, color: "#666666" }}
        >
          <li style={{ marginBottom: 10 }}>
            <strong>User Authentication</strong>
            <ul
              style={{ listStyleType: "circle", paddingLeft: 20, marginTop: 5 }}
            >
              <li>User login</li>
              <li>User registration</li>
            </ul>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>User Management</strong>
            <ul
              style={{ listStyleType: "circle", paddingLeft: 20, marginTop: 5 }}
            >
              <li>Edit user details (including profile picture)</li>
              <li>User listing</li>
            </ul>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Group Management</strong>
            <ul
              style={{ listStyleType: "circle", paddingLeft: 20, marginTop: 5 }}
            >
              <li>Create groups</li>
              <li>Assign users to groups</li>
              <li>Group-wise user listing</li>
            </ul>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>User Profile</strong>
            <ul
              style={{ listStyleType: "circle", paddingLeft: 20, marginTop: 5 }}
            >
              <li>View and update user profile</li>
            </ul>
          </li>
        </ul>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          Technologies Used
        </h2>
        <ul
          style={{ listStyleType: "disc", paddingLeft: 20, color: "#666666" }}
        >
          <li>React</li>
          <li>Redux</li>
          <li>React Router DOM</li>
          <li>Material UI</li>
        </ul>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          Installation
        </h2>
        <ol style={{ paddingLeft: 20, color: "#666666" }}>
          <li style={{ marginBottom: 10 }}>
            Clone the repository:{" "}
            <code
              style={{
                backgroundColor: "#f5f5f5",
                padding: "2px 4px",
                borderRadius: 4,
                color: "#333333",
              }}
            >
              git clone https://github.com/jaikrishnaverma-dev/elogic_assignment.git
            </code>
          </li>
          <li style={{ marginBottom: 10 }}>
            Navigate to the project directory:{" "}
            <code
              style={{
                backgroundColor: "#f5f5f5",
                padding: "2px 4px",
                borderRadius: 4,
                color: "#333333",
              }}
            >
              cd elogic_assignment
            </code>
          </li>
          <li style={{ marginBottom: 10 }}>
            Install dependencies:{" "}
            <code
              style={{
                backgroundColor: "#f5f5f5",
                padding: "2px 4px",
                borderRadius: 4,
                color: "#333333",
              }}
            >
              npm install
            </code>
          </li>
          <li style={{ marginBottom: 10 }}>
            Start the development server:{" "}
            <code
              style={{
                backgroundColor: "#f5f5f5",
                padding: "2px 4px",
                borderRadius: 4,
                color: "#333333",
              }}
            >
              npm start
            </code>
          </li>
        </ol>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          Usage
        </h2>
        <p style={{ fontSize: 16, lineHeight: "1.5", color: "#666666" }}>
          Once the development server is running, you can access the application
          in your web browser at{" "}
          <code
            style={{
              backgroundColor: "#f5f5f5",
              padding: "2px 4px",
              borderRadius: 4,
              color: "#333333",
            }}
          >
            http://localhost:3000
          </code>
          .
        </p>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          Contributing
        </h2>
        <p style={{ fontSize: 16, lineHeight: "1.5", color: "#666666" }}>
          Contributions are welcome! If you find any issues or have suggestions
          for improvements, please open an issue or submit a pull request.
        </p>
        <h2
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333333",
            marginTop: 30,
          }}
        >
          License
        </h2>
        <p style={{ fontSize: 16, lineHeight: "1.5", color: "#666666" }}>
          This project is licensed under the{" "}
          <a href="#" style={{ color: "#337ab7", textDecoration: "none" }}>
            MIT License
          </a>
          .
        </p>
      </>
    </div>
  );
};

export default About;
