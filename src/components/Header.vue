<template>
  <div class="header">
    <div class="header__body">
      <div class="header__row">
        <div class="header__txt">Приятной игры!</div>
        <div class="header__name">User: {{ userName }}</div>
        <div class="header__btn"><button @click="logOut" class="btn">LOG OUT</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.userName = currentSessionName.email.toUpperCase();
    },
    logOut(){
        localStorage.clear();
        document.location.href = "/";
    }
  }
};
</script>

<style>
.header__name{
    text-transform: uppercase;
    font-weight: 700;
    color:#00aa9e;
}
.header__txt{
    color:#00aa9e;
}
.header__row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:2px solid #00aa9e;
    background-color: transparent;
}
.header__row > div{
    margin-left: 40px;
}
.header__btn{
    margin-right: 30px;
}
@media (max-width:680px){
    .header__txt{
        display: none;
    }
}
@media (max-width:380px){
    .header__name{
        display: none;
    }
}
</style>
