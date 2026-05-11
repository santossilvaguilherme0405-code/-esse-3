new window.VLibras.Widget('https://vlibras.gov.br/app');

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

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

});

let zoomLevel = 100;

document.getElementById('zoomIn').addEventListener('click', () => {

zoomLevel += 10;

document.body.style.zoom = zoomLevel + '%';

});

document.getElementById('zoomOut').addEventListener('click', () => {

zoomLevel -= 10;

document.body.style.zoom = zoomLevel + '%';

});

function openModal(type){

const modal = document.getElementById('modal');

const title = document.getElementById('modalTitle');

const text = document.getElementById('modalText');

modal.style.display = 'block';

if(type == 1){

title.innerHTML = '🌾 Irrigação Inteligente';

text.innerHTML =
'Sensores analisam a umidade do solo e evitam desperdício de água.';

}

if(type == 2){

title.innerHTML = '🚁 Drones Agrícolas';

text.innerHTML =
'Drones ajudam produtores a monitorar plantações e melhorar a produtividade.';

}

if(type == 3){

title.innerHTML = '☀️ Energia Solar';

text.innerHTML =
'Painéis solares fornecem energia limpa e reduzem impactos ambientais.';

}

}

function closeModal(){

document.getElementById('modal').style.display = 'none';

}

window.onclick = function(event){

const modal = document.getElementById('modal');

if(event.target == modal){

modal.style.display = 'none';

}

}

navigator.geolocation.getCurrentPosition(

async(position)=>{

const lat = position.coords.latitude;
const lon = position.coords.longitude;

const apiKey = '3924a0c6fd1f4f713a1f3b29f8f32da8';

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
);

const data = await response.json();

const temp = Math.round(data.main.temp);

document.querySelector('.weather-box').innerHTML = `

<h3>🌦️ ${data.name}</h3>

<p>🌡️ Temperatura: ${temp}°C</p>

<p>💧 Umidade: ${data.main.humidity}%</p>

<p>🌬️ Vento: ${data.wind.speed} km/h</p>

<p>📍 Localização detectada automaticamente</p>

`;

document.getElementById('tempMapa').innerHTML =
temp + '°C';

document.getElementById('umidadeMapa').innerHTML =
data.main.humidity + '%';

document.getElementById('ventoMapa').innerHTML =
data.wind.speed + ' km/h';

document.getElementById('dashTemp')
.innerHTML = temp + '°C';

document.getElementById('dashUmidade')
.innerHTML = data.main.humidity + '%';
  
document.getElementById('climaMapa').innerHTML =
data.weather[0].description;

  const alerta =
document.getElementById('alertaClima');

if(temp <= 5){

alerta.innerHTML = `
❄️ ALERTA DE GEADA:
Proteja plantações contra frio intenso.
`;

}

else if(temp >= 35){

alerta.innerHTML = `
🔥 ALERTA DE CALOR EXTREMO:
Aumente irrigação e monitore o solo.
`;

}

else if(data.weather[0].description.includes('chuva')){

alerta.innerHTML = `
🌧️ ALERTA DE CHUVA:
Monitore áreas de plantação e drenagem.
`;

}

else{

alerta.innerHTML = `
✅ Clima favorável para atividades agrícolas.
`;

}
  
}catch(error){

mostrarClimaPadrao();

}

},

(error)=>{

mostrarClimaPadrao();

}

);

function mostrarClimaPadrao(){

document.querySelector('.weather-box').innerHTML = `

<h3>🌦️ Guarapuava</h3>

<p>🌡️ Temperatura: 18°C</p>

<p>💧 Umidade: 82%</p>

<p>🌬️ Vento: 9 km/h</p>

<p>⚠️ Modo offline ativado</p>

`;

}

function calcularSustentabilidade(){

const agua = Number(document.getElementById('agua').value);

const solar = Number(document.getElementById('solar').value);

const verde = Number(document.getElementById('verde').value);

const media = Math.round((agua + solar + verde) / 3);

let nivel = '';

if(media < 40){

nivel = '❌ Sustentabilidade baixa';

}else if(media < 70){

nivel = '⚠️ Sustentabilidade média';

}else{

nivel = '✅ Sustentabilidade excelente';

}

document.getElementById('resultadoSimulador').innerHTML = `

🌱 Resultado: ${media}%<br><br>
${nivel}

`;

}

function mostrarInfo(tipo){

const resposta =
document.getElementById('respostaIA');

if(tipo == 'agua'){

resposta.innerHTML = `

<h3>💧 Economia de Água</h3>

<p>
A irrigação inteligente utiliza sensores modernos para analisar a umidade do solo e evitar desperdícios. Essa tecnologia ajuda produtores rurais a economizar água, reduzir custos e preservar rios e nascentes.
</p>

`;

}

else if(tipo == 'energia'){

resposta.innerHTML = `

<h3>☀️ Energia Solar</h3>

<p>
A energia solar é uma alternativa limpa e renovável muito importante para o agro sustentável. Painéis solares podem abastecer propriedades rurais e diminuir impactos ambientais.
</p>

`;

}

else if(tipo == 'drones'){

resposta.innerHTML = `

<h3>🚁 Drones Agrícolas</h3>

<p>
Os drones agrícolas ajudam no monitoramento das plantações, identificação de pragas e análise das lavouras, aumentando produtividade e reduzindo desperdícios.
</p>

`;

}

else if(tipo == 'solo'){

resposta.innerHTML = `

<h3>🌱 Preservação do Solo</h3>

<p>
A preservação do solo é essencial para garantir produção agrícola no futuro. Técnicas sustentáveis evitam erosão e mantêm nutrientes importantes para as plantações.
</p>

`;

}

else if(tipo == 'clima'){

resposta.innerHTML = `

<h3>🌦️ Mudanças Climáticas</h3>

<p>
As mudanças climáticas afetam diretamente a agricultura. Secas, geadas e chuvas intensas podem prejudicar plantações e aumentar prejuízos no campo.
</p>

`;

}

else if(tipo == 'sustentabilidade'){

resposta.innerHTML = `

<h3>🌎 Sustentabilidade</h3>

<p>
A agricultura sustentável busca equilibrar produção agrícola, preservação ambiental e desenvolvimento econômico para garantir alimentos e recursos naturais às futuras gerações.
</p>

`;

}

setTimeout(() => {

const y =
resposta.getBoundingClientRect().top +
window.pageYOffset - 120;

window.scrollTo({
top:y,
behavior:'smooth'
});

},200);

}

function abrirAjuda(){

document.getElementById('helpModal')
.style.display = 'block';

}

function fecharAjuda(){

document.getElementById('helpModal')
.style.display = 'none';

}

function entrarSite(){

const intro =
document.getElementById('intro-screen');

const site =
document.getElementById('site-content');

intro.style.opacity = '0';
intro.style.transform = 'scale(1.1)';

setTimeout(()=>{

intro.remove();

site.style.opacity = '1';

document.body.style.overflow = 'auto';

},1000);

}

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

document.querySelectorAll('.hidden')
.forEach((el)=>observer.observe(el));

function enviarPergunta(){

const input =
document.getElementById('chatInput');

const mensagens =
document.getElementById('chatMessages');

const pergunta = input.value.trim();

if(pergunta === '') return;

const userDiv =
document.createElement('div');

userDiv.classList.add('user-message');

userDiv.innerHTML = pergunta;

mensagens.appendChild(userDiv);

let resposta = '';

const texto = pergunta.toLowerCase();

if(texto.includes('água')){

resposta =
'💧 Utilize irrigação inteligente e sensores de umidade para evitar desperdícios de água.';

}

else if(texto.includes('geada')){

resposta =
'❄️ Em casos de geada, proteja plantações sensíveis e monitore alertas climáticos.';

}

else if(texto.includes('solo')){

resposta =
'🌱 A preservação do solo ajuda a manter nutrientes importantes para a agricultura sustentável.';

}

else if(texto.includes('energia')){

resposta =
'☀️ A energia solar é uma ótima alternativa sustentável para propriedades rurais.';

}

else if(texto.includes('drone')){

resposta =
'🚁 Drones agrícolas ajudam no monitoramento das lavouras e identificação de pragas.';

}

else{

resposta =
'🌾 Desculpe, ainda estou aprendendo sobre esse assunto agrícola.';

}

setTimeout(()=>{

const botDiv =
document.createElement('div');

botDiv.classList.add('bot-message');

botDiv.innerHTML = resposta;

mensagens.appendChild(botDiv);

mensagens.scrollTop =
mensagens.scrollHeight;

},700);

input.value = '';

}
