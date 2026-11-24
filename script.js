document.addEventListener('DOMContentLoaded',function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var EV=[
{t:'Tech Fest 2026',c:'Technical',d:'2026-12-15',tm:'10:00 AM – 5:00 PM',v:'Main Auditorium',o:'CSE Department',fee:'Free',seats:200,img:'img1',desc:'Annual technical festival with coding contests, robotics demos, project exhibitions and guest talks from industry experts.',sch:[['10:00','Inauguration and keynote'],['11:30','Coding contest round 1'],['01:00','Lunch break'],['02:00','Robotics and project exhibition'],['04:30','Prize distribution']]},
{t:'Web Dev Workshop',c:'Technical',d:'2026-12-12',tm:'11:00 AM – 3:00 PM',v:'Computer Lab 2',o:'IT Department',fee:'₹100',seats:60,img:'img3',desc:'Hands-on workshop on building responsive websites using HTML, CSS and JavaScript. Bring your own laptop.',sch:[['11:00','HTML and semantic structure'],['12:00','CSS layouts and responsiveness'],['01:00','Break'],['01:30','JavaScript interactivity'],['02:30','Mini project and Q&A']]},
{t:'Cultural Night',c:'Cultural',d:'2026-12-20',tm:'6:00 PM – 10:00 PM',v:'Open Air Theatre',o:'Cultural Committee',fee:'Free',seats:500,img:'img2',desc:'An evening of music, dance and drama performances by students, followed by a talent showcase.',sch:[['06:00','Welcome and lamp lighting'],['06:30','Dance performances'],['08:00','Drama and skit'],['09:00','Live band'],['09:45','Closing ceremony']]},
{t:'Poetry and Music Evening',c:'Cultural',d:'2026-12-28',tm:'5:00 PM – 7:30 PM',v:'Seminar Hall',o:'Literary Club',fee:'Free',seats:120,img:'img1',desc:'Open mic evening for poets and musicians. Participants can register to perform or simply attend.',sch:[['05:00','Open mic round 1'],['06:00','Tea break'],['06:15','Featured performances'],['07:00','Vote of thanks']]},
{t:'Sports Meet',c:'Sports',d:'2027-01-05',tm:'8:00 AM – 4:00 PM',v:'College Ground',o:'Sports Council',fee:'Free',seats:300,img:'img3',desc:'Inter-department athletics and team sports tournament including cricket, football, kabaddi and track events.',sch:[['08:00','March past and oath'],['09:00','Track events'],['12:00','Lunch'],['01:00','Team sports finals'],['03:30','Trophy ceremony']]},
{t:'Campus Marathon',c:'Sports',d:'2027-01-12',tm:'6:30 AM – 9:00 AM',v:'Campus Gate 1',o:'NSS Unit',fee:'₹50',seats:150,img:'img2',desc:'A 5 km fun run for students and staff to promote fitness. T-shirt and certificate for all finishers.',sch:[['06:30','Warm-up and flag off'],['07:00','5 km run'],['08:15','Refreshments'],['08:30','Certificates and prizes']]}];
var NT=[['Exam','Mid-semester examination begins 02 Dec 2026','20 Nov 2026'],['Event','Tech Fest registration open till 10 Dec','18 Nov 2026'],['Holiday','Institute closed on 25 Dec 2026','15 Nov 2026'],['Update','Library timings revised to 9 AM – 8 PM','10 Nov 2026'],['Exam','Practical exam schedule uploaded on portal','08 Nov 2026'],['Holiday','Winter break from 28 Dec to 02 Jan','05 Nov 2026']];
var GL=[['Campus','Campus','campus'],['Tech Fest','Events','tech'],['Cultural Night','Events','culture'],['Sports Meet','Sports','sports'],['Workshop','Events','code'],['Convocation','Campus','grad'],['Library','Campus','library'],['Marathon','Sports','run']];
var reg={};try{reg=JSON.parse(localStorage.getItem('reg')||'{}')}catch(e){}
function save(){try{localStorage.setItem('reg',JSON.stringify(reg))}catch(e){}}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove('show')},2200)}
function copy(txt){try{navigator.clipboard.writeText(txt).then(function(){toast('Copied')},function(){toast('Copy not allowed here')})}catch(e){toast('Copy not allowed here')}}
function fmt(d){return new Date(d+'T00:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}
function cd(d){var n=Math.ceil((new Date(d+'T00:00:00')-new Date().setHours(0,0,0,0))/864e5);return n<0?'Event completed':n===0?'Happening today':'Starts in '+n+' day'+(n>1?'s':'')}
function left(i){return EV[i].seats-(reg[i]?1:0)}

var COL={tech:['#1e3a8a','#6366f1'],code:['#0f766e','#0ea5e9'],culture:['#581c87','#db2777'],poetry:['#78350f','#f59e0b'],sports:['#166534','#4ade80'],run:['#0369a1','#f97316'],campus:['#0ea5e9','#bae6fd'],grad:['#7c3aed','#ec4899'],library:['#92400e','#fbbf24']};
function art(k){var S={
tech:'<rect x="130" y="45" width="140" height="90" rx="6" fill="#0f172a"/><rect x="142" y="58" width="60" height="6" rx="3" fill="#38bdf8"/><rect x="150" y="72" width="90" height="6" rx="3" fill="#a5b4fc"/><rect x="142" y="86" width="70" height="6" rx="3" fill="#34d399"/><rect x="150" y="100" width="100" height="6" rx="3" fill="#fbbf24"/><rect x="110" y="135" width="180" height="12" rx="6" fill="#cbd5e1"/><g stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="#fff"><path d="M20 40h60v40h30M380 60h-70v40M30 160h70v-30M370 150h-60"/><circle cx="20" cy="40" r="5"/><circle cx="380" cy="60" r="5"/><circle cx="30" cy="160" r="5"/><circle cx="370" cy="150" r="5"/></g>',
code:'<rect x="90" y="28" width="220" height="144" rx="10" fill="#f8fafc"/><rect x="90" y="28" width="220" height="24" rx="10" fill="#e2e8f0"/><circle cx="106" cy="40" r="5" fill="#ef4444"/><circle cx="122" cy="40" r="5" fill="#f59e0b"/><circle cx="138" cy="40" r="5" fill="#22c55e"/><text x="108" y="82" font-size="18" font-family="monospace" fill="#2563eb">&lt;html&gt;</text><text x="124" y="106" font-size="18" font-family="monospace" fill="#db2777">&lt;div class&gt;</text><text x="140" y="130" font-size="18" font-family="monospace" fill="#059669">{ css }</text><text x="108" y="154" font-size="18" font-family="monospace" fill="#2563eb">&lt;/html&gt;</text>',
culture:'<polygon points="200,0 120,170 280,170" fill="#fff" fill-opacity=".25"/><path d="M0 0h70q-30 90-10 200H0z" fill="#7f1d1d"/><path d="M400 0h-70q30 90 10 200h60z" fill="#7f1d1d"/><rect x="0" y="170" width="400" height="30" fill="#1f2937"/><circle cx="200" cy="82" r="12" fill="#fde68a"/><path d="M200 94v40M200 104l-26 18M200 104l26-22M200 134l-16 34M200 134l18 34" stroke="#fde68a" stroke-width="6" stroke-linecap="round" fill="none"/><text x="100" y="70" font-size="30" fill="#fff">&#9834;</text><text x="290" y="100" font-size="34" fill="#fff">&#9835;</text><text x="250" y="50" font-size="24" fill="#fff">&#9834;</text>',
poetry:'<rect x="188" y="40" width="24" height="46" rx="12" fill="#e5e7eb"/><path d="M178 70q0 28 22 28t22-28M200 98v40M170 140h60" stroke="#e5e7eb" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M60 150l60-14v-36l-60 14zM120 136l60-14v-36l-60 14z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><text x="290" y="90" font-size="40" fill="#fff">&#9835;</text><text x="320" y="140" font-size="28" fill="#fff">&#9834;</text>',
sports:'<ellipse cx="200" cy="110" rx="170" ry="70" fill="none" stroke="#fff" stroke-width="4"/><ellipse cx="200" cy="110" rx="130" ry="44" fill="#22c55e" stroke="#fff" stroke-width="2"/><path d="M200 66v88" stroke="#fff" stroke-width="2"/><circle cx="200" cy="110" r="16" fill="none" stroke="#fff" stroke-width="2"/><circle cx="200" cy="40" r="20" fill="#fff"/><path d="M200 30l8 6-3 10h-10l-3-10z" fill="#111827"/>',
run:'<circle cx="200" cy="130" r="56" fill="#fde68a"/><rect x="0" y="150" width="400" height="50" fill="#065f46"/><circle cx="200" cy="72" r="11" fill="#fff"/><path d="M200 84l-4 34M196 118l-18 28M196 118l20 22M198 96l-22 12M198 96l24 6" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>',
campus:'<circle cx="330" cy="40" r="22" fill="#fde047"/><rect x="100" y="80" width="200" height="90" fill="#fef3c7"/><polygon points="90,80 200,34 310,80" fill="#b45309"/><rect x="186" y="120" width="28" height="50" fill="#7c2d12"/><g fill="#38bdf8"><rect x="118" y="100" width="24" height="24"/><rect x="258" y="100" width="24" height="24"/><rect x="118" y="134" width="24" height="24"/><rect x="258" y="134" width="24" height="24"/></g><rect x="0" y="170" width="400" height="30" fill="#16a34a"/><circle cx="50" cy="150" r="26" fill="#15803d"/><rect x="46" y="165" width="8" height="12" fill="#78350f"/><circle cx="355" cy="150" r="26" fill="#15803d"/><rect x="351" y="165" width="8" height="12" fill="#78350f"/>',
grad:'<polygon points="200,56 310,98 200,140 90,98" fill="#111827"/><path d="M142 118v32q58 28 116 0v-32l-58 22z" fill="#1f2937"/><path d="M300 102v50" stroke="#fbbf24" stroke-width="4"/><circle cx="300" cy="156" r="7" fill="#fbbf24"/><g fill="#fde68a"><circle cx="60" cy="50" r="4"/><circle cx="340" cy="40" r="5"/><circle cx="50" cy="150" r="5"/><circle cx="350" cy="160" r="4"/></g>',
library:'<rect x="40" y="30" width="320" height="150" fill="#78350f"/><path d="M40 85h320M40 135h320" stroke="#451a03" stroke-width="6"/><g><rect x="55" y="45" width="16" height="40" fill="#ef4444"/><rect x="75" y="52" width="14" height="33" fill="#3b82f6"/><rect x="93" y="42" width="18" height="43" fill="#22c55e"/><rect x="115" y="50" width="14" height="35" fill="#f59e0b"/><rect x="220" y="46" width="16" height="39" fill="#8b5cf6"/><rect x="240" y="40" width="18" height="45" fill="#ec4899"/><rect x="262" y="52" width="14" height="33" fill="#06b6d4"/><rect x="60" y="97" width="18" height="38" fill="#06b6d4"/><rect x="82" y="92" width="14" height="43" fill="#f59e0b"/><rect x="100" y="100" width="16" height="35" fill="#ef4444"/><rect x="200" y="94" width="18" height="41" fill="#22c55e"/><rect x="222" y="100" width="14" height="35" fill="#3b82f6"/><rect x="300" y="96" width="16" height="39" fill="#ec4899"/><rect x="60" y="148" width="16" height="32" fill="#22c55e"/><rect x="80" y="142" width="18" height="38" fill="#8b5cf6"/><rect x="250" y="146" width="16" height="34" fill="#f59e0b"/><rect x="270" y="140" width="18" height="40" fill="#ef4444"/></g>'};
var c=COL[k]||COL.tech;return '<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+k+' illustration"><defs><linearGradient id="g'+k+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient></defs><rect width="400" height="200" fill="url(#g'+k+')"/>'+S[k]+'</svg>'}
var AK={'Tech Fest 2026':'tech','Web Dev Workshop':'code','Cultural Night':'culture','Poetry and Music Evening':'poetry','Sports Meet':'sports','Campus Marathon':'run'};
// theme
$('#themeBtn').onclick=function(){var r=document.documentElement,cur=r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.dataset.theme=cur==='dark'?'light':'dark'};
// cards
function card(e,i){return '<article class="card event-card" data-i="'+i+'"><div class="card-img">'+art(AK[e.t])+'</div><div class="card-body"><span class="badge b-'+e.c+'">'+e.c+'</span><h3>'+e.t+'</h3><p class="meta">'+fmt(e.d)+' &bull; '+e.v+'</p><p class="cd">'+cd(e.d)+'</p><div class="row-btns"><button class="btn small details-btn" type="button">View Details</button><button class="btn small ghost quick-btn" type="button">'+(reg[i]?'Registered ✓':'Register')+'</button></div></div></article>'}
function renderEv(){var f=renderEv.f||'All';$('#homeEvents').innerHTML=EV.slice(0,3).map(function(e,i){return card(e,i)}).join('');
var h=EV.map(function(e,i){return (f==='All'||e.c===f)?card(e,i):''}).join('');$('#eventList').innerHTML=h||'<p class="empty">No events in this category.</p>'}
function chips(box,list,cb,first){box.insertAdjacentHTML('afterbegin',list.map(function(x,i){return '<button class="chip'+(i===0?' active':'')+'" type="button">'+x+'</button>'}).join(''));
box.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;$$('.chip',box).forEach(function(c){c.classList.remove('active')});b.classList.add('active');cb(b.textContent)})}
chips($('#evChips'),['All','Technical','Cultural','Sports'],function(f){renderEv.f=f;renderEv()});
// modal
var m=document.createElement('div');m.className='modal';m.innerHTML='<div class="modal-box"></div>';document.body.appendChild(m);var mb=$('.modal-box',m);
function closeM(){m.classList.remove('open')}
function openM(i,showForm){var e=EV[i],l=left(i),pct=Math.round(l/e.seats*100);
mb.innerHTML='<button class="modal-close" aria-label="Close">&times;</button><div class="card-img" style="height:150px;border-radius:8px;overflow:hidden;margin-bottom:.8rem">'+art(AK[e.t])+'</div><span class="badge b-'+e.c+'">'+e.c+'</span><h3>'+e.t+'</h3><p class="cd">'+cd(e.d)+'</p><p>'+e.desc+'</p>'+
'<div class="info-grid"><div><span>Date</span>'+fmt(e.d)+'</div><div><span>Time</span>'+e.tm+'</div><div><span>Venue</span>'+e.v+'</div><div><span>Organizer</span>'+e.o+'</div><div><span>Entry fee</span>'+e.fee+'</div><div><span>Seats left</span>'+l+' of '+e.seats+'</div></div>'+
'<div class="seatbar"><i style="width:'+pct+'%"></i></div><h4>Schedule</h4><ul class="sched">'+e.sch.map(function(s){return '<li><b>'+s[0]+'</b> &nbsp;'+s[1]+'</li>'}).join('')+'</ul>'+
'<div class="row-btns">'+(reg[i]?'<button class="btn ok" disabled>Registered ✓ ('+reg[i]+')</button><button class="btn ghost" id="unreg" type="button">Cancel Registration</button>':'<button class="btn" id="regBtn" type="button">Register Now</button>')+'<button class="btn ghost" id="cpy" type="button">Copy Details</button></div>'+
'<form class="reg-form" id="regForm" novalidate '+(showForm&&!reg[i]?'':'hidden')+'><label for="rn">Your name</label><input id="rn" type="text"><span class="error"></span><label for="re">Email</label><input id="re" type="email"><span class="error"></span><div class="row-btns"><button class="btn" type="submit">Confirm Registration</button></div></form>';
m.classList.add('open');
$('.modal-close',mb).onclick=closeM;
$('#cpy',mb).onclick=function(){copy(e.t+' | '+fmt(e.d)+' | '+e.tm+' | '+e.v)};
var rb=$('#regBtn',mb);if(rb)rb.onclick=function(){$('#regForm',mb).hidden=false;$('#rn',mb).focus()};
var un=$('#unreg',mb);if(un)un.onclick=function(){delete reg[i];save();renderEv();openM(i);toast('Registration cancelled')};
$('#regForm',mb).onsubmit=function(ev){ev.preventDefault();var n=$('#rn',mb),em=$('#re',mb),ok=true,er=$$('.error',mb);
if(n.value.trim().length<2){er[0].textContent='Enter your name.';ok=false}else er[0].textContent='';
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())){er[1].textContent='Enter a valid email.';ok=false}else er[1].textContent='';
if(!ok)return;reg[i]=n.value.trim();save();renderEv();openM(i);toast('Registered successfully')}}
document.addEventListener('click',function(ev){var c=ev.target.closest('.event-card');if(!c)return;var i=+c.dataset.i;
if(ev.target.closest('.details-btn'))openM(i);else if(ev.target.closest('.quick-btn'))openM(i,true)});
m.addEventListener('click',function(e){if(e.target===m)closeM()});
// gallery + lightbox
var gl=GL,gi=0;
function renderG(f){gl=GL.filter(function(g){return f==='All'||g[1]===f});$('#gGrid').innerHTML=gl.map(function(g,i){return '<figure class="g-item" data-i="'+i+'">'+art(g[2])+'<figcaption>'+g[0]+'</figcaption></figure>'}).join('')}
chips($('#gChips'),['All','Campus','Events','Sports'],renderG);renderG('All');
function lb(i){gi=(i+gl.length)%gl.length;$('#lbImg').innerHTML=art(gl[gi][2]);$('#lbCap').textContent=gl[gi][0]+' ('+(gi+1)+'/'+gl.length+')';$('#lb').classList.add('open')}
$('#gGrid').addEventListener('click',function(e){var f=e.target.closest('.g-item');if(f)lb(+f.dataset.i)});
$('#lbP').onclick=function(){lb(gi-1)};$('#lbN').onclick=function(){lb(gi+1)};$('#lbX').onclick=function(){$('#lb').classList.remove('open')};
// notices
var nf='All';
function renderN(){var q=$('#nSearch').value.toLowerCase();var h=NT.filter(function(n){return(nf==='All'||n[0]===nf)&&n[1].toLowerCase().indexOf(q)>-1}).map(function(n){var k={Exam:'exam',Event:'event',Holiday:'holiday',Update:'other'}[n[0]];return '<li><span class="tag '+k+'">'+n[0]+'</span> '+n[1]+'<time>'+n[2]+'</time></li>'}).join('');$('#nList').innerHTML=h||'<li class="empty">No notices found.</li>'}
chips($('#nChips'),['All','Exam','Event','Holiday','Update'],function(f){nf=f;renderN()});$('#nSearch').oninput=renderN;renderN();
// keys
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();$('#lb').classList.remove('open')}});
// routing
var pages=$$('.page'),links=$$('.nav-list a'),t=$('.nav-toggle'),nav=$('nav');
function go(){var id=(location.hash||'#home').slice(1);if(!document.getElementById(id))id='home';
pages.forEach(function(p){p.classList.toggle('active',p.id===id)});links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+id)});nav.classList.remove('open');window.scrollTo(0,0)}
window.addEventListener('hashchange',go);go();
t.onclick=function(){var o=nav.classList.toggle('open');t.setAttribute('aria-expanded',o)};
// slider
var sl=$$('.slide'),si=0;function show(n){sl[si].classList.remove('active');si=(n+sl.length)%sl.length;sl[si].classList.add('active')}
$('.s-prev').onclick=function(){show(si-1)};$('.s-next').onclick=function(){show(si+1)};setInterval(function(){show(si+1)},4000);
// back to top, copy buttons
var tt=$('#toTop');window.addEventListener('scroll',function(){tt.classList.toggle('show',window.scrollY>300)});tt.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
$$('[data-copy]').forEach(function(b){b.onclick=function(){copy(b.dataset.copy)}});
// contact form
var f=$('#contactForm');$('#message').oninput=function(){$('#cc').textContent=this.value.length+' / 300'};
f.addEventListener('reset',function(){$$('.error',f).forEach(function(x){x.textContent=''});$('#cc').textContent='0 / 300';$('.success',f).hidden=true});
f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
function chk(id,test,msg){var el=f[id],er=el.nextElementSibling,v=el.value.trim();if(!test(v)){er.textContent=msg;el.classList.add('invalid');ok=false}else{er.textContent='';el.classList.remove('invalid')}}
chk('name',function(v){return v.length>=2},'Please enter your name (min 2 characters).');
chk('email',function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},'Please enter a valid email address.');
chk('message',function(v){return v.length>=10},'Message must be at least 10 characters.');
var s=$('.success',f);s.hidden=!ok;if(ok){f.reset();s.hidden=false}});
renderEv();
});
