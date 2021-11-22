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

    sql = "SELECT * FROM profile WHERE username = '" + str(username) + "';"
    cursor.execute(sql)
    row = cursor.fetchone()

    sql = "SELECT id FROM deck WHERE profile_id = '" + row['uid'] + "';"
    cursor.execute(sql)
    deck_rows = cursor.fetchall()

    decks = []
    for deck_row in deck_rows:
        decks.append(json.loads(getDeckData(deck_row['id']).get_data()))

    return {
        "username": row['username'],
        "uid": row['uid'],
        "decks" : decks,
    }

# API for retrieving data about a specific card


@app.route('/card/<identifier>')
@cross_origin()
def getCardData(identifier):

    identifier = str(identifier)

    if identifier.isdigit():
        sql = "SELECT * FROM card WHERE id = " + identifier + ";"
    else:
        identifier = identifier.replace("_", " ")
        sql = "SELECT * FROM card WHERE name = '" + identifier + "';"

    cursor.execute(sql)

    row = cursor.fetchone()

    sql = "SELECT component_id FROM run_requirements WHERE card_id = " + str(row['id']) + ";"
    cursor.execute(sql)
    run_components_rows = cursor.fetchall()

    run_requirements = []
    for run_component in run_components_rows:
        run_requirements.append(getComponentData(run_component['component_id']))

    return {
        "name": row['name'],
        "id": int(row['id']),
        "collection": int(row['collection_id']),
        "textureName": row['textureName'],
        "maxHealth": int(row['maxHealth']),
        "maxDefense": int(row['maxDefense']),
        "maxAttack": int(row['maxAttack']),
        "runRequirements": int(row['runRequirements']),
        "runComponents": run_requirements,
        "ability": getAbilityData(int(row['ability_id']))
    }

# API for retrieving data about a specific deck


@app.route('/deck/<id>')
@cross_origin()
def getDeckData(id):

    sql = "SELECT * FROM deck WHERE id = " + str(id) + ";"
    cursor.execute(sql)
    deck_row = cursor.fetchone()

    sql = "SELECT * FROM deck_has_card WHERE deck_id = " + str(id) + ";"
    cursor.execute(sql)
    deck_card_rows = cursor.fetchall()

    cards = []

    for card_row in deck_card_rows:
        for x in range(1, card_row['amount']):
            cards.append(json.loads(getCardData(card_row['card_id']).get_data()))

    return {
        "name" : deck_row['name'],
        "id" : int(id),
        "cards" : cards
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
    sql = "SELECT * FROM ability WHERE id = '" + str(id) + "';"
    cursor.execute(sql)
    row = cursor.fetchone()

    return {"id": row['id'], "name": row['name'], "textureName": row['textureName'], "description": row['description']}


def getComponentData(id):
    sql = "SELECT * FROM components WHERE id = '" + str(id) + "';"
    cursor.execute(sql)
    row = cursor.fetchone()
    return {"id": row['id'], "name": row['name'], "textureName": row['textureName']}


# run app
app.run(host='0.0.0.0', port=5000)