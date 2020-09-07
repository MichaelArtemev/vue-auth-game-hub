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
          <div class="poker__info-top">
            <h1>ВЫИГРЫШ</h1>
            <h1>${{currentWinMoney}}</h1>
            <h4>фишек = {{this.currentPrice}}</h4>
            <h4>комбо</h4>
            <h4>${{currentCombo}}</h4>
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
            >ЗАМЕНА</button>
            <!-- <img ref="card1" id="card1" src="../../img/hr.jpg" alt /> -->
            <div ref="card1" class="card-i card1"></div>
          </div>
          <div class="poker__card">
            <button
              @click="holdCard"
              disabled
              ref="btn2"
              class="poker__btn-hold btn-poker btn-2"
            >ЗАМЕНА</button>
            <!-- <img ref="card2" id="card2" src="../../img/hr.jpg" alt /> -->
            <div ref="card2" class="card-i card2"></div>
          </div>
          <div class="poker__card">
            <button
              @click="holdCard"
              disabled
              ref="btn3"
              class="poker__btn-hold btn-poker btn-3"
            >ЗАМЕНА</button>
            <!-- <img ref="card3" id="card3" src="../../img/hr.jpg" alt /> -->
            <div ref="card3" class="card-i card3"></div>
          </div>
          <div class="poker__card">
            <button
              @click="holdCard"
              disabled
              ref="btn4"
              class="poker__btn-hold btn-poker btn-4"
            >ЗАМЕНА</button>
            <!-- <img ref="card4" id="card4" src="../../img/hr.jpg" alt /> -->
            <div ref="card4" class="card-i card4"></div>
          </div>
          <div class="poker__card">
            <button
              @click="holdCard"
              disabled
              ref="btn5"
              class="poker__btn-hold btn-poker btn-5"
            >ЗАМЕНА</button>
            <!-- <img ref="card5" id="card5" src="../../img/hr.jpg" alt /> -->
            <div ref="card5" class="card-i card5"></div>
          </div>
        </div>
      </div>
      <div class="poker__btn-row">
        <button ref="upPriceBtn" @click="addCoin" class="btn-poker">ПОВЫСИТЬ</button>
        <button ref='btnGetDeck' @click="getDeck" class="btn-poker poker-main-btn">{{currentAction}}</button>
        <h1>ДЕНЬГИ ${{money}}</h1>
      </div>
      <div class="poker__back">
        <button @click="back" class="btn">BACK TO HUB</button>
      </div>
    </div>
  </div>
</template>

<script>
import { cardSuites } from "../../js/data/pokerConsts.js";
import { getResult } from "../../js/pokerAlgoritms.js";
import { getMoney } from "../../js/pokerAlgoritms.js";

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
      currentWinMoney: 0,
      currentCombo: null,
      currentAction: "РАЗДАЧА",
    };
  },
  mounted: function () {
    for (let i = 1; i <= 5; i++) {
      this.porekHoldButtons.push(eval("this.$refs.btn" + i));
    }
    for (let i = 1; i <= 5; i++) {
      this.pokerColumn.push(eval("this.$refs.column" + i));
    }
    for (let i = 1; i <= 5; i++) {
      this.cards.push(eval("this.$refs.card" + i));
    }
  },
  methods: {
    holdCardCheck: function (elemIndex, e) {
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
        this.cards[elemIndex].style.transform = "rotate(0)";
        let index = this.selection.indexOf(this.currentDeck[elemIndex]);
        this.selection.splice(index, 1);
      } else {
        this.cards[elemIndex].style.transform = "rotate(-15deg)";
        this.selection.push(this.currentDeck[elemIndex]);
        e.target.classList.add("selected");
      }
    },
    resetDeg: function () {
      for (let i = 0; i <= 4; i++) {
        this.cards[i].style.transform = "rotate(0deg)";
      }
    },
    holdCard: function (e) {
      if (e.target.classList[2] === "btn-1") {
        this.holdCardCheck(0, e);
      }
      if (e.target.classList[2] === "btn-2") {
        this.holdCardCheck(1, e);
      }
      if (e.target.classList[2] === "btn-3") {
        this.holdCardCheck(2, e);
      }
      if (e.target.classList[2] === "btn-4") {
        this.holdCardCheck(3, e);
      }
      if (e.target.classList[2] === "btn-5") {
        this.holdCardCheck(4, e);
      }
      console.log(this.selection);
    },
    /**
     * Генерирует 5 карт для руки, вырезает выбранные карты. взаимодействует с интерфейсом отдавая
     * информацию о текущих результатах и проверяет комбинацию на выигрышь.
     */
    getDeck: function () {
      const cardSuit = cardSuites;

      function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      // возвращает массив из 5 карт
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
        let iterator = 0;
        let finalArr = [];
        let deckCLone = cardSuit.slice(0);
        while (iterator <= 4) {
          finalArr.push(deckCLone[arr[iterator]]);
          iterator++;
        }
        return finalArr;
      }
      //первая фаза отрисовки
      if (this.phaseCheck === 0) {
        this.$refs.btnGetDeck.style.backgroundColor = "yellow";
        this.selection = [];
        this.currentDeck = getArr();

        for (let i = 1; i <= 5; i++) {
          this.cards[i - 1].style.backgroundImage = `url('/static/cards/${
            this.currentDeck[i - 1]
          }')`;
        }
        for(let i = 0; i <= 4; i++){
          this.porekHoldButtons[i].classList.remove("selected");
        }
        for (let i = 0; i <= this.porekHoldButtons.length - 1; i++) {
          this.porekHoldButtons[i].removeAttribute("disabled");
        }
        this.phaseCheck = 1;

        switch (this.currentPrice) {
          case 1:
            this.money -= 25;
            break;
          case 2:
            this.money -= 50;
            break;
          case 3:
            this.money -= 75;
            break;
          case 4:
            this.money -= 100;
            break;
          case 5:
            this.money -= 125;
            break;
          default:
            alert("Нет таких значений");
        }
        this.$refs.upPriceBtn.setAttribute("disabled", "disabled");
        this.currentAction = "РАЗДАЧА";
      } else {
        //вторая фаза отрисовки        
        this.resetDeg();
        this.$refs.upPriceBtn.removeAttribute('disabled');
        for (let i = 0; i <= this.porekHoldButtons.length - 1; i++) {
          this.porekHoldButtons[i].setAttribute("disabled", "disabled");
        }
        this.currentAction = "НОВАЯ ИГРА";
        this.$refs.btnGetDeck.style.backgroundColor = "green";
        let cardsClone = cardSuit.slice(0);
        let cardIndex = null;
        let cardBlocks = 0;

        for (let i = 0; i <= this.selection.length - 1; i++) {
          cardIndex = cardsClone.indexOf(this.selection[i]);
          let deckClear = this.currentDeck.indexOf(this.selection[i]);
          cardsClone.splice(cardIndex, 1);
          this.currentDeck.splice(deckClear, 1);
          cardBlocks++;
        }

        let cardToHold = [];
        //проверят наличие выбранных карт и добавляет их в массив выбранных карт
        if (cardBlocks != 0) {
          for (let i = 0; i <= 4; i++) {
            if (this.porekHoldButtons[i].classList.contains("selected")) {
              cardToHold.push(this.porekHoldButtons[i].classList[2]);
            }
          }
        }
        let lengthFix = this.currentDeck.length;
        let result = 5 - lengthFix;
        for (let i = 0; i <= result - 1; i++) {
          let rnd = 0 - 0.5 + Math.random() * (cardsClone.length - 1 - 0 + 1);
          let average = Math.round(rnd);
          this.currentDeck.push(cardsClone[average]);
        }
        for (let i = 0; i <= 4; i++) {
          this.cards[
            i
          ].style.backgroundImage = `url('/static/cards/${this.currentDeck[i]}')`;
        }
        //клон для убийства обсервера
        let arrToPipe = this.currentDeck.slice();
        let res = getResult(arrToPipe);
        let moneyWin = getMoney(res[0], this.currentPrice);
        this.money += moneyWin;
        this.currentCombo = res[1];
        this.currentWinMoney = moneyWin;
        console.log(res[0]);
        console.log(res[1]);

        console.log(moneyWin);
        this.phaseCheck = 0;        
      }
    },
    back: function () {
      this.$router.push({ name: "GameHub" });
    },
    addCoin: function () {
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