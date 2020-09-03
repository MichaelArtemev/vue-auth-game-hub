<template>
  <div>
    <h4>REGISTRATION</h4>
    <form>
      <div class="login-form__email">
        <input
          placeholder="EMAIL"
          id="email"
          type="email"
          v-model="email"
          required
        />
      </div>

      <div class="login-form__pass">
        <input
          placeholder="PASSWORD"
          id="password"
          type="password"
          v-model="password"
          required
        />
      </div>

      <div class="login-form__pass_conf login-form__pass">
        <input
          placeholder="CONFIRM PASS"
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>

      <!-- <label for="password-confirm">Is this an administrator account?</label>
            <div>
                <select v-model="is_admin">
                    <option value=1>Yes</option>
                    <option value=0>No</option>
                </select>
            </div> -->

      <div class="btn-auth">
          <button type="submit" @click="handleSubmit">
          Registeration
        </button>
          <button type="submit" @click="tabTemplate">
          BACK TO Login
        </button>
        
        
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["nextUrl", "tabfn"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  methods: {
    tabTemplate() {
        this.tabfn();
    },
    handleSubmit(e) {
      e.preventDefault();

      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        let url = "http://localhost:3000/register";
        if (this.is_admin != null || this.is_admin == 1)
          url = "http://localhost:3000/register-admin";
        this.$http
          .post(url, {
            name: this.name,
            email: this.email,
            password: this.password,
            is_admin: this.is_admin
          })
          .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/dashboard");
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.password = "";
        this.passwordConfirm = "";

        return alert("Passwords do not match");
      }
    }
  }
};
</script>
