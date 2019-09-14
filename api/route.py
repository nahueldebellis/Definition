from word import Word
from flask import Flask, request
from flask import render_template as rt

app = Flask(__name__, static_folder='static')

@app.route("/")
def index():
	return rt("index.html")

@app.route("/word/<word>")
def synonym(word):
	w = Word()
	return w.create_response(word)
	

@app.route('/noun', methods=['POST'])
def noun():
    request.form['text']
    return text

if __name__ == '__main__':
    app.run()



