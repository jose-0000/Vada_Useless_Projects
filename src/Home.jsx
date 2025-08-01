import { useState, useMemo } from 'react'
import mainPageBg from './assets/Main_Page.png';
import mainPageBg1 from './assets/Main_Page_v1.png';
import mainPageBg2 from './assets/Main_Page_v2.png';
import EatButton from './EatButton.jsx'
import vadaImg from './assets/vada.png';
import Score from './Score.jsx';
import Timer from './Timer.jsx';

function Home() {
  const [bites, setBites] = useState(0);
  // Change this value to increase/decrease the boundary below the vada image and score
  const safeZoneHeight = 350; // px
  // Change this value to control the number of vadas in the background
  const vadaDensity = 50; // number of vadas
  const vadaSize = 30; // px, all vadas same size (smaller)
  const minDistance = 100; // px, minimum distance between vadas (increased for smaller size)
  const [buttonPos, setButtonPos] = useState({ top: '60%', left: '50%' });

  // Generate random positions for vadas with minimum spacing
  function generateVadaPositions(count, minDist, size) {
    const positions = [];
    let attempts = 0;
    const animations = ['vadaFloatY', 'vadaFloatX', 'vadaFloatCircle'];
    while (positions.length < count && attempts < count * 20) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      // Check minimum distance
      let tooClose = false;
      for (const pos of positions) {
        const dx = (left - pos.left) * window.innerWidth / 100;
        const dy = (top - pos.top) * window.innerHeight / 100;
        if (Math.sqrt(dx * dx + dy * dy) < minDist) {
          tooClose = true;
          break;
        }
      }
      if (!tooClose) {
        positions.push({
          top: `${top}%`,
          left: `${left}%`,
          animation: animations[Math.floor(Math.random() * animations.length)],
        });
      }
      attempts++;
    }
    return positions;
  }

  const vadaPositions = useMemo(() => generateVadaPositions(vadaDensity, minDistance, vadaSize), [vadaDensity, minDistance, vadaSize]);

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
        backgroundImage: `url(${mainPageBg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Timer initialSeconds={30} onEnd={() => alert('Time is up!')} />
      {/* Floating vadas in the background, randomly scattered with spacing */}
      {vadaPositions.map((pos, idx) => (
        <img
          key={idx}
          src={vadaImg}
          alt="Vada bg"
          draggable={false}
          style={{
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            width: `${vadaSize}px`,
            height: `${vadaSize}px`,
            opacity: 0.3,
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
            transform: 'translate(-50%, -50%)',
            animation: `${pos.animation} 3s ease-in-out infinite`,
            animationDelay: `${(idx % 8) * 0.3}s`,
          }}
        />
      ))}
      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', zIndex: 1 }}>
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

