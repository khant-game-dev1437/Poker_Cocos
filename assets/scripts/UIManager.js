const gameMana = require("./GameManager");
// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start() {
    this.init();
  },

  init() {
    this.background = cc.find(BACKGROUND).getComponent(cc.Sprite);
    this.btnStartGame = cc.find(BTN_START_GAME.SELF).getComponent(cc.Button);

    this.playerATransform = cc.find(PLAYER_A_TRANSFORM.A_NODE);
    this.playerBTransform = cc.find(PLAYER_B_TRANSFORM.B_NODE);
    this.CTransform = cc.find(PLAYER_C_TRANSFORM.C_NODE);
    this.winnerLabel = cc.find(WINNER_NAME);
  },
  // update (dt) {},
});
