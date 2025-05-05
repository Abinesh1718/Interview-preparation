import React from 'react';

const DashboardPage = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
      </header>

      {/* Body */}
      <main style={styles.body}>
        <div style={styles.card}>
          <h2>Welcome!</h2>
          <p>This is your dashboard content.</p>
        </div>
        <div style={styles.card}>
          <h3>Stats</h3>
          <p>More information here...</p>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    height: '100vh',
    margin: 0,
  },
  header: {
    backgroundColor: '#2f3542',
    padding: '1rem 2rem',
    color: 'white',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
  },
  body: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    flex: 1,
  },
};

export default DashboardPage;
