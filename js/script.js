document.body.classList.add('mode-login');
const screens = document.querySelectorAll('.screen');
const nav = document.getElementById('mainNav');

/* LOGIN */
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();

    document.body.classList.remove('mode-login');
    document.body.classList.add('mode-app');

    activateScreen('dashboard-screen');
    document.getElementById('mainNav').classList.remove('hidden');
});


/* NAVEGAÇÃO */
function showScreen(id, el) {
    activateScreen(id);

    document.querySelectorAll('.nav-item')
        .forEach(n => n.classList.remove('active'));

    el.classList.add('active');
}

function activateScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/* SOCIAL LOGIN */
function socialLogin(provider) {
    alert(`Login ${provider} – integrar OAuth`);
}

/* LINKS */
function handleForgotPassword() {
    alert('Fluxo de recuperação de senha');
}

function handleSignUp() {
    alert('Fluxo de cadastro');
}

/* CHAT */
const chatInput = document.querySelector('.chat-input input');
const chatBtn = document.querySelector('.chat-input button');
const messages = document.querySelector('.messages');

chatBtn.onclick = sendMessage;

function sendMessage() {
    if (!chatInput.value.trim()) return;

    appendMessage(chatInput.value, 'sent');
    chatInput.value = '';

    setTimeout(() => {
        appendMessage('Mensagem recebida. Em breve retornamos.', 'received');
    }, 800);
}

function appendMessage(text, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}
