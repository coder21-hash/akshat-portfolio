import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: `<canvas #canvas class="particles-canvas"></canvas>`,
  styles: [`:host{position:fixed;inset:0;z-index:0;pointer-events:none}canvas{width:100%;height:100%;display:block;}`]
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private raf!: number;
  private mouse = { x: -9999, y: -9999 };

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
    this.init();
    this.animate();
  }

  resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.init();
  }

  init() {
    const canvas = this.canvasRef.nativeElement;
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? '#00ff88' : Math.random() > 0.5 ? '#00d4ff' : '#ffffff'
    }));
  }

  animate() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of this.particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const dx = p.x - this.mouse.x, dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const op = dist < 150 ? p.opacity * (1 + (150-dist)/150) : p.opacity;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color.replace(')', `,${Math.min(op,0.8)})`).replace('rgb','rgba').replace('#00ff88',`rgba(0,255,136,${Math.min(op,0.8)})`).replace('#00d4ff',`rgba(0,212,255,${Math.min(op,0.8)})`).replace('#ffffff',`rgba(255,255,255,${Math.min(op,0.5)})`);
      ctx.fill();

      // connect nearby particles
      for (const q of this.particles) {
        const ddx = p.x-q.x, ddy = p.y-q.y;
        const d = Math.sqrt(ddx*ddx+ddy*ddy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle = `rgba(0,255,136,${0.05*(1-d/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    this.raf = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() { cancelAnimationFrame(this.raf); }
}
