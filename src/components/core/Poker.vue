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
            <div class="poker__column column1 active">
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
            <div class="poker__column column2">
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
            <div class="poker__column column3">
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
            <div class="poker__column column4">
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
            <div class="poker__column column5">
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
            <h1>${{coinPrice}}</h1>
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
            <button class="poker__btn-hold btn-poker btn-1">ДЕРЖАТЬ</button>
            <img id="card1" src="../../img/hr.jpg" alt />
          </div>
          <div class="poker__card">
            <button class="poker__btn-hold btn-poker btn-2">ДЕРЖАТЬ</button>
            <img id="card2" src="../../img/hr.jpg" alt />
          </div>
          <div class="poker__card">
            <button class="poker__btn-hold btn-poker btn-3">ДЕРЖАТЬ</button>
            <img id="card3" src="../../img/hr.jpg" alt />
          </div>
          <div class="poker__card">
            <button class="poker__btn-hold btn-poker btn-4">ДЕРЖАТЬ</button>
            <img id="card4" src="../../img/hr.jpg" alt />
          </div>
          <div class="poker__card">
            <button class="poker__btn-hold btn-poker btn-5">ДЕРЖАТЬ</button>
            <img id="card5" src="../../img/hr.jpg" alt />
          </div>
        </div>
      </div>
      <div class="poker__btn-row">
        <button class="btn-poker">ПОВЫСИТЬ</button>
        <button class="btn-poker">РАЗДАЧА</button>
        <h1>ДЕНЬГИ ${{money}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 12000,
      coinPrice: 25,
    };
  },
};
</script>

<style>
.active{
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
.poker__btn-row button{
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
.poker__column.active{
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