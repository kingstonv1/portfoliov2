import flask
from flask import Flask
from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route('/')
def hello_world():
	return flask.send_file('../index.html')


@app.route('/styles/<string:sheet>')
def stylesheet(sheet: str):
	return flask.send_file(f'../styles/{secure_filename(sheet)}')

@app.route('/assets/<folder>/<file>')
def asset(folder, file):
	return flask.send_file(f'../assets/{folder}/{secure_filename(file)}')