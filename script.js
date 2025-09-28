// Animated gradient grid
const canvas=document.getElementById('bg'); const ctx=canvas.getContext('2d');
let w,h,t=0; function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;} resize(); addEventListener('resize',resize);
function draw(){
  t+=0.005; ctx.clearRect(0,0,w,h);
  ctx.globalAlpha=0.06; ctx.strokeStyle='#ffffff';
  for(let y=60;y<h;y+=60){ctx.beginPath();ctx.moveTo(0,y+Math.sin(t+y*0.01)*8);ctx.lineTo(w,y+Math.sin(t+y*0.01)*8);ctx.stroke();}
  for(let x=80;x<w;x+=120){ctx.beginPath();ctx.moveTo(x+Math.cos(t+x*0.01)*6,0);ctx.lineTo(x+Math.cos(t+x*0.01)*6,h);ctx.stroke();}
  ctx.globalAlpha=0.12;
  for(let i=0;i<6;i++){const rad=120+Math.sin(t*2+i)*40,x=(w/2)+Math.cos(t+i*1.2)*(220+i*30),y=(h/2)+Math.sin(t*1.2+i*0.8)*(120+i*18);
    const g=ctx.createRadialGradient(x,y,0,x,y,rad); g.addColorStop(0,'rgba(139,92,246,0.7)'); g.addColorStop(0.5,'rgba(52,211,153,0.5)'); g.addColorStop(1,'rgba(59,130,246,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,rad,0,Math.PI*2); ctx.fill(); }
  requestAnimationFrame(draw);
} draw();

// Year
document.getElementById('year') && (document.getElementById('year').textContent=new Date().getFullYear());

// Contract Address via ?ca=
const ca=new URLSearchParams(location.search).get('ca');
if(ca){ const el=document.getElementById('contract'); if(el) el.textContent=ca; }

// Dynamic links via URL (?buy=...&watch=...)
const qp=new URLSearchParams(location.search);
const buy=qp.get('buy'); if(buy){ const b=document.getElementById('buyBtn'); if(b) b.href=buy; }
const watch=qp.get('watch'); if(watch){ const w=document.getElementById('watchBtn'); if(w) w.href=watch; }
