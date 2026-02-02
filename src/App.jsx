import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className="app">
      <div className={`container ${fadeIn ? 'fade-in' : ''}`}>
        <div className="header">
          <h1 className="title">Hey Jaggu! 🌻</h1>
          <div className="subtitle">For Yamini 🌻</div>
        </div>

        <div className="content">
          <div className="message-card intro-card">
            <p className="message">
              I wanted to create something special for you, because you deserve to know how much you mean to me. 
              Just like sunflowers always turn towards the sun, you brighten up everything around you! 🌻
            </p>
          </div>

          <div className="message-card">
            <h2 className="section-title">You Deserve All the Love in the World 💕</h2>
            <p className="message">
              Jaggu, I want you to know something important - you deserve SO MUCH LOVE. 
              You deserve to be cherished, appreciated, and loved deeply every single day. 
              You have this beautiful heart that needs to be filled with love, and I hope you find someone 
              who gives you all the love you need and more. You're worth it, every single bit of it. 💛
            </p>
          </div>

          <div className="message-card">
            <h2 className="section-title">You're Like a Sunflower 🌻</h2>
            <p className="message">
              You know what? You remind me of sunflowers - bright, beautiful, and always bringing warmth wherever you go. 
              Even though things have changed between us, I still care about you deeply. 
              You're an incredible person, and I'm grateful to have you as a friend.
            </p>
          </div>

          <div className="message-card">
            <h2 className="section-title">Angry but Cute 😤💕</h2>
            <p className="message">
              Okay, let's be real - you can get angry sometimes (we all know that! 😅), but you know what? 
              Even when you're angry, you're still the cutest! That's what makes you special, Jaggu. 
              Your fire and your sweetness - that's the perfect combination that makes you, well, YOU! 🌻
            </p>
          </div>

          <div className="message-card travel-intro">
            <div className="image-wrapper travel-intro-image">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" 
                alt="Travel adventure" 
                className="place-image"
              />
              <div className="image-overlay travel-overlay"></div>
            </div>
            <h2 className="section-title">Your Wanderlust Soul ✈️🌍</h2>
            <p className="message">
              I know how much you love traveling, Jaggu! Your adventurous spirit and your desire to explore 
              the world is one of the most beautiful things about you. You dream of faraway places, 
              new experiences, and magical moments. I hope you get to visit every single place on your bucket list! 
              The world is waiting for you, and you deserve to see it all! 🌎✨
            </p>
          </div>

          <div className="message-card place-card japan-card">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80" 
                alt="Japan cherry blossoms" 
                className="place-image"
              />
              <div className="image-overlay japan-overlay"></div>
            </div>
            <h2 className="section-title">Japan 🇯🇵</h2>
            <p className="message">
              Japan! The land of cherry blossoms, ancient temples, and incredible culture. 
              I can imagine you there - exploring the streets of Tokyo, visiting serene temples in Kyoto, 
              experiencing the beauty of Mount Fuji, and maybe even catching the cherry blossom season! 
              You'd love the mix of tradition and modernity, the amazing food, and the peaceful gardens. 
              I hope you get to experience Japan soon, Jaggu! It's going to be magical! 🗾🌸
            </p>
          </div>

          <div className="message-card place-card northern-lights-card">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80" 
                alt="Northern Lights aurora" 
                className="place-image"
              />
              <div className="image-overlay northern-lights-overlay"></div>
            </div>
            <h2 className="section-title">Northern Lights 🌌</h2>
            <p className="message">
              The Northern Lights - one of nature's most spectacular shows! I can picture you there, 
              wrapped up warm, looking up at the sky as those magical green, blue, and purple lights 
              dance across the darkness. It's like watching magic happen right before your eyes. 
              That moment when you see them for the first time - pure wonder and awe. 
              You deserve to witness that beauty, Jaggu. You deserve to see something that makes you 
              feel small in the best way, something that reminds you how beautiful this world is. 
              I hope you get to see them soon! 🌠💫
            </p>
          </div>

          <div className="message-card place-card china-card">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80" 
                alt="Great Wall of China" 
                className="place-image"
              />
              <div className="image-overlay china-overlay"></div>
            </div>
            <h2 className="section-title">China 🇨🇳</h2>
            <p className="message">
              China - with its rich history, stunning landscapes, and incredible diversity! 
              From the Great Wall to the bustling cities, from the ancient traditions to modern innovations. 
              I can see you exploring the Forbidden City, walking along the Great Wall, 
              experiencing the vibrant culture, and tasting all the amazing food! 
              China has so much to offer, and I know you'd fall in love with every part of it. 
              Your curiosity and love for culture would make this journey unforgettable! 🏮🐉
            </p>
          </div>

          <div className="message-card love-card">
            <h2 className="section-title">You Need Love, and You Deserve It 💖</h2>
            <p className="message">
              Jaggu, I know you need so much love in your life. You have this beautiful, caring heart 
              that deserves to be filled with love, kindness, and warmth. You deserve someone who sees 
              how amazing you are - your strength, your cuteness (even when you're angry! 😊), 
              your dreams of traveling the world, your love for sunflowers, and everything that makes you YOU. 
              You deserve someone who will love you deeply, support your dreams, and be there for you always. 
              Don't ever settle for less than you deserve. You're special, and you deserve all the love 
              this world has to offer! 💕✨
            </p>
          </div>

          <div className="message-card">
            <h2 className="section-title">Thank You 🙏</h2>
            <p className="message">
              Thank you for being in my life, for the memories we've shared, and for the friendship we have now. 
              You'll always have a special place in my heart, just like sunflowers have a special place in yours! 🌻
            </p>
          </div>

          <div className="message-card">
            <h2 className="section-title">Wishing You the Best 🌟</h2>
            <p className="message">
              I hope all your dreams come true - especially your travel dreams! I hope you get to see Japan, 
              witness the Northern Lights, explore China, and visit every place that calls to your heart. 
              I hope you find all the love you need and deserve. May your life be filled with beautiful sunflowers, 
              endless adventures, and most importantly - endless love! 
              You're going to do amazing things, Jaggu! The world is yours! 🌻✨💛
            </p>
          </div>
        </div>

        <div className="footer">
          <p className="signature">With love and friendship,</p>
          <p className="signature-name">Always 🌻</p>
        </div>

        <div className="sunflowers">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="sunflower">🌻</span>
          ))}
        </div>
        <div className="hearts">
          {[...Array(25)].map((_, i) => (
            <span key={i} className="heart">💛</span>
          ))}
        </div>
        <div className="travel-icons">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="travel-icon">✈️</span>
          ))}
        </div>
        <div className="stars">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="star">⭐</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
