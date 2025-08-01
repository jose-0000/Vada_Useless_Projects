import { useState } from 'react'
import mainPageBg from './assets/Main_Page.png';
import EatButton from './EatButton.jsx'
import vadaImg from './assets/vada.png';
import Score from './Score.jsx';

function Home() {
  const [bites, setBites] = useState(0);
  // Change this value to increase/decrease the boundary below the vada image and score
  const safeZoneHeight = 350; // px
  const [buttonPos, setButtonPos] = useState({ top: '60%', left: '50%' });

  const handleEatVada = () => {
    setBites(bites + 1);
    if (Math.random() < 0.5) {
      // Get viewport height and width
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      // Calculate available area below safe zone
      const minTopPx = safeZoneHeight;
      const maxTopPx = viewportHeight - 80; // 80px buffer from bottom
      const minLeftPx = 0;
      const maxLeftPx = viewportWidth - 160; // 160px buffer for button width
      // Generate random position within the allowed area
      const topPx = minTopPx + Math.random() * (maxTopPx - minTopPx);
      const leftPx = minLeftPx + Math.random() * (maxLeftPx - minLeftPx);
      setButtonPos({ top: `${topPx}px`, left: `${leftPx}px` });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${mainPageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <img
          src={vadaImg}
          alt="Vada"
          draggable={false}
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            marginBottom: '24px',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'none',
          }}
        />
        <Score bites={bites} />
      </div>
      <EatButton onClick={handleEatVada} position={buttonPos} />
    </div>
  );
}

export default Home
