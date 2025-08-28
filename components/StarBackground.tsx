"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const ctx = c.getContext("2d")!;
    let w=0,h=0, stars: {x:number;y:number;z:number;s:number}[] = [];
    function resize(){
      w = c.width = Math.floor(window.innerWidth * dpr);
      h = c.height = Math.floor(window.innerHeight * dpr);
      c.style.width = `${window.innerWidth}px`;
      c.style.height = `${window.innerHeight}px`;
      stars = Array.from({length: 160}, () => ({
        x: Math.random()*w, y: Math.random()*h, z: Math.random()*0.6+0.4, s: Math.random()*1.5 + 0.3
      }));
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      for (const st of stars){
        st.y += st.z * 0.2 * dpr;
        if (st.y > h) { st.y = 0; st.x = Math.random()*w; }
        ctx.globalAlpha = 0.7 * st.z;
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(st.x, st.y, st.s*dpr, 0, Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(step);
    }
    resize(); step();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1] opacity-50"
    />
  );
}
