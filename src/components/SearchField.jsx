import React from "react";

export default function Searchfield({ handleinput, filter }) {
    return (
        <input type="search" placeholder="Search" onChange={handleinput} value={filter} />
    );
}