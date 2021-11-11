import mysql.connector
from flask import Flask
import configparser
from flask_cors import CORS, cross_origin

sql_config = configparser.ConfigParser()
sql_config.read('sql.properties')

cnx = mysql.connector.connect( user=sql_config['DEFAULT']['user'], password=sql_config['DEFAULT']['password'], host=sql_config['DEFAULT']['host'],database=sql_config['DEFAULT']['database']) 
    
cursor = cnx.cursor(buffered=True)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/player/<username>')
@cross_origin()
def getPlayerData(username):
    return { "username" : username }

@app.route('/card/<name>')
@cross_origin()
def getCardData(name):
    return "You requested card information on card: '" + str(name) + "'."


@app.route('/deck/<id>')
@cross_origin()
def getDeckData(id):
    return "You requested deck information on deck with ID: '" + str(id) + "'."
    

@app.route('/stats')
@cross_origin()
def getStats():
    return "You requested game stats."
    

@app.route('/match/<id>')
@cross_origin()
def getMatchData(id):
    return "You requested match information on match with ID: '" + str(id) + "'."
    
app.run(host='0.0.0.0', port=5000)