import React from 'react';

function StartGame({ onStart }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <button
        style={{
          padding: '1rem 2.5rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#fff',
          background: '#222',
          border: '2px solid #fff',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
        }}
        onClick={onStart}
      >
        Start Game
      </button>
    </div>
  );
}

export default StartGame;
