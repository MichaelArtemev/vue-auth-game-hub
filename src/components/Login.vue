<template>
  <div class="login-form">
    <div class="login-form__wrapp" v-if="authCheck">
      <h4>LOGIN</h4>
      <form>
        <div class="inputs-field">
          <div class="login-form__email">
            <input
              placeholder="EMAIL"
              id="email_L"
              type="email"
              v-model="email"
              required             
            />
          </div>
          <div>
            <div class="login-form__pass">
              <input
                placeholder="PASSWORD"
                id="password_L"
                type="password"
                v-model="password"
                required
              />
            </div>
          </div>
        </div>
        <div class="btn-auth">
          <button type="submit" @click="handleSubmit">
            Login
          </button>
          <button type="submit" @click="changeTemplateReg">
            Registration
          </button>
        </div>
      </form>
    </div>
    <Register :tabfn="changeTemplateReg" v-else/>
  </div>
</template>
<script>
import Register from "./Register";

export default {
  components: {
    Register
  },
  data() {
    return {
      email: "",
      password: "",
      authCheck: true
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            let is_admin = response.data.user.is_admin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (is_admin == 1) {
                  this.$router.push("admin");
                } else {
                  this.$router.push("dashboard");
                }
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
            alert(error.response.data + " ЛОГИН ИЛИ ПАРОЛЬ НЕВЕРНЫЙ");
          });
      }
    },
    changeTemplateReg() {
      this.authCheck = !this.authCheck;
    }
  }
};
</script>

<style>
.login-form__email {
}
.login-form input {
  padding: 10px 20px;
  border-radius: 20px;
  color: #00aa9e;
  margin-bottom: 20px;
  text-align: center;
  transition: .4s;
  
}
.login-form__wrapp{
    transition: .4s;
}
.login-form input::placeholder {
  color: #00aa9e;
}
.inputs-field {
  margin-bottom: 40px;
}

.btn-auth {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-auth button {
  margin-bottom: 20px;
}
</style>
