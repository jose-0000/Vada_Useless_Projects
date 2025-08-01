import React from 'react';
function Score({ bites }) {
  return (
    <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem' }}>
      Score: {bites}
    </div>
  );
}
export default Score