// ================================
// INICIAR VLibras
// ================================

window.onload = () => {

new window.VLibras.Widget('https://vlibras.gov.br/app');

};


// ================================
// FUNDO DE PARTÍCULAS
// ================================

particlesJS('particles-js', {

particles: {

number: {
value: 80
},

color: {
value: '#00ff88'
},

shape: {
type: 'circle'
},

opacity: {
value: 0.5
},

size: {
value: 3
},

line_linked: {
enable: true,
distance: 150,
color: '#00ff88',
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 2
}

}

});


// ================================
// TEMA CLARO E ESCURO
// ================================

const themeBtn =
document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

});


// ================================
// ZOOM
// ================================

let zoomLevel = 100;

document.getElementById('zoomIn')
.addEventListener('click', () => {

zoomLevel += 10;

document.body.style.zoom =
zoomLevel + '%';

});

document.getElementById('zoomOut')
.addEventListener('click', () => {

zoomLevel -= 10;

document.body.style.zoom =
zoomLevel + '%';

});


// ================================
// ABRIR MODAL
// ================================

function openModal(type){

const modal =
document.getElementById('modal');

const title =
document.getElementById('modalTitle');

const text =
document.getElementById('modalText');

modal.style.display = 'block';


// Irrigação

if(type == 1){

title.innerHTML =
'🌾 Irrigação Inteligente';

text.innerHTML =
'Sensores analisam a umidade do solo e ajudam a economizar água.';

}


// Drones

if(type == 2){

title.innerHTML =
'🚁 Drones Agrícolas';

text.innerHTML =
'Drones ajudam produtores a monitorar plantações e identificar problemas rapidamente.';

}


// Energia Solar

if(type == 3){

title.innerHTML =
'☀️ Energia Solar';

text.innerHTML =
'Painéis solares fornecem energia limpa para propriedades rurais.';

}

}


// ================================
// FECHAR MODAL
// ================================

function closeModal(){

document.getElementById('modal')
.style.display = 'none';

}


// ================================
// FECHAR MODAL CLICANDO FORA
// ================================

window.onclick = function(event){

const modal =
document.getElementById('modal');

const helpModal =
document.getElementById('helpModal');

if(event.target == modal){

modal.style.display = 'none';

}

if(event.target == helpModal){

helpModal.style.display = 'none';

}

};


// ================================
// PEGAR CLIMA
// ================================

navigator.geolocation.getCurrentPosition(

async(position)=>{

const lat = position.coords.latitude;

const lon = position.coords.longitude;

const apiKey =
'3924a0c6fd1f4f713a1f3b29f8f32da8';

try{

const response = await fetch(

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`

);

const data = await response.json();

const temp =
Math.round(data.main.temp);


// ================================
// BOX DO CLIMA
// ================================

document.querySelector('.weather-box')
.innerHTML = `

<h3>🌦️ ${data.name}</h3>

<p>🌡️ Temperatura: ${temp}°C</p>

<p>💧 Umidade: ${data.main.humidity}%</p>

<p>🌬️ Vento: ${data.wind.speed} km/h</p>

<p>📍 Localização detectada automaticamente</p>

`;


// ================================
// MAPA CLIMÁTICO
// ================================

document.getElementById('tempMapa')
.innerHTML = temp + '°C';

document.getElementById('umidadeMapa')
.innerHTML =
data.main.humidity + '%';

document.getElementById('ventoMapa')
.innerHTML =
data.wind.speed + ' km/h';

document.getElementById('climaMapa')
.innerHTML =
data.weather[0].description;


// ================================
// DASHBOARD
// ================================

document.getElementById('dashboardTemp')
.innerHTML = temp + '°C';

document.getElementById('dashboardHumidity')
.innerHTML =
data.main.humidity + '%';

document.getElementById('dashboardWind')
.innerHTML =
data.wind.speed + ' km/h';


// ================================
// ALERTAS
// ================================

const alerta =
document.getElementById('alertaClima');

const dashboardAlert =
document.getElementById('dashboardAlert');


// Geada

if(temp <= 5){

alerta.innerHTML = `
❄️ ALERTA DE GEADA:
Proteja plantações contra frio intenso.
`;

dashboardAlert.innerHTML =
'❄️ Risco de geada detectado';

}


// Calor

else if(temp >= 35){

alerta.innerHTML = `
🔥 ALERTA DE CALOR EXTREMO:
Aumente irrigação e monitore o solo.
`;

dashboardAlert.innerHTML =
'🔥 Temperatura muito alta';

}


// Chuva

else if(
data.weather[0].description.includes('chuva')
){

alerta.innerHTML = `
🌧️ ALERTA DE CHUVA:
Monitore drenagem e plantações.
`;

dashboardAlert.innerHTML =
'🌧️ Chuvas previstas';

}


// Normal

else{

alerta.innerHTML = `
✅ Clima favorável para agricultura.
`;

dashboardAlert.innerHTML =
'✅ Clima favorável';

}

}catch(error){

mostrarClimaPadrao();

}

},

(error)=>{

mostrarClimaPadrao();

}

);


// ================================
// CLIMA OFFLINE
// ================================

function mostrarClimaPadrao(){

document.querySelector('.weather-box')
.innerHTML = `

<h3>🌦️ Guarapuava</h3>

<p>🌡️ Temperatura: 18°C</p>

<p>💧 Umidade: 82%</p>

<p>🌬️ Vento: 9 km/h</p>

<p>⚠️ Modo offline ativado</p>

`;

}


// ================================
// SIMULADOR
// ================================

function calcularSustentabilidade(){

const agua =
Number(document.getElementById('agua').value);

const solar =
Number(document.getElementById('solar').value);

const verde =
Number(document.getElementById('verde').value);

const media =
Math.round((agua + solar + verde) / 3);

let nivel = '';

if(media < 40){

nivel =
'❌ Sustentabilidade baixa';

}

else if(media < 70){

nivel =
'⚠️ Sustentabilidade média';

}

else{

nivel =
'✅ Sustentabilidade excelente';

}

document.getElementById(
'resultadoSimulador'
).innerHTML = `

🌱 Resultado: ${media}%<br><br>

${nivel}

`;

}


// ================================
// CENTRAL EDUCACIONAL
// ================================

function mostrarInfo(tipo){

const resposta =
document.getElementById('respostaIA');


// Água

if(tipo == 'agua'){

resposta.innerHTML = `

<h3>💧 Economia de Água</h3>

<p>
Sensores inteligentes ajudam a economizar água e evitar desperdícios.
</p>

`;

}


// Energia

else if(tipo == 'energia'){

resposta.innerHTML = `

<h3>☀️ Energia Solar</h3>

<p>
A energia solar reduz custos e ajuda o meio ambiente.
</p>

`;

}


// Drones

else if(tipo == 'drones'){

resposta.innerHTML = `

<h3>🚁 Drones Agrícolas</h3>

<p>
Drones monitoram plantações e ajudam produtores rurais.
</p>

`;

}


// Solo

else if(tipo == 'solo'){

resposta.innerHTML = `

<h3>🌱 Preservação do Solo</h3>

<p>
A preservação do solo evita erosão e melhora a produção.
</p>

`;

}


// Clima

else if(tipo == 'clima'){

resposta.innerHTML = `

<h3>🌦️ Mudanças Climáticas</h3>

<p>
Mudanças climáticas podem causar secas, geadas e chuvas intensas.
</p>

`;

}


// Sustentabilidade

else if(tipo == 'sustentabilidade'){

resposta.innerHTML = `

<h3>🌎 Sustentabilidade</h3>

<p>
A agricultura sustentável ajuda o planeta e melhora a produção.
</p>

`;

}


// Scroll automático

setTimeout(() => {

const y =

resposta.getBoundingClientRect().top +

window.pageYOffset - 120;

window.scrollTo({

top: y,
behavior: 'smooth'

});

}, 200);

}


// ================================
// ABRIR AJUDA
// ================================

function abrirAjuda(){

document.getElementById('helpModal')
.style.display = 'block';

}

function fecharAjuda(){

document.getElementById('helpModal')
.style.display = 'none';

}


// ================================
// ENTRAR NO SITE
// ================================

function entrarSite(){

const intro =
document.getElementById('intro-screen');

const site =
document.getElementById('site-content');

intro.style.opacity = '0';

intro.style.transform =
'scale(1.1)';

setTimeout(()=>{

intro.style.display = 'none';

site.style.opacity = '1';

document.body.style.overflow =
'auto';

},1000);

}


// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

document.querySelectorAll('.hidden')
.forEach((el)=>observer.observe(el));
