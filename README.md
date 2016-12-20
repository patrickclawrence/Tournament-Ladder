# Tournament-Ladder
A Ladder that can be used to maintain an ongoing tournament.

The Plan:

Data will be maintain in a document database (probably mongo)

ladder structure
['Pat', 'Stanislav', 'Sohrab', 'Tim', etc]

Visual Representation will be a Tree

```
                      Tim
          Stanislav <   
        /             Mike
Pat   <            
        \             Joe
          Sohrab    <
                      Doug
```                   
Users can challenge one level up in the tree ie lg(index)
                      
## Objects

### Person
```
name
*ID
avatar
PIN
email
```
### Challenge
```
*ID
challengerID
defenderID
timestamp
```
### Match
```
*ID
challengerID
challengerTeam
challengerScore
defenderId
defenderScore
defenderTeam
timestamp
```
## User Stories
```
I should be able to create a user.
update a user
Challenge a user
Post a Game score
view pending challenges
Mark score
Update Match
View Match history
```
## Technology

We will use: nodejs (express), mongodb, polymer, amazon web hosting


#Setup on Linux Ubuntu
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install mongo
sudo npm install express --save
npm install 
bower install
mongo < scripts/setupDB.js
```
# Running the app

Run the commad `node app.js` in the root folder
