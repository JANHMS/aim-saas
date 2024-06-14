# api/index.py

from flask import Flask, jsonify, Blueprint

app = Flask(__name__)

# Define a Blueprint for the API routes
api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/')
def home():
    return 'Hello, World!'

@api.route('/about')
def about():
    return 'About'

# Register the Blueprint
app.register_blueprint(api)

if __name__ == "__main__":
    app.run(port=5000)
