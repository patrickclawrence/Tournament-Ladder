mongo = require('mongodb');

var mongo = {

    getPerson: function(userName){
        return {
            name: 'Test User',
            ID: 1999,
            avatar: 'None',
            PIN: '1234',
            email: 'testUser@gmail.com'
        };
    },
    setPerson: function(){
        return: true;
    },
    getChallenge: function(){
        return {
            ID: 1,
            challengerID: 1999,
            defenderID: 3239,
            timestamp: 1482193075  
        }
    },
    setChallenge: function(){
        return true;
    }
    getMatch: function(){
        return {
            ID: 111,
            challengerID: 1999,
            challengerTeam: 'Real Madrid',
            challengerScore: 1,
            defenderId: 3239,
            defenderScore: 3,
            defenderTeam: 'Whitecaps',
            timestamp : 1481193075
        }
    },
}






if (!(typeof exports === 'undefined')) {
    exports.mongo = mongo;
};