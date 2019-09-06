from flask import Flask, request
from flask import render_template as rt

app = Flask(__name__)

@app.route("/")
def index():
    rt('index.html')

@app.route("/synonym/<word>")
def synonym(word):
    return word

@app.route('/noun', methods=['POST'])
def noun():
    request.form['text']
    return text





