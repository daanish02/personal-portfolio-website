'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import aboutData from '@/data/about.json';
import contactData from '@/data/contact.json';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationId: number;
        let w = 0;
        let h = 0;
        const dpr = window.devicePixelRatio || 1;

        // Animation variables
        const connectionDistance = 150;
        // Base density: particles per 10000 pixels roughly
        const densityFactor = 0.00015;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            isRed: boolean;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                // Thicker nodes as requested: 3px to 5px
                this.radius = Math.random() * 2 + 3;
                this.isRed = Math.random() < 0.1;
            }

            update(width: number, height: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Keep strictly within bounds to avoid getting stuck
                if (this.x < 0) this.x = 0;
                if (this.x > width) this.x = width;
                if (this.y < 0) this.y = 0;
                if (this.y > height) this.y = height;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.isRed ? 'rgba(220, 38, 38, 0.9)' : 'rgba(0, 0, 0, 0.7)';
                ctx.fill();
            }
        }

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;

            // Set actual size in memory (scaled to account for extra pixel density)
            canvas.width = w * dpr;
            canvas.height = h * dpr;

            // Normalize coordinate system to use css pixels
            ctx.scale(dpr, dpr);

            // Re-initialize particles based on new size
            // Large screens -> more nodes, Small screens -> fewer nodes
            const area = w * h;
            // Cap max particles for performance, ensure minimum for look
            const targetCount = Math.max(60, Math.min(300, Math.floor(area * densityFactor)));

            particles = [];
            for (let i = 0; i < targetCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);

        // Check reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            // Draw once and return
            drawStaticPattern(ctx, w, h);
            return () => window.removeEventListener('resize', handleResize);
        }

        const animate = () => {
            // Clear canvas
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, w, h);

            // Update & Draw
            particles.forEach(p => {
                p.update(w, h);
                p.draw(ctx);
            });

            // Draw connections
            ctx.lineWidth = 1.5; // Thicker lines as requested

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        // Make lines sharper/clearer
                        if (opacity > 0) {
                            const pA = particles[i];
                            const pB = particles[j];

                            const isRedConnection = pA.isRed || pB.isRed;

                            ctx.strokeStyle = isRedConnection
                                ? `rgba(220, 38, 38, ${opacity * 0.6})`
                                : `rgba(0, 0, 0, ${opacity * 0.8})`; // Higher base opacity for sharpness

                            ctx.beginPath();
                            ctx.moveTo(pA.x, pA.y);
                            ctx.lineTo(pB.x, pB.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvas} style={{ width: '100%', height: '100%' }} />

            <div className={styles.contentBox}>
                <h1 className={styles.name}>
                    {aboutData.name}
                    {aboutData.tagline && <span className={styles.tagline}>{aboutData.tagline}</span>}
                </h1>
                <div className={styles.about}>
                    {aboutData.intro.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Icon row */}
                <div className={styles.iconRow}>
                    <a href={contactData.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                    <a href={contactData.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href={`mailto:${contactData.email}`} aria-label="Email">
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33333 5.83333C3.33333 5.3913 3.50893 4.96738 3.82149 4.65482C4.13405 4.34226 4.55797 4.16667 5 4.16667H15C15.442 4.16667 15.866 4.34226 16.1785 4.65482C16.4911 4.96738 16.6667 5.3913 16.6667 5.83333V14.1667C16.6667 14.6087 16.4911 15.0326 16.1785 15.3452C15.866 15.6577 15.442 15.8333 15 15.8333H5C4.55797 15.8333 4.13405 15.6577 3.82149 15.3452C3.50893 15.0326 3.33333 14.6087 3.33333 14.1667V5.83333Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M3.33333 5.83333L10 10.8333L16.6667 5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>

                {/* Availability Status */}
                <a href={`mailto:${contactData.email}`} className={styles.availability}>
                    Build. Design. Deliver. Whatever is needed.
                </a>
            </div>
        </section>
    );
}

// Minimal static fallback (kept simple for brevity as dynamic version is primary)
function drawStaticPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    // ... [Same static pattern drawing if needed, or simplified]
}
