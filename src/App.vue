<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
@import './css/normalize.css';
@import './css/blocks.css';
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  /* overflow: hidden; */
  min-height: 100%;
}
.ibg {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.ibg img {
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}

html,
body {
  /* height: 100%; */
  min-width: 320px;
  font-family: Montserrat;
}
</style>
