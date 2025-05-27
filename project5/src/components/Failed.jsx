import { useLocation } from "react-router-dom";

const Failed = () => {
    const location = useLocation();
    const { errors = [], values = {} } = location.state || {};

    const {
        firstName = "",
        lastName = "",
        email = "",
        password = "",
        confirmPassword = ""
    } = values;

    return (
        <fieldset>
            <h1>Opps !! Something wrong please check</h1>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li>
                    <input type="text" value={firstName} readOnly />
                    <h3>{errors[0]}</h3>
                </li>
                <li>
                    <input type="text" value={lastName} readOnly />
                    <h3>{errors[1]}</h3>
                </li>
                <li>
                    <input type="email" value={email} readOnly />
                    <h3>{errors[2]}</h3>
                </li>
                <li>
                    <input type="password" value={password} readOnly />
                    <h3>{errors[3]}</h3>
                </li>
                <li>
                    <input type="password" value={confirmPassword} readOnly />
                    <h3>{errors[4]}</h3>
                </li>
                <li>
                    <button onClick={() => window.history.back()}>Go Back</button>
                </li>
            </ul>
        </fieldset>
    );
};

export default Failed;
