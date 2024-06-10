from sanic import Sanic
from sanic.response import json
app = Sanic()

 
@app.route('/')
@app.route('/api/python')
async def index(request, path=""):
    return json({'hello': path})