<template>
  <div class="wrapper">
    <div class="main__body">
      <div class="main__content">
        <h1 class="main__h1">Привет!</h1>
        <div class="main__sm-text">
          это хаб на 4 игры, регестрируйся и вперед!
        </div>
        <div class="main__auth">
          <Login />
        </div>
      </div>
    </div>
    <div class="main__black"></div>
  </div>
</template>

<script>
import Login from "../Login";
export default {
  components: {
    Login
  },
  data() {
    return {
      msg: "Вхоasd  д"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-form {
  color: white;
  font-family: Montserrat;
}
.main__auth {
  position: relative;
}
.main__content {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main__login {
  position: relative;
  z-index: 99;
}
.main__black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 1;
  opacity: 0.8;
}

.main__sm-text {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 60px;
}
.main__h1 {
  color: white;
  text-transform: uppercase;
}
.main__body {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("../../img/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: auto;
}
.main__bg {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.1;
}
.main__h1 {
  animation: 3s linear 2s infinite running jump;
}
@keyframes jump {
  0% {
    transform: scale(1);
    color: #326db3;
  }
  50% {
    transform: scale(1.3);
    color: #00aa9e;
  }
  100% {
    transform: scale(1);
    color: #326db3;
  }
}
</style>
