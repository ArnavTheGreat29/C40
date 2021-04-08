class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }
    getPlayerCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val()

        })
    }
    updatePlayerCount(countValue){
        database.ref('/').update({playerCount: countValue })
    }
    playerProfile(){
        database.ref('players/player'+ player.index).set({Name: this.name , Distance: this.distance})
    }
    static readPlayerInfo(){
        database.ref('players').on("value" , (data)=>{

            playerInfo = data.val()
        })
    }
}