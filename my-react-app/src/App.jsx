import { useState } from "react";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("love");
  const [loveLevel, setLoveLevel] = useState(1);
  const [naughtyLevel, setNaughtyLevel] = useState(1);

  // 🌸 50 Custom Comparative Levels of Love Messages (If Aniket is X, you are Y)
  const loveMessages = [
    "If Aniket is the Lion, you are his magnificent Lioness. 🦁👑",
    "If Aniket is kind, you are the sweetest soul that makes him kinder. ✨",
    "If Aniket is the Sun, you are the Sunshine that brightens his world. ☀️",
    "If Aniket is the King, you are the Queen ruling his heart. 👑",
    "If Aniket is the Moon, you are the Moonlight guiding his night. 🌙",
    "If Aniket is the Heart, you are the rhythmic Heartbeat keeping him alive. ❤️",
    "If Aniket is the Sky, you are the Stars that make him beautiful. ✨🌌",
    "If Aniket is the Ocean, you are the beautiful Wave that steals his shore. 🌊",
    "If Aniket is the Breath, you are the Life that gives it meaning. 🌬️",
    "If Aniket is the Soul, you are the pure Spirit within him. 🌸",
    "If Aniket is the Speaker, you are the sweetest Poetry he reads. 📜",
    "If Aniket is the Fire, you are the cozy Warmth on a winter night. 🔥",
    "If Aniket is the Shadow, you are the Light that paths his way. 💡",
    "If Aniket is the Melody, you are the Symphony that plays in his mind. 🎵",
    "If Aniket is the Anchor, you are the Safe Harbor he runs to. ⚓",
    "If Aniket is the Seeker, you are his ultimate Destiny. 🎯",
    "If Aniket is the Tree, you are the beautiful Blossom on his branch. 🌳🌸",
    "If Aniket is the Cloud, you are the soothing Rain that heals him. 🌧️",
    "If Aniket is the Magic, you are the beautiful Miracle. 🪄",
    "If Aniket is the Diamond, you are the Brilliance that makes him shine. 💎",
    "If Aniket is the Spring, you are the colorful Petals that fall around him. 🌷",
    "If Aniket is the Night, you are the peaceful Dream he chases. 💤",
    "If Aniket is the Traveler, you are his breathtaking Home. 🏡",
    "If Aniket is the Thought, you are his deepest Inspiration. 💭",
    "If Aniket is the Hope, you are his unshakeable Faith. 🙏",
    "If Aniket is the River, you are the endless Stream flowing into him. 🌊",
    "If Aniket is the Treasure, you are the priceless Gem within it. 🪙",
    "If Aniket is the Smile, you are the pure Ecstasy behind it. 😊",
    "If Aniket is the Garden, you are the sweetest Fragrance inside it. 🌹",
    "If Aniket is the Book, you are the most beautiful Chapter. 📖",
    "If Aniket is the Guide, you are the Journey worth taking. 🗺️",
    "If Aniket is the Compass, you are his true North. 🧭",
    "If Aniket is the Music, you are the rhythm that captures his soul. 🎶",
    "If Aniket is the World, you are his entire Universe. 🌍🚀",
    "If Aniket is the Shield, you are the absolute Peace behind it. 🛡️",
    "If Aniket is the Painter, you are the Masterpiece on his canvas. 🎨",
    "If Aniket is the Spark, you are the eternal Flame that cannot be put out. 🔥",
    "If Aniket is the Morning, you are the fresh Dew that makes it perfect. 🌅",
    "If Aniket is the Horizon, you are the beautiful Blend of colors. 🌄",
    "If Aniket is the Healer, you are the Ultimate Relief. 🩹❤️",
    "If Aniket is the Root, you are the Fruit that sweetens his life. 🍎",
    "If Aniket is the Rhapsody, you are the harmony that sings along. 🎻",
    "If Aniket is the Desert, you are his refreshing Oasis. 🏜️💧",
    "If Aniket is the Whisper, you are the secret of love he keeps. 🤫",
    "If Aniket is the Key, you are the Lock holding his deepest secrets. 🔑",
    "If Aniket is the Emperor, you are his graceful Empress. 👑✨",
    "If Aniket is the Beginning, you are his beautiful, endless Eternity. ♾️",
    "If Aniket is the Flame, you are the Passion that drives it. ❤️‍🔥",
    "If Aniket is Love, you are the absolute Definition of it. 💕",
    "If Aniket is Everything, you are infinitely More Than Everything to him. 🌌💖"
  ];

  // 🔥 50 Levels of Kiss Roadmap Locations for Heart's Love (Naughty Mode)
const kissBodyParts = [
  // Soft start
  "A soft, lingering kiss on the back of your hands",
  "A gentle suck on each of your fingertips",
  "A warm, open-mouthed kiss against your inner wrists",
  "A slow trail of wet kisses up your forearms",
  "A soft bite and kiss right in the bend of your elbows",
  "A possessive kiss on your shoulders",
  "A deep, hungry kiss along your collarbones",
  "A slow, open-mouthed suck on the side of your neck",
  "A tracing bite along your jawline",
  "A firm kiss on your chin",
  "A deep, wet kiss on your lips",
  "A hard suck and bite on your upper lip",
  "A long, hungry pull on your lower lip",
  "A rough nuzzle against your cheeks",
  "A quick bite on the tip of your nose",
  "A firm kiss on your forehead",
  "A warm breath and soft kiss over your closed eyelids",
  "A slow lick along your eyebrows",
  "A deep, wet kiss right behind your ears",
  "A tight grip in your hair while kissing your scalp",

  // Building heat
  "A hard suck on the nape of your neck",
  "A long, wet trail of kisses down your bare back",
  "An open-mouthed kiss between your shoulder blades",
  "A deep grip and hard kiss on your lower back",
  "A tight, possessive hold around your waist while kissing",
  "A slow, wet trail across your stomach",
  "A teasing bite along the sides of your waist",
  "A firm press of lips against your lower ribs",
  "A sensitive, open-mouthed kiss under your arms",
  "A heavy, open-mouthed kiss right over your heart",

  // Explicit & adult
  "A full, hungry mouth on your breasts, sucking hard",
  "A slow, wet circle of tongue around your areolae",
  "A deep, rhythmic suck on your stiff nipples",
  "A long, wet trail of tongue down your cleavage",
  "A hard grip and bite on your hips",
  "A slow, open-mouthed drag of lips up your outer thighs",
  "A deep, wet kiss high on your inner thighs",
  "A firm kiss right on your knees",
  "A long lick down the back of your calves",
  "A tight hold and kiss around your ankles",
  "A soft but deliberate kiss on the top of your feet",
  "A warm suck on each of your toes",
  "A slow, wet kiss across the soles of your feet",

  // Fully explicit climax
  "A deep, open-mouthed kiss into your palms",
  "A hard suck on your pulse points",
  "A long, wet trail along your waistline and lower belly",
  "A sharp bite on the edges of your shoulder blades",
  "A deep, open-mouthed kiss across your lower belly, right above your pussy",
  "A slow, deliberate kiss on the soft mound of your pussy",
  "A long, wet lick along the outer lips of your vagina",
  "A deep, open-mouthed kiss right on your clit",
  "A slow, hungry tongue pushing between your folds",
  "A full, wet mouth covering your entire pussy, sucking and licking",
  "A completely surrendered, tight intimate embrace while devouring you",
  "The ultimate raw, sweaty unification of Aniket & Rakhi’s bodies"
];

  // 🎬 Progressive Image URLs matching the mood changes (Levels 1-15, 16-34, 35-49)
  const getNaughtyVisual = (level) => {
    if (level < 15) {
      return "https://i.pinimg.com/564x/44/1a/02/441a02b1ff9db88b1cc33d8383e20794.jpg"; 
    } else if (level < 35) {
      return "https://i.pinimg.com/564x/d5/43/6c/d5436c7a72d3fca5f0dfbb936a2cd8b6.jpg";
    } else {
      return "https://i.pinimg.com/564x/0f/c6/33/0fc633b478d10b0373df8903c7ea1b04.jpg";
    }
  };

  const getFlowersArray = () => {
    const flowerCount = mode === "love" ? 15 : 40;
    const flowerEmojis = mode === "love" ? ["🌸", "🌹", "🌷", "🌻"] : ["🌹", "🔥", "💋", "🥀"];
    return Array.from({ length: flowerCount }).map((_, i) => ({
      id: i,
      emoji: flowerEmojis[i % flowerEmojis.length],
      left: `${(i * 7) % 95}%`,
      top: `${(i * 13) % 90}%`,
      delay: `${(i * 0.2).toFixed(1)}s`
    }));
  };

  const handleLevelIncrease = () => {
    if (mode === "love") {
      setLoveLevel((prev) => (prev < 50 ? prev + 1 : 1));
    } else {
      setNaughtyLevel((prev) => (prev < 50 ? prev + 1 : 1));
    }
  };

  return (
    <div className={`chamber-wrapper mood-${mode}`}>
      {/* Background Floral Overlay Layer */}
      <div className="flower-bed-overlay">
        {getFlowersArray().map((flower) => (
          <span
            key={flower.id}
            className="floating-flower-petal"
            style={{ left: flower.left, top: flower.top, animationDelay: flower.delay }}
          >
            {flower.emoji}
          </span>
        ))}
      </div>

      {/* Main Switching Header Block */}
      <header className="premium-control-bar">
        <button
          type="button"
          className={`toggle-pillar-btn ${mode === "love" ? "active-pillar" : ""}`}
          onClick={() => setMode("love")}
        >
          🌸 Sweet Love Mode
        </button>
        <button
          type="button"
          className={`toggle-pillar-btn ${mode === "heart" ? "active-pillar" : ""}`}
          onClick={() => setMode("heart")}
        >
          🔥 Heart's Love
        </button>
      </header>

      {/* Primary Display Center */}
      <main className="chamber-core-card">
        <h1 className="main-title">Aniket & Rakhi</h1>
        
        {mode === "love" ? (
          <div className="suite-content anim-fade-in">
            <div className="status-badge-container">
              <span className="level-badge">ROMANCE LAYER: {loveLevel} / 50</span>
            </div>
            <div className="message-display-box">
              <p className="romantic-quote-text">{loveMessages[loveLevel - 1]}</p>
            </div>
            <button type="button" className="action-trigger-btn" onClick={handleLevelIncrease}>
              Grow Sweeter 🌸
            </button>
          </div>
        ) : (
          <div className="suite-content anim-fade-in">
            {naughtyLevel === 50 ? (
              <div className="cuddle-finale-zone anim-pop-in">
                <span className="level-badge cuddle-badge">🌌 FOREVER UNITED: 50 / 50 🌌</span>
                <h2 className="cuddle-headline">Falling Asleep Safely In Aniket's Arms... 💤❤️‍🔥</h2>
                
                <div className="cuddle-image-wrapper">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFDFLNazOqcsshDNk0wPfK5UlBeBqhPJeCmWHXAw1wRpt8suM31e0fFU&s=10" 
                    alt="Aniket and Rakhi Cuddling" 
                    className="cuddle-gif-asset"
                  />
                </div>
                
                <p className="cuddle-description">
                  The ultimate peak of intimacy has been reached. Tired from all the passionate kisses, 
                  Rakhi rests her head directly on Aniket's chest, listening to his steady heartbeat 
                  as his strong arms wrap around her waist protecting her all through the night. 🥰✨
                </p>
                
                <button type="button" className="action-trigger-btn reset-night-btn" onClick={() => setNaughtyLevel(1)}>
                  Relive the Night 🔄
                </button>
              </div>
            ) : (
              <div>
                <div className="status-badge-container">
                  <span className="level-badge naughty-badge">INTIMACY LAYER: {naughtyLevel} / 50</span>
                </div>

                {/* Inline Kissing Artwork Showcase */}
                <div className="kiss-scene-art-holder anim-fade-in">

                </div>

                <div className="message-display-box naughty-box">
                  <span className="kiss-destination-tag">DESTINATION OF DESIRE:</span>
                  <h2 className="kiss-spot-headline">{kissBodyParts[naughtyLevel - 1]}</h2>
                  <p className="naughty-subtext">Aniket guides his lips precisely here, lighting up the entire room...</p>
                </div>
                
                <div className="action-button-row">
                  <button type="button" className="action-trigger-btn naughty-trigger" onClick={handleLevelIncrease}>
                    Kiss Deeper 🔥
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Level Status Progress Track Wrapper */}
        <div className="chamber-progress-wrapper">
          <span className="progress-text-label">
            {mode === "love" ? `Romance Meter: ${loveLevel * 2}%` : `Passion Temperature: ${naughtyLevel * 2}%`}
          </span>
          <div className="progress-track-bar">
            <div
              className={`progress-fill-bar ${mode === "heart" ? "fill-crimson-blaze" : "fill-gold-bloom"}`}
              style={{ width: `${(mode === "love" ? loveLevel : naughtyLevel) * 2}%` }}
            ></div>
          </div>
          
          {mode === "heart" && naughtyLevel !== 50 && (
            <button type="button" className="cheat-test-btn" onClick={() => setNaughtyLevel(50)}>
              ⚡ Instant Test 50/50 Cuddle Screen
            </button>
          )}
        </div>
      </main>

      <footer className="chamber-footer">
        <p>Built for Rakhi Rajbongshi & Aniket | 50 Levels of Pure Unification ✨</p>
      </footer>
    </div>
  );
}
