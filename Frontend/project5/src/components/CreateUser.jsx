import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorList = [];

        if (firstName.length < 3) {
            errorList.push("First name must contain more than two characters");
        }

        if (lastName.length < 3) {
            errorList.push("Last name must contain more than two characters");
        }

        if (email.length < 3) {
            errorList.push("Email must contain more than two characters");
        }

        if (password.length < 3) {
            errorList.push("Password must contain more than two characters");
        }

        if (password !== confirmPassword) {
            errorList.push("Passwords do not match");
        }

        if (errorList.length > 0) {
            navigate("/failed", {
                state: {
                    errors: errorList,
                    values: { firstName, lastName, email, password, confirmPassword }
                }
            });
        } else {
            navigate("/SuccessPage", {
                state: { firstName }
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </li>
                <li>
                    <button type="submit">Create User</button>
                </li>
            </ul>
        </form>
    );
};

export default CreateUser;
