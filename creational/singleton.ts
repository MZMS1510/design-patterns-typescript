class Player {
  static instance: Player | undefined;
  isAlive: boolean = false
  
  constructor() {}
  
  static getPlayer(): Player {
    if (!Player.instance) {
      Player.instance = new Player();
    }

    return Player.instance;
  }
}

const player: Player = Player.getPlayer();
player.isAlive = true;
console.log(player.isAlive);

const player2 = Player.getPlayer();
player2.isAlive = false;
console.log(player2.isAlive);

console.log(player.isAlive);