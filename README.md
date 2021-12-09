# Computer Combat Companion

Final Project
by Jan Fic
Databases for Back-End Development 
Fall 2021
New College of Florida

## Assignment Task
Using skills and knowledge that we learned in the course, Docker, Relational Databases, APIs and Flask
the goal was to create an application that uses a backend. A minimal front-end was developed to use 
the API the student implemented. The API and backend could be for any application of the students liking but 
required the use of a relational database and a callable API. 

## Project Description
For my project I decided to use an existing work-in-progress game that I was developing, Computer Combat.
In this game players match against other players to face in a one-on-one puzzle strategy game using
cards and their abilities in there custom made decks to attack and defeat their opponent. This used a database
in AWS already. For this project I would be extending this existing MySQL database to facilitate retrieval of 
player and match information to create a Computer Combat "Companion" to view meta-game data.

### Project Tools
These are the project tools used for Computer Combat Companion. ( Tools used for Computer Combat are NOT included )
Front-End Development: Angular, Angular Material : Used to create UI for Web Development
Back-End Developement: Flask, Docker, MySQL, Python

### Project Structure and Files
`computercombatcompanion` root folder
* `api` folder containing files to run the API Flask server
    * `apiserver.py` the Flask python file that defines the api, connects to the AWS MySQL server
    * `Dockerfile` A Dockerfile used to create and build the API server
    * `sql.properties` A file containing server connection properties
* `computercombatstats` folder containing Angular frontend files

## Code Repositorys
Computer Combat Companion GitHub: https://github.com/janfic/computercombatcompanion
Computer Combat GitHub: https://github.com/janfic/computercombat