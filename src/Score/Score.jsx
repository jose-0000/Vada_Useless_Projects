import React, { useState } from 'react';
function Score(){
            const [bites, setBites] = useState(0);

            const handleEatVada = () => setBites(bites + 1);

            return (
                 <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem' }}>
                    Score: {bites}
                 </div>
    
    );
}
export default Score