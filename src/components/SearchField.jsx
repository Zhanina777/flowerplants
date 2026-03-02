import React from "react";

export default function Searchfield({ handleinput, filter }) {
    return (
        <input type="search" placeholder="Type for events" onChange={handleinput} value={filter} />
    );
}