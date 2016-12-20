use Tournament;

db.Person.insert({
    name: 'Test User',
    ID: 1999,
    avatar: 'None',
    PIN: '1234',
    email: 'testUser@gmail.com'
    
});

db.Person.insert({
    name: 'Second User',
    ID: 3239,
    avatar: 'None',
    PIN: '1234',
    email: 'secondUser@gmail.com'
    
});

db.Challenge.insert({
    ID: 1,
    challengerID: 1999,
    defenderID: 3239,
    timestamp: 1482193075  
})

db.Match.insert({
    ID: 111,
    challengerID: 1999,
    challengerTeam: 'Real Madrid',
    challengerScore: 1,
    defenderId: 3239,
    defenderScore: 3,
    defenderTeam: 'Whitecaps',
    timestamp : 1481193075
})
*
