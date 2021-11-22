import mysql.connector
from flask import Flask, jsonify
import sys
import json
import configparser
# Qualty of Life package for CORS with Flask ( when developing on same machine )
from flask_cors import CORS, cross_origin

# Reads Config to connect to DB ( since currently my DB is on AWS )
sql_config = configparser.ConfigParser()
sql_config.read('sql.properties')

# Connect to data base and create cursor
cnx = mysql.connector.connect(user=sql_config['DEFAULT']['user'], password=sql_config['DEFAULT']
                              ['password'], host=sql_config['DEFAULT']['host'], database=sql_config['DEFAULT']['database'])
cursor = cnx.cursor(buffered=True, dictionary=True)

# Create Flask app and apply cors
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# API for retrieving data about a specific player


@app.route('/player/<username>')
@cross_origin()
def getPlayerData(username):
    return {
        "username": (username),
        "uid": "abcdefghijklmnop"
    }

# API for retrieving data about a specific card


@app.route('/card/<name>')
@cross_origin()
def getCardData(name):

    name = name.replace("_", " ")

    sql = "SELECT * FROM card WHERE name = '" + str(name) + "';"

    cursor.execute(sql)

    row = cursor.fetchone()

    return {
        "name": name,
        "id": int(row['id']),
        "collection": int(row['collection_id']),
        "textureName": row['textureName'],
        "maxHealth": int(row['maxHealth']),
        "maxDefense": int(row['maxDefense']),
        "maxAttack": int(row['maxAttack']),
        "runRequirements": int(row['runRequirements']),
        "runComponents": [getComponentData(0), getComponentData(1)],
        "ability": getAbilityData(int(row['ability_id']))
    }

# API for retrieving data about a specific deck


@app.route('/deck/<id>')
@cross_origin()
def getDeckData(id):

    return {
        "name" : "[TEST NAME]",
        "id" : int(id),
        "cards" : [json.loads(getCardData("Virus").get_data()), json.loads(getCardData("Fire Wall").get_data())]
    }

# API for retrieving macro data about the game


@app.route('/stats')
@cross_origin()
def getStats():
    return {"data": "You requested game stats."}

# API for retrieving data about a specific match between players


@app.route('/match/<id>')
@cross_origin()
def getMatchData(id):
    return {"data": "You requested match information on match with ID: '" + str(id) + "'."}


def getAbilityData(id):
    return {"id": id, "name": "[TEST NAME]", "textureName": "[TEST TEXTURE NAME]", "description": "[TEST DESCRIPTION]"}


def getComponentData(id):
    return {"id": id, "name": "[TEST NAME]", "textureName": "[TEST TEXTURE NAME]"}


# run app
app.run(host='0.0.0.0', port=5000)
