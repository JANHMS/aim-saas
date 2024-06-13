# api/index.py

from flask import Flask

app = Flask(__name__)

@app.route('/api')
def home():
    return 'Hello, World!'

@app.route('/api/about')
def about():
    return 'About'