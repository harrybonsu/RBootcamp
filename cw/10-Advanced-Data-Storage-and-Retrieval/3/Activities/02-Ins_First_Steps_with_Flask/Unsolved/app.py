from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    print("opening my homepage")
    return "Welcome to my HomePage"

@app.route("/about")
def about():
    return "This is the about page for meeee!!!!"


if __name__=="__main__":
    app.run(debug=True)