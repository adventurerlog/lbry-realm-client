<template>
  <div class="wrapper">
    <div class="row">
      <div class="column column-offset-25 column-50 card">
        <ul class="auth-options">
          <li>
            <button class="button button-clear" :class="{'hide':!hidePanel.login}" @click="togglePanel()">Login</button>
            <button class="button button-clear active" :class="{'hide':hidePanel.login}">Login
            </button>
          </li>
          <li>
            <button class="button button-clear" :class="{'hide':!hidePanel.signup}" @click="togglePanel()">Sign up
            </button>
            <button class="button button-clear active" :class="{'hide':hidePanel.signup}">Sign up
            </button>
          </li>
        </ul>
        <!--      Login-->
        <div class="panel" :class="{'hide':hidePanel.login}">
          <h4>Login into your account</h4>
          <label for="login-email">Email:</label>
          <input id="login-email" type="email" placeholder="Email"/>
          <label for="login-password">Password:</label>
          <input id="login-password" type="password" placeholder="Password"/>
        </div>
        <div class="panel" :class="{'hide':hidePanel.signup}">
          <h4>Create a new account account</h4>
          <label for="signup-email">Email:</label>
          <input id="signup-email" type="email" placeholder="Email"/>
          <label for="signup-password">Password:</label>
          <input id="signup-password" type="password" placeholder="Password"/>
          <label for="signup-confirm-password"> Confirm password:</label>
          <input id="signup-confirm-password" type="password" placeholder="Password"/>
        </div>
        <button type="submit">Login / Create account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data: () => ({
    hidePanel: {
      signup: true,
      login: false
    }
  }),
  methods: {
    togglePanel: function () {
      console.log(this)
      this.$data.hidePanel.signup = !this.$data.hidePanel.signup;
      this.$data.hidePanel.login = !this.$data.hidePanel.login;
    }
  }
}
</script>
<style scoped lang="scss">
.hide {
  display: none;
}

.auth-options {
  list-style: none;

  li {
    display: inline-block;

    button:hover {
      color: var(--color-initial);
    }

    &:last-child {
      margin-left: 15px;
    }
  }
}
input,
::placeholder {
  color: var(--color-initial);
  caret-color: var(--color-initial);;
}

.button-clear {
  &.active {
    color:var(--color-initial);
  }
}
.card {
  padding: 30px;
  background-color: var(--color-info);
  color: var(--color-initial);
  border-radius: 28px;
  margin-top: 40px;
  box-shadow: 4px 0px 35px -4px var(--color-hover);
}

</style>
