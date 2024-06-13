from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Adjust origins as needed

@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify(message="Hello, world!")

if __name__ == '__main__':
    app.run(debug=True, port=5328)  # Port specification only for local development
