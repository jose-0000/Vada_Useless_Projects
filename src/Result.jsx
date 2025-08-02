import React from 'react';
import ashamedIkkaGif from './assets/ashamed_ikka.gif';
import angry_ikka from './assets/angry_ikka.jpeg';
import surprised_ikka from './assets/surprised_ikka.gif';
import intersted_ikka from './assets/interested_ikka.jpg';
import happy_ikka from './assets/happy_ikka.png';


function Result({ score }) {
 let message = '';
 let emoji = '';
 let title = '';
 let imageSrc = ''; 

  if (score >= 50) {
    title = "VADA LEGEND! 🌟";
    message = "Holy sambar! You devoured vadas like there's no tomorrow! You're officially a South Indian snack deity!";
    emoji = "🏆👑";
    imageSrc = "https://i.imgur.com/your-legend-gif.gif"; 
  } else if (score >= 30) {
    title = "VADA MASTER! 🔥";
    message = "Incredible! You ate vadas faster than a chai-wallah serves tea! Your stomach is a temple of deliciousness!";
    emoji = "🥇🎉";
    imageSrc = "https://i.imgur.com/your-master-gif.gif";
  } else if (score >= 20) {
    title = "VADA CHAMPION! ⭐";
    message = "Amazing! You're like the Usain Bolt of vada eating! Those crispy golden rings didn't stand a chance!";
    emoji = "🏅✨";
    imageSrc = "https://i.imgur.com/your-champion-gif.gif";
  } else if (score >= 6) {
    title = "FERFECT OKEY";
    message = "You’ve consumed enough calories to fuel a small village for a month. Hope you've made peace with your life insurance provider.";

    imageSrc = happy_ikka;
  } else if (score >= 4) {
    title = "YEVAN PULI AANALLA";
    message = "Who hurt you? Why are you eating like rent’s due?";
    imageSrc = intersted_ikka;
  } else if (score >= 3) {
    title = "CHANTHUVINE MAYBE THOLPIKKAN AAVUM IG";
    message = "Is this your warm-up round or… the actual attempt?";
    imageSrc = surprised_ikka;
  } else if (score >= 1) {
    title = "ENTE 5 VAYASOLLA COUSIN ITHILUM NANNAI THINNUM";
    message = "This isn’t a diet plan, it's a game. Try again.";
    imageSrc = angry_ikka;
  } else {
    title = "DID YOU EVEN PLAY? ";
    message = "PANI EDTH JEEVIKEDA";
    imageSrc = ashamedIkkaGif;
  }

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-[1001] flex items-center justify-center flex-col animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-[24px] p-6 shadow-2xl text-center max-w-lg w-[90%] border-[3px] border-yellow-400 relative animate-popIn">
        
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-72 object-contain mb-2 rounded-xl" // Changed object-cover to object-contain
          />
        )}
        
        <div className="text-4xl mb-2">{emoji}</div>
        <h2 className="text-3xl mb-2 text-pink-600 font-bold text-shadow-md">
          {title}
        </h2>
        <div className="text-5xl mb-4 text-green-700 font-bold text-shadow-md">
          {score}
        </div>
        <div className="text-base text-gray-700 leading-relaxed mb-6 italic">
          {message}
        </div>
        <button
          onClick={handlePlayAgain}
          className="py-3 px-6 text-lg font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700 border-none rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
          0% { 
            transform: scale(0.8);
            opacity: 0;
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        .text-shadow-md {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

export default Result;