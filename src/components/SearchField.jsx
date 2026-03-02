import React from "react";

export default function Searchfield({ handleinput, filter }) {
    return (
        <input
            type="search"
            placeholder="Search"
            onChange={handleinput}
            value={filter}
            style={{
                width: '340px',
                maxWidth: '100%',
                padding: '1rem 1.2rem',
                fontSize: '1.2rem',
                borderRadius: '12px',
                border: '2px solid #4caf50',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(60,120,60,0.08)',
                background: '#f8fafc',
                color: '#222',
                transition: 'border-color 0.2s',
            }}
        />
    );
}