# 1. Import Flask
from flask import Flask


# 2. Create an app
app = Flask(__name__)


# 3. Define static routes
@app.route("/")
def home():
    return "Welcome to my API!"

@app.route("/about")
def about():
    name = "Harry"
    location = "New Jersey"
    return f"my name is {name} and my location is {location}"

@app.route("/contact")
def contact():
    email = "harrybonsu@gmail.com"
    return f"my contact is : {email}"


# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
