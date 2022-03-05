from flask import Flask, jsonify, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@socketio.on('msg')
def handle_msg(data):
    socketio.emit('push', data,  broadcast=True, include_self=False)


if __name__ == '__main__':
    socketio.run(app)
