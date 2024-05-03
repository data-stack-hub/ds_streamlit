from datastack.runtime.runtime import Runtime

from flask import Flask, request, jsonify
from flask_cors import CORS
import socketio



app = Flask(__name__)
cors = CORS(app)

sio = socketio.Server(cors_allowed_origins='*')
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)




_runtime = Runtime()

@sio.on('connect')
def connect(sid, environ):
    print('connect ', sid)
    print('new session connected, id:', _runtime.connect_session('', sid))
    sio.emit('msg', 'msg from py server')

@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('message')
def message(sid, data):
    print('message ', data)
    sio.emit('msg', data)

@sio.on('json')
def json(sid, data):
    print('json ', data)






routes = [
    
]
for route in routes:
    app.add_url_rule(route["route"], route["end_point"] if 'end_point' in route else route['route'], route["fn"], methods=route["methods"])


app.run(debug=True)