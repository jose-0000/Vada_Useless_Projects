import { useState } from 'react'
import mainPageBg from './assets/Main_Page.png';
import EatButton from './EatButton.jsx'
import vadaImg from './assets/vada.png';
import Score from './Score.jsx';

function Home() {
  const [bites, setBites] = useState(0);
  const handleEatVada = () => setBites(bites + 1);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${mainPageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={vadaImg} alt="Vada" style={{ maxWidth: '300px', width: '100%', height: 'auto', marginBottom: '24px' }} />
      <Score bites={bites} />
      <EatButton onClick={handleEatVada} />
    </div>
  );
}

export default Home
