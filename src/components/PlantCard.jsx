import React, { useState } from "react";

export default function PlantCard({ plant, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...plant });

  // Keep form in sync if plant prop changes
  React.useEffect(() => {
    setForm({ ...plant });
  }, [plant]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(form);
    setEditing(false);
  };

  const handleCancel = () => {
    setForm({ ...plant });
    setEditing(false);
  };

  return (
    <div className="plant-card">
      {editing ? (
        <>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ marginBottom: 8 }}
          />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{ marginBottom: 8 }}
          />
          <select name="level" value={form.level} onChange={handleChange} style={{ marginBottom: 8 }}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <div className="plant-card-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p><strong>Level:</strong> {plant.level}</p>
          <div className="plant-card-actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
