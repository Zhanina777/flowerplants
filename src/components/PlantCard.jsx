import React, { useState } from "react";

export default function PlantCard({ plant, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...plant });

  
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
            placeholder="Plant name"
            style={{ marginBottom: 8 }}
          />
          <input
            name="scientificName"
            value={form.scientificName}
            onChange={handleChange}
            placeholder="Scientific name"
            style={{ marginBottom: 8 }}
          />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            style={{ marginBottom: 8 }}
          />
          <input
            name="light"
            value={form.light}
            onChange={handleChange}
            placeholder="Light requirements"
            style={{ marginBottom: 8 }}
          />
          <input
            name="watering"
            value={form.watering}
            onChange={handleChange}
            placeholder="Watering schedule"
            style={{ marginBottom: 8 }}
          />
          <input
            name="soil"
            value={form.soil}
            onChange={handleChange}
            placeholder="Soil type"
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
          {plant.scientificName && <p><em>{plant.scientificName}</em></p>}
          {plant.description && <p>{plant.description}</p>}
          {plant.light && <p><strong>Light:</strong> {plant.light}</p>}
          {plant.watering && <p><strong>Watering:</strong> {plant.watering}</p>}
          {plant.soil && <p><strong>Soil:</strong> {plant.soil}</p>}
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
