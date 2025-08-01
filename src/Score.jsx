import React from 'react';
function Score({ bites }) {
  return (
    <div className="fixed top-4 right-4 text-2xl font-bold bg-yellow-50 rounded-xl px-6 py-3 shadow text-center min-w-[120px]">
      Vada's eaten: {bites}
    </div>
  );
}
export default Score