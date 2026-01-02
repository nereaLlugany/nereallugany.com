import { useEffect, useRef } from 'react';

const PortraitFrame = ({ imageSrc }) => {
  const tiltRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    // 1. Reveal Animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 2. Tilt Animation
    const el = tiltRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rect = null;
    let px = 0, py = 0, tx = 0, ty = 0;
    let rafId = null;

    const updateTransform = () => {
      tx += (px - tx) * 0.12;
      ty += (py - ty) * 0.12;
      // Apply rotation to the frame itself or the container
      el.style.transform = `perspective(1100px) rotateX(${-ty * 7}deg) rotateY(${tx * 9}deg)`;
      rafId = requestAnimationFrame(updateTransform);
    };

    const handleMouseMove = (ev) => {
      if (!rect) rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const dx = (ev.clientX - cx) / (rect.width / 2);
      const dy = (ev.clientY - cy) / (rect.height / 2);
      
      // Limit values
      px = Math.max(-1, Math.min(1, dx));
      py = Math.max(-1, Math.min(1, dy));

      // Move Ornaments Parallax
      const o1 = el.querySelector('.o1');
      const o2 = el.querySelector('.o2');
      const o3 = el.querySelector('.o3');

      if (o1) o1.style.transform = `translate(${-px * 10}px, ${-py * 10}px)`;
      if (o2) o2.style.transform = `translate(${px * 10}px, ${py * 10}px)`;
      if (o3) o3.style.transform = `translate(${-px * 6}px, ${py * 6}px)`;

      if (!rafId) updateTransform();
    };

    const handleMouseLeave = () => {
      px = 0;
      py = 0;
      el.querySelectorAll('.photo-ornament').forEach(o => o.style.transform = 'none');
      setTimeout(() => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        // Reset transform
        el.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
      }, 250);
      rect = null; // Reset rect to force recalc on re-entry
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={(el) => { tiltRef.current = el; revealRef.current = el; }}
      className="hero-right enhanced-portrait js-reveal-zoom"
      aria-label="Portrait of Nerea Llugany"
    >
      {/* Background Video/Image (Blurred) */}
      <div className="hero-media bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}></div>

      {/* The Main Frame */}
      <div className="photo-frame" tabIndex="0">
        <div className="frame-mat">
          <img className="frame-img" src={imageSrc} alt="Portrait of Nerea Llugany Montoya" />
          <div className="sheen" aria-hidden="true"></div>
          <div className="grain" aria-hidden="true"></div>
        </div>

        <div className="frame-accent" aria-hidden="true"></div>
        <div className="rim-glow" aria-hidden="true"></div>
      </div>

      {/* Floating Ornaments */}
      <div className="photo-ornament o1" aria-hidden="true"></div>
      <div className="photo-ornament o2" aria-hidden="true"></div>
      <div className="photo-ornament o3" aria-hidden="true"></div>
    </div>
  );
};

export default PortraitFrame;