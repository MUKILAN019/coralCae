import React, { useState, useEffect } from 'react';
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts';
import css from './CoralChart.scss'; // make sure it's a CSS module
import { motion } from 'framer-motion';

const CoralChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCharts, setShowCharts] = useState({
    health: true,
    species: true,
    bleaching: true
  });
  const [selectedYear, setSelectedYear] = useState(2025);

  const coralHealthData = [
    { year: 2000, healthIndex: 94, conservation: 30 },
    { year: 2005, healthIndex: 85, conservation: 35 },
    { year: 2010, healthIndex: 72, conservation: 45 },
    { year: 2015, healthIndex: 60, conservation: 60 },
    { year: 2020, healthIndex: 48, conservation: 75 },
    { year: 2025, healthIndex: 41, conservation: 85 },
  ];

  const coralSpeciesData = [
    { species: 'Acropora', population: 1200 },
    { species: 'Montipora', population: 900 },
    { species: 'Porites', population: 700 },
    { species: 'Pocillopora', population: 500 },
    { species: 'Favia', population: 300 },
  ];

  const bleachingData = [
    { region: 'Pacific', value: 40 },
    { region: 'Atlantic', value: 25 },
    { region: 'Indian Ocean', value: 20 },
    { region: 'Red Sea', value: 15 },
  ];

  const pieColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev === bleachingData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  const filteredHealthData = coralHealthData.filter(d => d.year <= selectedYear);

  const toggleChart = (chartName) => {
    setShowCharts(prev => ({
      ...prev,
      [chartName]: !prev[chartName]
    }));
  };

  return (
    <div className={css.coralContainer}>
      <motion.div 
        className={css.dashboardControls}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className={css.yearSliderContainer}>
          <label htmlFor="yearSlider">Historical data up to: {selectedYear}</label>
          <input 
            type="range" 
            id="yearSlider" 
            min="2000" 
            max="2025" 
            step="5" 
            value={selectedYear} 
            onChange={handleYearChange}
            className={css.yearSlider}
          />
        </div>

        <div className={css.toggleButtons}>
          <button 
            className={`${css.toggleButton} ${showCharts.health ? css.active : ''}`} 
            onClick={() => toggleChart('health')}
          >
            Health Trends
          </button>
          <button 
            className={`${css.toggleButton} ${showCharts.species ? css.active : ''}`} 
            onClick={() => toggleChart('species')}
          >
            Species Data
          </button>
          <button 
            className={`${css.toggleButton} ${showCharts.bleaching ? css.active : ''}`} 
            onClick={() => toggleChart('bleaching')}
          >
            Bleaching Data
          </button>
        </div>
      </motion.div>

      {showCharts.health && (
        <motion.div 
          className={css.chartSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={css.chartTitle}>Coral Reef Health Over Time</h2>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={filteredHealthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="conservationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6BCB77" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6BCB77" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#f8fafc" />
              <YAxis stroke="#f8fafc" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} 
                itemStyle={{ color: '#f8fafc' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="healthIndex" 
                name="Health Index" 
                stroke="#38bdf8" 
                fillOpacity={1} 
                fill="url(#healthGradient)" 
              />
              <Area 
                type="monotone" 
                dataKey="conservation" 
                name="Conservation Efforts" 
                stroke="#6BCB77" 
                fillOpacity={1} 
                fill="url(#conservationGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={css.chartInsight}>
            <div className={css.insightIcon}>💡</div>
            <p>Coral health has declined by 56% since 2000, while conservation efforts have increased by 183%.</p>
          </div>
        </motion.div>
      )}

      <div className={css.chartRow}>
        {showCharts.species && (
          <motion.div 
            className={css.halfChart}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={css.chartTitle}>Coral Species Population</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={coralSpeciesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="species" stroke="#f8fafc" />
                <YAxis stroke="#f8fafc" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                />
                <Legend />
                <Bar 
                  dataKey="population" 
                  name="Population (thousands)" 
                  fill="#facc15" 
                  animationDuration={1500}
                  className={css.barHoverEffect}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {showCharts.bleaching && (
          <motion.div 
            className={css.halfChart}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={css.chartTitle}>Coral Bleaching by Region</h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={bleachingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  animationDuration={1000}
                  animationBegin={200}
                  nameKey="region"
                >
                  {bleachingData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={pieColors[index % pieColors.length]} 
                      stroke="#0f172a" 
                      strokeWidth={index === activeIndex ? 4 : 1}
                      className={css.pieCellHover}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Bleaching Rate']}
                  contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                />
                <Legend 
                  formatter={(value) => <span style={{ color: '#f8fafc' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>

      <motion.div 
        className={css.dataInsightsPanel}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className={css.insightsTitle}>Interactive Analytics</h3>
        <div className={css.insightsContent}>
          <div className={css.insightCard}>
            <div className={css.insightValue}>-56%</div>
            <div className={css.insightLabel}>Coral Health Decline Since 2000</div>
          </div>
          <div className={css.insightCard}>
            <div className={css.insightValue}>40%</div>
            <div className={css.insightLabel}>Pacific Region Bleaching Rate</div>
          </div>
          <div className={css.insightCard}>
            <div className={css.insightValue}>1,200</div>
            <div className={css.insightLabel}>Acropora Population (thousands)</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoralChart;
