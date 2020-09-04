<template>
  <div class="snake__body">
    <div class="snake__content"></div>
    <div class="snake__btn"><button @click="back" class="btn">BACK TO HUB</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      KEY: { left: 37, up: 38, right: 39, down: 40 },
      snakeField: document.querySelector(".snake__content"),
      timer: null,
      directx: 0,
      direct: 0,
      direction: [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      fieldSizeX: 10,
      fieldSizeY: 10,
      length: 3,
      body: [
        [1, 1],
        [1, 2],
        [1, 3],
      ],
    };
  },
  methods: {
    initialisationSnake: function () {
      for (let i = 0; i < this.length; i++) {
        let currentBodyPart = this.body[i];
        document.getElementById(currentBodyPart.join()).className =
          "cell snake";
      }
    },
    move: function () {
      this.direct = this.directx;
      let body = this.body;
      let head = this.body[this.length - 1];

      let headCell = head.map((value, index) => {
        let av = value + this.direction[this.direct][index];

        return av;
      });

      this.compareEatOrGameOver(headCell, body);
      return headCell;
    },
    prepareGamePane: function (fieldSizeX, fieldSizeY) {
      for (let x = 0; x < fieldSizeX; x++) {
        let coordinateX = document.createElement("div");
        document.querySelector(".snake__content").appendChild(coordinateX);
        coordinateX.className = "field";
        for (let y = 0; y < fieldSizeY; y++) {
          let coordinateY = document.createElement("div");
          coordinateX.appendChild(coordinateY);
          coordinateY.className = "cell";
          coordinateY.id = `${x},${y}`;
        }
      }
      this.initialisationSnake();
      this.makeFood(fieldSizeX, fieldSizeY);
    },
    makeFood: function (fieldSizeX, fieldSizeY) {
      let x = Math.round(Math.random() * (fieldSizeX - 1));
      let y = Math.round(Math.random() * (fieldSizeY - 1));
      let food = document.getElementById(x + "," + y);
      if (food.className == "cell") {
        food.className = "cell food";
      } else {
        makeFood(fieldSizeX, fieldSizeY);
      }
      return food;
    },
    keyHandler(event) {
      switch (event.keyCode) {
        case this.KEY.left:
          if (this.direct != 0) {
            this.directx = 2;
          }
          break;
        case this.KEY.right:
          if (this.direct != 2) {
            this.directx = 0;
          }
          break;
        case this.KEY.up:
          if (this.direct != 1) {
            this.directx = 3;
          }
          break;
        case this.KEY.down:
          if (this.direct != 3) {
            this.directx = 1;
          }
          break;
        default:
          return;
      }
    },
    compareEatOrGameOver: function (headCell, body) {
      let tmp = document.getElementById(headCell.join());

      if (tmp == null) {
        if (headCell[0] == -1) headCell[0] = this.fieldSizeX - 1;
        if (headCell[0] == this.fieldSizeX) headCell[0] = 0;

        if (headCell[1] == -1) headCell[1] = this.fieldSizeY - 1;
        if (headCell[1] == this.fieldSizeY) headCell[1] = 0;
        tmp = document.getElementById(headCell.join());
      }
      if (tmp != null && tmp.className == "cell") {
        let removeTail = body.shift();
        body.push(headCell);
        document.getElementById(removeTail.join()).className = "cell";
        document.getElementById(headCell.join()).className = "cell snake";
      } else {
        if (tmp != null && tmp.className == "cell food") {
          this.length++;
          body.push(headCell);
          document.getElementById(headCell.join()).className = "cell snake";
          this.makeFood(this.fieldSizeX, this.fieldSizeY);
        } else {
          if (tmp.className == "cell snake") {
            clearInterval(this.timer);
            alert("Вы проиграли!");
          }
        }
      }
    },
    MediumStart: function() {
        let startMove = this.move;
      //средний
      this.timer = setInterval(() => {
        startMove();
      }, 200);
    },
    gamePrepare: function () {
      window.addEventListener("keydown", this.keyHandler, false);
      this.prepareGamePane(this.fieldSizeX, this.fieldSizeY);
    },
    back: function(){
        clearInterval(this.timer);
        this.$router.push({ name: 'GameHub' });
    }
  },
  mounted() {
    this.gamePrepare();
    this.MediumStart();
  },
};
</script>

<style>
.snake__body {
  background-color: #00ff7f;
  width: 100%;
  height: 100vh;
}
.snake__content{
    padding-top: 5%;
}
.field {
  z-index: 30;
  height: 23px;
  margin-left: 53px;
}
.snake__btn{
    margin-top: 50px;
    margin-left: 60px;
}
.cell {
  margin: 0;
  display: inline-block;
  background-color: white;
  border: 1px solid gray;
  width: 22px;
  height: 22px;
  z-index: 30;
}

.snake {
  background-color: burlywood;
  z-index: 30;
}

.food {
  background-color: plum;
  z-index: 30;
}
</style>