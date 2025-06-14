import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        <li>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </li>
        <li>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
        <li>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </li>
        <li>
          <button type="submit">Create User</button>
        </li>
      </ul>

      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </form>
  );
};

export default Form;
