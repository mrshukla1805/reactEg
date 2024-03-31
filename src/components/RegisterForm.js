import {useState} from "react";

function RegisterForm() {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" />
                <button type="submit"> Submit Form </button>
            </form>
        </div>

    )
}