import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Measurement = Base.classes.measurement
Station = Base.classes.station

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    print("Listing all available APIs")
    
    return (f"Welcome to the Home Page!</br>"
            f"Below is a list of the climate APIs available:</br>"
            f"/api/v1.0/precipitation</br>"
            f"/api/v1.0/stations</br>"
            f"/api/v1.0/tobs</br>"
            f"/api/v1.0/<start></br>"
            f"/api/v1.0/<start>/<end>"
            )



if __name__=="__main__":
    app.run(debug=True)