const socket = io();
socket.on('connect', () => {
	socket.emit('my event', { data: "I'm connected" });
});

function send() {
	const msgbox = document.getElementById('msgbox');
	socket.emit('msg', msgbox.value);
	msgbox.value = '';
}

socket.on('push', data => {
	const msglist = document.getElementById('msglist');
	msglist.innerHTML += `<p>${data}</p>`;
});
document
	.getElementById('btn')
	.addEventListener('click', send);
