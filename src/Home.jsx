import { useState } from 'react'
import mainPageBg from './assets/Main_Page.png';
import EatButton from './EatButton.jsx'
import vadaImg from './assets/vada.png';

function Home() {
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
      <EatButton />
    </div>
  );
}

export default Home
