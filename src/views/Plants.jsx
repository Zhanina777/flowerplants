import React, { useState, useEffect } from 'react';
import PlantCard from '../components/PlantCard';
import SearchField from '../components/SearchField';

const defaultCards = [
  { name: 'Aloe Vera', description: 'Easy to care for, great for beginners.', level: 'beginner' },
  { name: 'Fiddle Leaf Fig', description: 'Needs some experience, intermediate care.', level: 'intermediate' },
  { name: 'Orchid', description: 'Challenging, suited for experts.', level: 'expert' }
];

function getStoredPlants() {
  const data = localStorage.getItem('plants');
  if (data) return JSON.parse(data);
  return [];
}

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [form, setForm] = useState({ name: '', description: '', level: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = getStoredPlants();
    if (stored.length === 0) {
      setPlants([...defaultCards]);
    } else {
      setPlants(stored);
    }
  }, []);

  useEffect(() => {
    // Store all cards in localStorage after first card is added
    if (plants.length > 0) {
      localStorage.setItem('plants', JSON.stringify(plants));
    }
  }, [plants]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.level) return;
    if (editIndex !== null) {
      const updated = [...plants];
      updated[editIndex] = form;
      setPlants(updated);
      setEditIndex(null);
    } else {
      setPlants([form, ...plants]);
    }
    setForm({ name: '', description: '', level: '' });
  };

  const handleEdit = idx => {
    setForm(plants[idx]);
    setEditIndex(idx);
  };

  const handleDelete = idx => {
    setPlants(plants.filter((_, i) => i !== idx));
    if (editIndex === idx) setEditIndex(null);
  };

  // Map filteredPlants to their original indices
  const filteredPlantsWithIndex = plants
    .map((plant, idx) => ({ plant, idx }))
    .filter(({ plant }) => {
      const keyword = filter.toLowerCase();
      const matchesName = plant.name.toLowerCase().includes(keyword);
      const matchesDescription = plant.description && plant.description.toLowerCase().includes(keyword);
      const matchesAny = matchesName || matchesDescription;
      const matchesLevelFilter = levelFilter === 'all' || plant.level === levelFilter;
      return matchesAny && matchesLevelFilter;
    });

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
      <h1>Plants</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          name="name"
          placeholder="Plant name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginRight: 8 }}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <select name="level" value={form.level} onChange={handleChange} style={{ marginRight: 8 }} required>
          <option value="" disabled>Choose a level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && (
          <button type="button" onClick={() => { setForm({ name: '', description: '', level: '' }); setEditIndex(null); }} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </form>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: 16 }}>
        <SearchField
          handleinput={e => setFilter(e.target.value)}
          filter={filter}
        />
        <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)}>
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredPlantsWithIndex.map(({ plant, idx }) => (
          <PlantCard
            key={idx}
            plant={plant}
            onEdit={updated => {
              const updatedPlants = [...plants];
              updatedPlants[idx] = updated;
              setPlants(updatedPlants);
            }}
            onDelete={() => handleDelete(idx)}
          />
        ))}
      </div>
      {filteredPlantsWithIndex.length === 0 && <p>No plants found.</p>}

      {/* ...existing code... */}
    </div>
  );
}
