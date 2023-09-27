import React, { useState } from "react";

export default function ControlComponents() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    const Conc = ({ value, onChange, placeholder }) => {
        return <input type="text" value={value} onChange={(e) => onChange(console.log(e.target.value))} placeholder={placeholder} className="form-control w-25 border-3 my-2" />
    }
    return <>
        <Conc value={user} onChange={setUser} placeholder="User" />
        <Conc value={email} onChange={setEmail} placeholder="Email" />
    </>
}