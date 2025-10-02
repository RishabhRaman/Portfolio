import { useEffect, useState } from 'react';
import { profile } from '../content';
// Use public folder for profile image
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';


export function Hero() {
  const animatedText = "Hi, I'm Rishabh Raman Jha — Learning to Grow.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < animatedText.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
  }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, animatedText]);

  return (
  <Section id="home" className="hero">
  <span className="pill">{profile.availability}</span>
      <img
        src="/my photo.jpg"
        alt="Profile"
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', display: 'block', margin: '0.1rem auto 0.5rem auto' }}
      />
      <h1 style={{ minHeight: '2.5em' }}>{animatedText.slice(0, index)}</h1>
      <p>{profile.intro}</p>
      <div className="hero-cta">
        <Button href="#projects" variant="primary">View Projects</Button>
        <Button href="#contact">Contact Me</Button>
      </div>
    </Section>
  );
}


export default Hero


