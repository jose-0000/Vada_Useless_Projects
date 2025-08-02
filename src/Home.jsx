import { useState, useMemo } from 'react'
import picnicTableBackground from './assets/picnic_table_1.jpg';
import mainPageBg from './assets/Main_Page.png';
import mainPageBg1 from './assets/Main_Page_v1.png';
import mainPageBg2 from './assets/Main_Page_v2.png';
import EatButton from './EatButton.jsx'
import StartGame from './StartGame.jsx'
import vadaImg from './assets/vada.png';
import vadaImg2 from './assets/og_vada.png';
import vadaBite1 from './assets/og_vada_bite1.png';
import vadaBite2 from './assets/og_vada_bite2.png';
import vadaBite3 from './assets/og_vada_bite3.png';
import vadaBite4 from './assets/og_vada_bite4.png';
import plateImg from './assets/plate_2.png';
import Score from './Score.jsx';
import Timer from './Timer.jsx';
import Result from './Result.jsx';

import crunchSound from './assets/medu-vada-street-style-shorts_eqVtJV46.mp3'; // <-- ADDED: Import the sound file

function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [bites, setBites] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // Show a new vada every 5 bites
  const bitesOnCurrentVada = bites % 5;
  const vadaStages = [vadaImg2, vadaBite1, vadaBite2, vadaBite3, vadaBite4];
  const [vadaVisible, setVadaVisible] = useState(true);
  const [vadaRotation, setVadaRotation] = useState(0); // rotation in degrees
  // Change this value to increase/decrease the boundary below the vada image and score
  const safeZoneHeight = 350; // px
  // Change this value to control the number of vadas in the background
  const vadaDensity = 50; // number of vadas
  const vadaSize = 30; // px, all vadas same size (smaller)
  const minDistance = 100; // px, minimum distance between vadas (increased for smaller size)
  const [buttonPos, setButtonPos] = useState({ top: '60%', left: '50%' });
  const vadasEaten = Math.floor(bites / 5);

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
        //   rotation: 90,
        });
      }
      attempts++;
    }
    return positions;
  }

  const vadaPositions = useMemo(() => generateVadaPositions(vadaDensity, minDistance, vadaSize), [vadaDensity, minDistance, vadaSize]);

  // ADDED: Function to play the sound
  const playCrunchSound = () => {
    const audio = new Audio(crunchSound);
    audio.play();
  };

  const handleEatVada = () => {
    playCrunchSound(); // <-- ADDED: Call the sound function on each click
    // If last bite on current vada, hide vada and show next after delay
    if (bitesOnCurrentVada === 4) {
      setVadaVisible(false);
      setTimeout(() => {
        setBites(bites + 1);
        setVadaVisible(true);
        // Set a new random rotation for the next vada
        setVadaRotation(Math.floor(Math.random() * 360));
      }, 300); // 300ms delay before next vada
    } else {
      setBites(bites + 1);
    }
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
      {/* Overlay for start screen */}
      {!gameStarted && (
        <StartGame onStart={() => setGameStarted(true)} />
      )}
      {/* Game content */}
      {gameStarted && !gameOver && (
        <>
          {/* Timer should always be rendered and never remounted or paused by vada logic */}
          <Timer initialSeconds={15} onEnd={() => setGameOver(true)} />
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
                transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                animation: `${pos.animation} 3s ease-in-out infinite`,
                animationDelay: `${(idx % 8) * 0.3}s`,
              }}
            />
          ))}
          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={plateImg}
                  alt="Plate"
                  draggable={false}
                  style={{
                    width: '500px', // control plate size here
                    height: 'auto',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 1,
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                {/* Main vada image, changes to bite images as bites increase, resets every 5 bites, with delay before next vada. Rotates for each vada. */}
                {vadaVisible && bitesOnCurrentVada < 5 && (
                  <img
                    src={vadaStages[bitesOnCurrentVada]}
                    alt={`Vada bite ${bitesOnCurrentVada}`}
                    draggable={false}
                    style={{
                      width: '300px',
                      height: 'auto',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      pointerEvents: 'none',
                      display: 'block',
                      objectFit: 'cover',
                      transform: `rotate(${vadaRotation}deg)`,
                    }}
                  />
                )}
              </div>
            </div>
            <Score bites={vadasEaten} />
          </div>
          <EatButton onClick={handleEatVada} position={buttonPos} />
        </>
      )}

      {/* Show result overlay when game is over */}
      {gameOver && <Result score={vadasEaten} />}
    </div>
  );
}

export default Home