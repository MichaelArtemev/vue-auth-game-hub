<template>
  <div class="game-hub">
    <div class="game-hub__body">
      <div class="game-hub__header"><Header /></div>
      <div class="game-hub__games-row">
        <div class="game-hub__game-block">
          <a href="/snake">
            <div class="game-hub__game snake">
              <div class="game-hub__curtain"></div>
            </div>
            <h1 class="game-hub__h1">ЗМЕЙКА</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      userName: null
    };
  },
  created: function() {
    this.getUserName();
  },
  methods: {
    getUserName() {
      let currentSessionName = JSON.parse(localStorage.user);
      this.userName = currentSessionName.name.toUpperCase();
    }
  }
};
</script>

<style>
.game-hub__games-row {
  display: flex;
  color: #00aa9e;
  justify-content: center;
}
.game-hub__game {
  width: 350px;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: 0.4s;
}
.game-hub__curtain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #326db3;
  opacity: 0;
  cursor: pointer;
  transition: 0.4s;
}
.game-hub__game:hover .game-hub__curtain {
  opacity: 0.4;
}
.snake {
  background-image: url("../../img/g1.jpg");
}
.game-hub__body {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
