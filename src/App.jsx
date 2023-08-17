import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirm) {
            alert("Vos deux mots de passe ne sont pas identiques");
          } else {
            alert("Form was sent!");
          }
        }}
      >
        <span>Name</span>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <span>Email</span>
        <input type="email" placeholder="Email" />

        <span>Password</span>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <span>Confirm Password</span>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
