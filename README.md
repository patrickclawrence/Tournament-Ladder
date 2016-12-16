# Tournament-Ladder
A Ladder that can be used to maintain an ongoing tournament.

The Plan:

Data will be maintain in a document database (probably monog)

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
challengerID
defenderID
timestamp
```
### Match
```
challengerID
challengerTeam
challengerScore
defenderId
defenderScore
defenderTeam
timestamp
```
## User Stories

I should be able to create a user.
update a user
Challenge a user
Post a Game score
view pending challenges
Mark score
Update Match
View Match history


