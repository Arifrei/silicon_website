from flask import Flask, render_template
from data import events

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/events')
def events_page():
    return render_template('events.html', events=events)

if __name__ == '__main__':
    app.run(debug=True)
