import React, { useState, useEffect } from 'react';
import { FaLeaf } from 'react-icons/fa';
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
      <div style={{
        background: '#f8fafc',
        border: '1px solid #d1e7dd',
        borderRadius: 16,
        boxShadow: '0 2px 12px rgba(60,120,60,0.08)',
        padding: '2rem',
        marginBottom: '2rem',
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          <FaLeaf style={{ color: '#4caf50', fontSize: 32 }} />
          <h1 style={{ margin: 0, fontSize: 28 }}>Add a Plant</h1>
        </div>
        <form onSubmit={handleSubmit} style={{ marginBottom: 0 }}>
          <input
            name="name"
            placeholder="Plant name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              marginBottom: 10,
              width: '90%',
              padding: '0.7rem',
              borderRadius: 8,
              border: '1px solid #b2dfdb',
              fontSize: 16,
            }}
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            style={{
              marginBottom: 10,
              width: '90%',
              padding: '0.7rem',
              borderRadius: 8,
              border: '1px solid #b2dfdb',
              fontSize: 16,
            }}
          />
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            required
            style={{
              marginBottom: 10,
              width: '94%',
              padding: '0.7rem',
              borderRadius: 8,
              border: '1px solid #b2dfdb',
              fontSize: 16,
              color: form.level ? '#222' : '#888',
            }}
          >
            <option value="" disabled>Choose a level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <div style={{ marginTop: 10 }}>
            <button type="submit" style={{
              background: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '0.7rem 1.5rem',
              fontSize: 16,
              cursor: 'pointer',
              marginRight: editIndex !== null ? 8 : 0,
            }}>{editIndex !== null ? 'Update' : 'Add'}</button>
            {editIndex !== null && (
              <button type="button" onClick={() => { setForm({ name: '', description: '', level: '' }); setEditIndex(null); }} style={{
                background: '#e57373',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '0.7rem 1.5rem',
                fontSize: 16,
                cursor: 'pointer',
              }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
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
