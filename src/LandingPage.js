// src/LandingPage.js
import { useState } from 'react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌍 TerraVision Test</h1>
      
      <div style={styles.tabs}>
        <button 
          style={activeTab === 'home' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          style={activeTab === 'about' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === 'home' && (
          <div>
            <p>Welcome to TerraVision!</p>
            <button 
              style={styles.button}
              onClick={() => alert('It works!')}
            >
              Test Button
            </button>
          </div>
        )}
        
        {activeTab === 'about' && (
          <div>
            <h3>About This Test</h3>
            <p>Simple React verification interface</p>
            <ul style={styles.list}>
              <li>✅ Node.js installed</li>
              <li>✅ React working</li>
              <li>✅ Localhost running</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heading: {
    color: '#2c3e50',
    textAlign: 'center'
  },
  tabs: {
    display: 'flex',
    gap: '10px',
    margin: '20px 0',
    justifyContent: 'center'
  },
  tab: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#ecf0f1'
  },
  activeTab: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white'
  },
  content: {
    border: '1px solid #bdc3c7',
    borderRadius: '5px',
    padding: '20px',
    minHeight: '200px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0'
  }
};