import { useState } from "react";
import TextInput from "../../components/TextInput"
import { style } from "./style";

function CreateAccount() {

    const [firstName, setFirstName] = useState("");

    return (
        <div className="createAccountContainer">
            <div>
                <TextInput
                    variant="standard"
                    style={style.textInputStyle}
                    value={firstName}
                    action={setFirstName}
                />
            </div>
        </div>
    );
}

export default CreateAccount;
