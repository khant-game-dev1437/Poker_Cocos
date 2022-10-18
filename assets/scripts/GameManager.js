// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  extends: cc.Component,

  properties: {
    cardPrefab: cc.Prefab,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.cardList = [];
    this.playerA = [];
    this.playerB = [];
    this.playerC = [];

    this.playerASprite = [];
    this.playerBSprite = [];
    this.playerCSprite = [];

    this.playerANew = [];
    this.playerBNew = [];
    this.playerCNew = [];

    this.cards = [];

    this.playerTurnState = "PlayerB";
    this.card1 = [1, 14, 27, 40];
    this.card2 = [2, 15, 28, 41];
    this.card3 = [3, 16, 29, 42];
    this.card4 = [4, 17, 30, 43];
    this.card5 = [5, 18, 31, 44];
    this.card6 = [6, 19, 32, 45];
    this.card7 = [7, 20, 33, 46];
    this.card8 = [8, 21, 34, 47];
    this.card9 = [9, 22, 35, 48];
    this.card10 = [10, 23, 36, 49];
    this.cardJack = [11, 24, 37, 50];
    this.cardQueen = [12, 25, 38, 51];
    this.cardKing = [13, 26, 39, 52];

    this.subtractCards = 52;
    this.loadResources();

    this.playerAFirstTime = true;
    this.playerBFirstTime = true;

    this.playerACounter = 0;

    this.cardDisFinished = false;

    this.winnerName = "";
    this.UIManager = cc.find("Canvas").getComponent("UIManager");
  },

  start() {
    this.init();
    this.totalCards();
  },

  init() {
    this.UIManager.btnStartGame.node.on("click", () => {
      this.UIManager.btnStartGame.node.active = false;
      this.startGame();
    });
  },

  //Total Cards
  totalCards() {
    var count = 0;
    for (var i = 0; i <= 4; i++) {
      if (count > 3) {
        break;
      }
      for (var j = 1; j < 14; j++) {
        this.cardList.push(j);
      }
      count++;
    }
  },

  distributeCards() {
    var disInterval = setInterval(() => {
      var no = Math.floor(Math.random() * (this.subtractCards - 0));
      if (this.cardList.length == 2) {
        this.playerC.push(this.cardList[0]);
        console.log("this C ", this.cardList[0]);
        this.chooseCard(this.cardList[0], "PlayerC");
        this.cardList.splice(0, 2);
        this.cardDisFinished = true;
        clearInterval(disInterval);
        console.log(
          "cardListLength after subtractCards ",
          this.cardList.length
        );
        console.log("PlayerA ", this.playerA);
        console.log("PlayerB ", this.playerB);
        console.log("PlayerC ", this.playerC);
        return;
      }
      if (this.playerTurnState == "PlayerB") {
        this.playerB.push(this.cardList[no]);
        this.chooseCard(this.cardList[no], this.playerTurnState);
        this.playerTurnState = "PlayerA";
        this.cardList.splice(no, 1);
        this.subtractCards--;
        clearInterval(disInterval);
        this.distributeCards();
        return;
      } else if (this.playerTurnState == "PlayerA") {
        this.playerA.push(this.cardList[no]);
        this.chooseCard(this.cardList[no], this.playerTurnState);
        this.playerTurnState = "PlayerB";
        this.cardList.splice(no, 1);
        this.subtractCards--;
        clearInterval(disInterval);
        this.distributeCards();
        return;
      }
    }, 100);
  },

  loadResources() {
    cc.loader.loadResDir("card", cc.SpriteFrame, (err, sprite) => {
      for (var i = 0; i < sprite.length; i++) {
        this.cards.push(sprite[i]);
      }
    });
  },

  chooseCard(cardNo, playerState) {
    console.log("card NO", cardNo);
    switch (cardNo) {
      case 1:
        var no = Math.floor(Math.random() * (this.card1.length - 0));
        this.matchCardWithSprite(this.card1[no], playerState);
        break;
      case 2:
        var no = Math.floor(Math.random() * (this.card2.length - 0));
        this.matchCardWithSprite(this.card2[no], playerState);
        break;
      case 3:
        var no = Math.floor(Math.random() * (this.card3.length - 0));
        this.matchCardWithSprite(this.card3[no], playerState);
        break;
      case 4:
        var no = Math.floor(Math.random() * (this.card4.length - 0));
        this.matchCardWithSprite(this.card4[no], playerState);
        break;
      case 5:
        var no = Math.floor(Math.random() * (this.card5.length - 0));
        this.matchCardWithSprite(this.card5[no], playerState);
        break;
      case 6:
        var no = Math.floor(Math.random() * (this.card6.length - 0));
        this.matchCardWithSprite(this.card6[no], playerState);
        break;
      case 7:
        var no = Math.floor(Math.random() * (this.card7.length - 0));
        this.matchCardWithSprite(this.card7[no], playerState);
        break;
      case 8:
        var no = Math.floor(Math.random() * (this.card8.length - 0));
        this.matchCardWithSprite(this.card8[no], playerState);
        break;
      case 9:
        var no = Math.floor(Math.random() * (this.card9.length - 0));
        this.matchCardWithSprite(this.card9[no], playerState);
        break;
      case 10:
        var no = Math.floor(Math.random() * (this.card10.length - 0));
        this.matchCardWithSprite(this.card10[no], playerState);
        break;
      case 11:
        var no = Math.floor(Math.random() * (this.cardJack.length - 0));
        this.matchCardWithSprite(this.cardJack[no], playerState);
        break;
      case 12:
        var no = Math.floor(Math.random() * (this.cardQueen.length - 0));
        this.matchCardWithSprite(this.cardQueen[no], playerState);
        break;
      case 13:
        var no = Math.floor(Math.random() * (this.cardKing.length - 0));
        this.matchCardWithSprite(this.cardKing[no], playerState);
        break;
    }
  },

  //Match Card Numbers to Sprites
  matchCardWithSprite(no, playerState) {
    console.log("no ", no);
    console.log("cards ", this.cards.length);
    for (var i = 0; i < this.cards.length; i++) {
      if (no == this.cards[i].name) {
        const cardObj = cc.instantiate(this.cardPrefab);
        cardObj.getComponent(cc.Sprite).spriteFrame = this.cards[i];
        if (playerState == "PlayerA") {
          cc.tween(cardObj)
            .to(0.1, {
              position: cc.v2(
                this.UIManager.playerATransform.x,
                this.UIManager.playerATransform.y
              ),
            })
            .start();

          var json = {
            cardNo: no,
            cardSuit: this.cards[i],
          };
          this.playerASprite.push(json);

          this.UIManager.playerATransform.addChild(cardObj);
        } else if (playerState == "PlayerB") {
          cc.tween(cardObj)
            .to(0.1, {
              position: cc.v2(
                this.UIManager.playerBTransform.x,
                this.UIManager.playerBTransform.y
              ),
            })
            .start();
          var json = {
            cardNo: no,
            cardSuit: this.cards[i],
          };
          this.playerBSprite.push(json);

          this.UIManager.playerBTransform.addChild(cardObj);
        } else if (playerState == "PlayerC") {
          cc.tween(cardObj)
            .to(0.1, {
              position: cc.v2(
                this.UIManager.CTransform.x,
                this.UIManager.CTransform.y
              ),
            })
            .start();
          this.UIManager.CTransform.addChild(cardObj);
        }
        console.log("card Number : " + no);
      }
    }
  },

  startGame() {
    this.distributeCards();
    var stInterval = setInterval(() => {
      while (this.cardDisFinished) {
        console.log("lee phyit");
        this.UIManager.background.node.on(
          "touchstart",
          () => {
            this.processingGame();
            //clearInterval(stInterval);
          },
          this
        );
        clearInterval(stInterval);
        this.cardDisFinished = false;
      }
    }, 1000);
  },

  processingGame() {
    console.log("playerState ", this.playerTurnState);
    if (this.playerTurnState == "PlayerB") {
      if (this.UIManager.playerBTransform.children.length <= 0) {
        return;
      }
      var b = this.playerB[0];
      this.playerC.push(b);
      this.UIManager.playerBTransform.children[0].destroy();
      const cardObj = cc.instantiate(this.cardPrefab);
      cardObj.getComponent(cc.Sprite).spriteFrame =
        this.playerBSprite[0].cardSuit;

      this.playerBSprite.splice(0, 1);
      cc.tween(cardObj)
        .to(0.1, {
          position: cc.v2(
            this.UIManager.CTransform.x,
            this.UIManager.CTransform.y
          ),
        })
        .start();
      this.UIManager.CTransform.addChild(cardObj);
      for (var i = 0; i < this.playerC.length - 1; i++) {
        if (b == this.playerC[i]) {
          for (var j = i; j < this.playerC.length; j++) {
            this.playerB.push(this.playerC[j]);
            console.log("mmspB", this.playerC[j]);
            this.chooseCard(this.playerC[j], "PlayerB");
          }
          this.playerC.splice(i, this.playerC.length);
          for (var k = i; k < this.UIManager.CTransform.children.length; k++) {
            if (this.UIManager.CTransform.children.length <= 0) {
              return;
            }
            this.UIManager.CTransform.children[k].destroy();
          }
          this.playerTurnState = "PlayerB";
        } else {
          this.playerTurnState = "PlayerA";
        }
      }

      this.playerB.splice(0, 1);

      console.log("B", this.playerB);
      console.log("C", this.playerC);
    } else if (this.playerTurnState == "PlayerA") {
      if (this.UIManager.playerATransform.children.length <= 0) {
        return;
      }
      var a = this.playerA[0];
      this.playerC.push(a);
      this.UIManager.playerATransform.children[0].destroy();
      const cardObj = cc.instantiate(this.cardPrefab);
      cardObj.getComponent(cc.Sprite).spriteFrame =
        this.playerASprite[0].cardSuit;

      this.playerASprite.splice(0, 1);
      cc.tween(cardObj)
        .to(0.01, {
          position: cc.v2(
            this.UIManager.CTransform.x,
            this.UIManager.CTransform.y
          ),
        })
        .start();
      this.UIManager.CTransform.addChild(cardObj);
      for (var i = 0; i < this.playerC.length - 1; i++) {
        if (a == this.playerC[i]) {
          for (var j = i; j < this.playerC.length; j++) {
            this.playerA.push(this.playerC[j]);
            console.log("mmspA", this.playerC[j]);
            this.chooseCard(this.playerC[j], "PlayerA");
          }
          this.playerC.splice(i, this.playerC.length);
          for (var k = i; k < this.UIManager.CTransform.children.length; k++) {
            if (this.UIManager.CTransform.children.length <= 0) {
              return;
            }
            this.UIManager.CTransform.children[k].destroy();
          }
          this.playerTurnState = "PlayerA";
        } else {
          this.playerTurnState = "PlayerB";
        }
      }
      this.playerA.splice(0, 1);
      console.log("A", this.playerA);
      console.log("C", this.playerC);
    }

    if (this.playerA.length == 0) {
      this.winnerName = "PlayerB wins";
    } else if (this.playerB.length == 0) {
      this.winnerName = "PlayerA";
    }
    if (this.winnerName != "") {
      this.UIManager.winnerLabel.getComponent(cc.Label).string =
        this.winnerName;
      console.log("naing p ha");
    }
    console.log("winnerName ", this.winnerName);
  },
});
