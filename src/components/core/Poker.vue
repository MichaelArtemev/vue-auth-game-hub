<template>
  <div class="poker">
    <div class="poker__body">
      <div class="poker__content">
        <div class="poker__price">
          <div class="poker__row">
            <h2>ПОСТАВЛЕНО фишек</h2>
            <ul>
              <li>
                <h2>1</h2>
              </li>
              <li>
                <h2>2</h2>
              </li>
              <li>
                <h2>3</h2>
              </li>
              <li>
                <h2>4</h2>
              </li>
              <li>
                <h2>5</h2>
              </li>
            </ul>
          </div>
          <div class="poker__columns-wrapper">
            <div class="poker__column">
              <h3>РОЯЛ ФЛЕШ</h3>
              <h3>СТРИТ ФЛЕШ</h3>
              <h3>КАРЕ</h3>
              <h3>ФУЛЛ-ХАУС</h3>
              <h3>ФЛЕШ</h3>
              <h3>СТРИТ</h3>
              <h3>ТРОЙКА</h3>
              <h3>ДВЕ ПАРЫ</h3>
              <h3>ВАЛЕТЫ И СТАРШЕ</h3>
            </div>
            <div ref="column1" class="poker__column column1 active">
              <h3>250</h3>
              <h3>50</h3>
              <h3>25</h3>
              <h3>9</h3>
              <h3>6</h3>
              <h3>4</h3>
              <h3>3</h3>
              <h3>2</h3>
              <h3>1</h3>
            </div>
            <div ref="column2" class="poker__column column2">
              <h3>500</h3>
              <h3>100</h3>
              <h3>50</h3>
              <h3>18</h3>
              <h3>12</h3>
              <h3>8</h3>
              <h3>6</h3>
              <h3>4</h3>
              <h3>2</h3>
            </div>
            <div ref="column3" class="poker__column column3">
              <h3>750</h3>
              <h3>150</h3>
              <h3>75</h3>
              <h3>27</h3>
              <h3>18</h3>
              <h3>12</h3>
              <h3>9</h3>
              <h3>6</h3>
              <h3>3</h3>
            </div>
            <div ref="column4" class="poker__column column4">
              <h3>1000</h3>
              <h3>200</h3>
              <h3>100</h3>
              <h3>36</h3>
              <h3>24</h3>
              <h3>16</h3>
              <h3>12</h3>
              <h3>8</h3>
              <h3>4</h3>
            </div>
            <div ref="column5" class="poker__column column5">
              <h3>4000</h3>
              <h3>250</h3>
              <h3>125</h3>
              <h3>45</h3>
              <h3>30</h3>
              <h3>20</h3>
              <h3>15</h3>
              <h3>10</h3>
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div class="poker__bet">
          <div class="poker__info-top">
            <h1>ЦЕНА ФИШКИ</h1>
            <h1>${{coidDefault}}</h1>
          </div>
          <div class="poker__info-top">
            <h1>СТАВКА</h1>
            <h1>${{coinPrice}}</h1>
          </div>
        </div>
      </div>
      <div class="poker__cards">
        <div class="poker__cards-row">
          <div class="poker__card">
            <button
              @click="holdCard"
              disabled
              ref="btn1"
              class="poker__btn-hold btn-poker btn-1"
            >ДЕРЖАТЬ</button>
            <!-- <img ref="card1" id="card1" src="../../img/hr.jpg" alt /> -->
            <div ref="card1" class="card-i card1"></div>
          </div>
          <div class="poker__card">
            <button @click="holdCard" disabled ref="btn2" class="poker__btn-hold btn-poker btn-2">ДЕРЖАТЬ</button>
            <!-- <img ref="card2" id="card2" src="../../img/hr.jpg" alt /> -->
            <div ref="card2" class="card-i card2"></div>
          </div>
          <div class="poker__card">
            <button @click="holdCard" disabled ref="btn3" class="poker__btn-hold btn-poker btn-3">ДЕРЖАТЬ</button>
            <!-- <img ref="card3" id="card3" src="../../img/hr.jpg" alt /> -->
            <div ref="card3" class="card-i card3"></div>
          </div>
          <div class="poker__card">
            <button @click="holdCard" disabled ref="btn4" class="poker__btn-hold btn-poker btn-4">ДЕРЖАТЬ</button>
            <!-- <img ref="card4" id="card4" src="../../img/hr.jpg" alt /> -->
            <div ref="card4" class="card-i card4"></div>
          </div>
          <div class="poker__card">
            <button @click="holdCard" disabled ref="btn5" class="poker__btn-hold btn-poker btn-5">ДЕРЖАТЬ</button>
            <!-- <img ref="card5" id="card5" src="../../img/hr.jpg" alt /> -->
            <div ref="card5" class="card-i card5"></div>
          </div>
        </div>
      </div>
      <div class="poker__btn-row">
        <button @click="addCoin" class="btn-poker">ПОВЫСИТЬ</button>
        <button @click="getDeck" class="btn-poker">РАЗДАЧА</button>
        <h1>ДЕНЬГИ ${{money}}</h1>
      </div>
      <div class="poker__back">
        <button @click="back" class="btn">BACK TO HUB</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 12000,
      coidDefault: 25,
      coinPrice: 25,
      currentPrice: 1,
      pokerColumn: [],
      porekHoldButtons: [],
      phaseCheck: 0,
      selection: [],
      cards: [],
      currentDeck: null,
    };
  },
  mounted: function () {
    //не смог придумать динамический сбор имени проблема с ref,поскольку мало элементов, решил просто в ручную
    this.pokerColumn.push(this.$refs.column1);
    this.pokerColumn.push(this.$refs.column2);
    this.pokerColumn.push(this.$refs.column3);
    this.pokerColumn.push(this.$refs.column4);
    this.pokerColumn.push(this.$refs.column5);

    this.porekHoldButtons.push(this.$refs.btn1);
    this.porekHoldButtons.push(this.$refs.btn2);
    this.porekHoldButtons.push(this.$refs.btn3);
    this.porekHoldButtons.push(this.$refs.btn4);
    this.porekHoldButtons.push(this.$refs.btn5);

    this.cards.push(this.$refs.card1);
    this.cards.push(this.$refs.card2);
    this.cards.push(this.$refs.card3);
    this.cards.push(this.$refs.card4);
    this.cards.push(this.$refs.card5);
  },
  methods: {
    holdCard: function (e) {            
      if (e.target.classList[2] === "btn-1") {
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
          this.cards[0].style.transform = "rotate(0)";
          let index = this.selection.indexOf(this.currentDeck[0]);  
          this.selection.splice(index, 1);        
        } else {
          this.cards[0].style.transform = "rotate(-15deg)";
          this.selection.push(this.currentDeck[0]);
          e.target.classList.add("selected");
        }
      }
      if (e.target.classList[2] === "btn-2") {
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
          this.cards[1].style.transform = "rotate(0)";
          let index = this.selection.indexOf(this.currentDeck[1]);  
          this.selection.splice(index, 1);        
        } else {
          this.cards[1].style.transform = "rotate(-15deg)";
          this.selection.push(this.currentDeck[1]);
          e.target.classList.add("selected");
        }
      }
      if (e.target.classList[2] === "btn-3") {
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
          this.cards[2].style.transform = "rotate(0)";
          let index = this.selection.indexOf(this.currentDeck[2]);  
          this.selection.splice(index, 1);        
        } else {
          this.cards[2].style.transform = "rotate(-15deg)";
          this.selection.push(this.currentDeck[2]);
          e.target.classList.add("selected");
        }
      }
      if (e.target.classList[2] === "btn-4") {
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
          this.cards[3].style.transform = "rotate(0)";
          let index = this.selection.indexOf(this.currentDeck[3]);  
          this.selection.splice(index, 1);        
        } else {
          this.cards[3].style.transform = "rotate(-15deg)";
          this.selection.push(this.currentDeck[3]);
          e.target.classList.add("selected");
        }
      }
      if (e.target.classList[2] === "btn-5") {
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
          this.cards[4].style.transform = "rotate(0)";
          let index = this.selection.indexOf(this.currentDeck[4]);  
          this.selection.splice(index, 1);        
        } else {
          this.cards[4].style.transform = "rotate(-15deg)";
          this.selection.push(this.currentDeck[4]);
          e.target.classList.add("selected");
        }
      }
      console.log(this.selection);
      
    },
    getDeck: function () {
      const cardSuit = [
        "1b.jpg",
        "2b.jpg",
        "3b.jpg",
        "4b.jpg",
        "5b.jpg",
        "6b.jpg",
        "7b.jpg",
        "8b.jpg",
        "9b.jpg",
        "10b.jpg",
        "11b.jpg",
        "12b.jpg",
        "13b.jpg",
        "1h.jpg",
        "2h.jpg",
        "3h.jpg",
        "4h.jpg",
        "5h.jpg",
        "6h.jpg",
        "7h.jpg",
        "8h.jpg",
        "9h.jpg",
        "10h.jpg",
        "11h.jpg",
        "12h.jpg",
        "13h.jpg",
        "1k.jpg",
        "2k.jpg",
        "3k.jpg",
        "4k.jpg",
        "5k.jpg",
        "6k.jpg",
        "7k.jpg",
        "8k.jpg",
        "9k.jpg",
        "10k.jpg",
        "11k.jpg",
        "12k.jpg",
        "13k.jpg",
        "1t.jpg",
        "2t.jpg",
        "3t.jpg",
        "4t.jpg",
        "5t.jpg",
        "6t.jpg",
        "7t.jpg",
        "8t.jpg",
        "9t.jpg",
        "10t.jpg",
        "11t.jpg",
        "12t.jpg",
        "13t.jpg",
      ];
      //   const card1 = this.$refs.card1;
      //   const card2 = this.$refs.card2;
      //   const card3 = this.$refs.card3;
      //   const card4 = this.$refs.card4;
      //   const card5 = this.$refs.card5;

      function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      function getArr() {
        let arr = [];
        for (let i = 0; i <= 4; i++) {
          let current = randomInteger(0, 51);
          if (arr.indexOf(current) != -1) {
            while (arr.indexOf(current) != -1) {
              current = randomInteger(0, 51);
            }
          }

          arr.push(current);
        }
        // return arr;
        let iterator = 0;
        let finalArr = [];
        let deckCLone = cardSuit.slice(0);
        while (iterator <= 4) {
          finalArr.push(deckCLone[arr[iterator]]);
          //   deckCLone.splice([arr[iterator]], 1);
          iterator++;
        }

        return finalArr;
      }

      if (this.phaseCheck === 0) {
        this.currentDeck = getArr();

        for (let i = 1; i <= 5; i++) {
          this.cards[i - 1].style.backgroundImage = `url('/static/cards/${
            this.currentDeck[i - 1]
          }')`;
        }
        for (let i = 0; i <= this.porekHoldButtons.length - 1; i++) {
          this.porekHoldButtons[i].removeAttribute("disabled");
        }
        this.phaseCheck = 1;
      } else {
        alert(123);
        this.phaseCheck = 0;
      }
    },
    back: function () {
      this.$router.push({ name: "GameHub" });
    },
    addCoin: function () {
      console.log(this.pokerColumn[0]);

      this.currentPrice++;
      if (this.currentPrice >= 6) {
        this.currentPrice = 1;
      }
      switch (this.currentPrice) {
        case 1:
          this.pokerColumn[4].classList.remove("active");
          this.pokerColumn[0].classList.add("active");
          this.coinPrice = 25;
          break;
        case 2:
          this.coinPrice = 50;
          this.pokerColumn[0].classList.remove("active");
          this.pokerColumn[1].classList.add("active");
          break;
        case 3:
          this.coinPrice = 75;
          this.pokerColumn[1].classList.remove("active");
          this.pokerColumn[2].classList.add("active");
          break;
        case 4:
          this.coinPrice = 100;
          this.pokerColumn[2].classList.remove("active");
          this.pokerColumn[3].classList.add("active");
          break;
        case 5:
          this.coinPrice = 125;
          this.pokerColumn[3].classList.remove("active");
          this.pokerColumn[4].classList.add("active");
          break;
      }
    },
  },
};
</script>

<style>
button:disabled {
  text-decoration: line-through;
}
button:disabled:hover {
  transform: scale(1);
  background-color: #c3c6d9;
}
.active {
  background-color: #c23c00;
}
.poker__btn-row {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.poker__btn-row h1 {
  margin-left: 150px;
  color: #c22d19;
  text-shadow: -3px 0 #eecd66, 0 3px #eecd66, 3px 0 #eecd66, 0 -3px #eecd66;
}
.poker__btn-row button {
  margin-left: 70px;
}
.poker__btn-hold {
  margin-bottom: 20px;
}
.poker__card {
  margin-right: 70px;
}
.poker__cards-row {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.poker__card img {
  max-width: 150px;
  max-height: 250px;
}
.card-i {
  max-width: 150px;
  width: 150px;
  max-height: 250px;
  height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../../img/hr.jpg");
}
.card1 {
  /* background-image: url("../../img/cards/1b.jpg"); */
}
.btn-poker {
  background-color: #cacac0;
  color: #a9a6a1;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding: 10px 10px;
  min-width: 100px;
}
.btn-poker:hover {
  background-color: #fe8a0f;
}
.poker__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.poker__bet {
  margin-left: 80px;
  color: #c22d19;
  text-shadow: -3px 0 #eecd66, 0 3px #eecd66, 3px 0 #eecd66, 0 -3px #eecd66;
}
.poker__row {
  display: flex;
  color: #fffffa;
  align-items: center;
}
.poker__row ul {
  display: flex;
}
.poker__row ul li {
}
.poker__row ul li:nth-child(1) {
  margin-left: 5px;
}
.poker__row ul li:nth-child(2) {
  margin-left: 40px;
}
.poker__row ul li:nth-child(3) {
  margin-left: 45px;
}

.poker__row ul li:nth-child(4) {
  margin-left: 55px;
}
.poker__row ul li:nth-child(5) {
  margin-left: 125px;
}
.poker__row h2 {
  margin-right: 20px;
}
.poker__row:nth-child(3) {
  margin-left: 40px;
}
.poker__body {
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #161bcd;
}
.poker__columns-wrapper {
  display: flex;
  background-color: #0b0b0b;
  max-width: max-content;
  border: 5px solid #f3ff5f;
}
.poker__column {
  color: #effd2a;
  margin-left: 20px;
  text-align: start;
  background-color: #0b0b0b;
  border-right: 3px solid #f3ff5f;
  padding-right: 20px;
}
.poker__column.active {
  color: #c23c00;
}
.poker__column:not(:first-child) {
  text-align: end;
}
.poker__column:last-child {
  margin-left: 70px;
  padding-right: 40px;
}
</style>