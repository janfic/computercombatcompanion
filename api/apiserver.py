import mysql.connector
from flask import Flask
import configparser

sql_config = configparser.ConfigParser()
sql_config.read('sql.properties')

cnx = mysql.connector.connect( user=sql_config['DEFAULT']['user'], password=sql_config['DEFAULT']['password'], host=sql_config['DEFAULT']['host'],database=sql_config['DEFAULT']['database']) 
    
cursor = cnx.cursor(buffered=True)

app = Flask(__name__)

@app.route('/player/<username>')
def getPlayerData(username):
    return "You requested player information on player: '" + str(username) + "'."

@app.route('/card/<name>')
def getCardData(name):
    return "You requested card information on card: '" + str(name) + "'."


@app.route('/deck/<id>')
def getDeckData(id):
    return "You requested deck information on deck with ID: '" + str(id) + "'."
    

@app.route('/stats')
def getStats():
    return "You requested game stats."
    

@app.route('/match/<id>')
def getMatchData(id):
    return "You requested match information on match with ID: '" + str(id) + "'."
    
app.run(host='127.0.0.1', port=2357)