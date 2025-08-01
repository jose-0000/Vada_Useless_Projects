function Result({ score }) {
  let message = '';
  let emoji = '';
  let title = '';
  
  if (score >= 50) {
    title = "VADA LEGEND! 🌟";
    message = "Holy sambar! You devoured vadas like there's no tomorrow! You're officially a South Indian snack deity!";
    emoji = "🏆👑";
  } else if (score >= 30) {
    title = "VADA MASTER! 🔥";
    message = "Incredible! You ate vadas faster than a chai-wallah serves tea! Your stomach is a temple of deliciousness!";
    emoji = "🥇🎉";
  } else if (score >= 20) {
    title = "VADA CHAMPION! ⭐";
    message = "Amazing! You're like the Usain Bolt of vada eating! Those crispy golden rings didn't stand a chance!";
    emoji = "🏅✨";
  } else if (score >= 15) {
    title = "VADA ENTHUSIAST! 🎯";
    message = "Fantastic! You showed those vadas who's boss! Your taste buds are doing a happy dance right now!";
    emoji = "🎊😋";
  } else if (score >= 10) {
    title = "DECENT MUNCHER! 👍";
    message = "Not bad at all! You managed to satisfy your vada cravings quite nicely. Room for improvement though!";
    emoji = "😊🍽️";
  } else if (score >= 5) {
    title = "ROOKIE NIBBLER 🐣";
    message = "Hey, everyone starts somewhere! Those vadas were just warming up for you. Try again!";
    emoji = "😅🤏";
  } else if (score >= 1) {
    title = "VADA BEGINNER 😬";
    message = "Oops! Looks like you were too busy admiring the vadas instead of eating them! They're meant to be eaten, not photographed!";
    emoji = "😂📸";
  } else {
    title = "DID YOU EVEN PLAY? 🤔";
    message = "Zero vadas eaten? Did you get distracted by the beautiful floating vadas in the background? The 'Eat Vada' button was right there!";
    emoji = "😭🤷‍♂️";
  }

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        animation: 'fadeIn 0.5s ease-out',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
          borderRadius: '24px',
          padding: '3rem 3.5rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '90%',
          border: '3px solid #ffd700',
          position: 'relative',
          transform: 'scale(0.9)',
          animation: 'popIn 0.6s ease-out 0.2s forwards',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{emoji}</div>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem', 
          color: '#d63384',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          {title}
        </h2>
        <div style={{ 
          fontSize: '4rem', 
          marginBottom: '1.5rem', 
          color: '#198754',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          {score}
        </div>
        <div style={{ 
          fontSize: '1.3rem', 
          color: '#495057',
          lineHeight: '1.5',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          {message}
        </div>
        <button
          onClick={handlePlayAgain}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(145deg, #fd7e14, #e85d04)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(253,126,20,0.4)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(253,126,20,0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 6px 20px rgba(253,126,20,0.4)';
          }}
        >
          🔄 Play Again!
        </button>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popIn {
          from { 
            transform: scale(0.8);
            opacity: 0;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Result;