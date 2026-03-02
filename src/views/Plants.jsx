import React, { useState, useEffect } from 'react';
import { FaLeaf } from 'react-icons/fa';
import PlantCard from '../components/PlantCard';
import SearchField from '../components/SearchField';

const defaultCards = [
  {
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    description: 'A succulent plant species of the genus Aloe. Known for its medicinal and air-purifying properties.',
    level: 'beginner',
    light: 'Bright, indirect sunlight. Can tolerate some direct sun.',
    watering: 'Allow soil to dry completely between waterings. Water every 2-3 weeks.',
    soil: 'Cactus/succulent potting mix with excellent drainage.'
  },
  {
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    description: 'Popular indoor tree with large, violin-shaped leaves. Needs stable conditions.',
    level: 'intermediate',
    light: 'Bright, filtered light. Avoid direct afternoon sun.',
    watering: 'Water when top inch of soil is dry. About once a week.',
    soil: 'Rich, well-draining potting soil. Avoid soggy roots.'
  },
  {
    name: 'Orchid',
    scientificName: 'Phalaenopsis (Moth Orchid)',
    description: 'Elegant flowering plant. Requires specific care for blooms to last.',
    level: 'expert',
    light: 'Bright, indirect light. No direct sun.',
    watering: 'Water every 5-12 days. Let roots dry slightly between waterings.',
    soil: 'Special orchid bark mix for airflow and drainage.'
  }
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
  const [form, setForm] = useState({
    name: '',
    scientificName: '',
    description: '',
    level: '',
    light: '',
    watering: '',
    soil: ''
  });

  useEffect(() => {
    const stored = getStoredPlants();
    let initial = [];
    if (stored.length === 0) {
      initial = [...defaultCards];
    } else {
      initial = stored;
    }
    
    if (!initial.some(p => p.name === 'Aloe Vera')) {
      const aloe = defaultCards.find(p => p.name === 'Aloe Vera');
      if (aloe) initial = [aloe, ...initial];
    }
    setPlants(initial);
  }, []);

  useEffect(() => {
    
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
    setPlants([form, ...plants]);
    setForm({
      name: '',
      scientificName: '',
      description: '',
      level: '',
      light: '',
      watering: '',
      soil: ''
    });
  };

  const handleDelete = idx => {
    setPlants(plants.filter((_, i) => i !== idx));
  };

  
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
    <div style={{ padding: '2rem', paddingTop: '11rem', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: 24 }}>
        <SearchField
          handleinput={e => setFilter(e.target.value)}
          filter={filter}
        />
        <div style={{ width: '340px', maxWidth: '100%', textAlign: 'center' }}>
          <label htmlFor="levelFilter" style={{ fontWeight: 500, marginBottom: 4, display: 'block', color: '#388e3c' }}>Filter by Level:</label>
          <select
            id="levelFilter"
            value={levelFilter}
            onChange={e => setLevelFilter(e.target.value)}
            style={{ padding: '0.7rem', borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16, width: '100%' }}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>

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
            name="scientificName"
            placeholder="Scientific name"
            value={form.scientificName}
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
          <input
            name="light"
            placeholder="Light requirements"
            value={form.light}
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
          <input
            name="watering"
            placeholder="Watering schedule"
            value={form.watering}
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
          <input
            name="soil"
            placeholder="Soil type"
            value={form.soil}
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
              marginRight: 0,
            }}>Add</button>
          </div>
        </form>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
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

      
    </div>
  );
}
