<template>
  <div class="wrapper">
    <div class="row">
      <div class="column column-offset-25 column-50 card">
        <ul class="auth-options">
          <li>
            <button class="button button-clear"
                    :class="{'hide':isActionCurrent(actionDefinitions.login)}"
                    @click="togglePanel()">
              Login
            </button>
            <button class="button button-clear active"
                    :class="{'hide':!isActionCurrent(actionDefinitions.login)}">Login
            </button>
          </li>
          <li>
            <button class="button button-clear"
                    :class="{'hide':isActionCurrent(actionDefinitions.signup)}"
                    @click="togglePanel()">Sign up
            </button>
            <button class="button button-clear active"
                    :class="{'hide':!isActionCurrent(actionDefinitions.signup)}">Sign up
            </button>
          </li>
        </ul>
        <!--      Login-->
        <div class="panel" :class="{'hide':!isActionCurrent(actionDefinitions.login)}">
          <h4>Login into your account</h4>
          <label for="login-email">Email:</label>
          <input id="login-email" v-model="formsData[actionDefinitions.login].email" type="email" placeholder="Email"/>
          <label for="login-password">Password:</label>
          <input id="login-password" v-model="formsData[actionDefinitions.login].password" type="password"
                 placeholder="Password"/>
        </div>
        <div class="panel" :class="{'hide':!isActionCurrent(actionDefinitions.signup)}">
          <h4>Create a new account</h4>
          <label for="signup-email">Email:</label>
          <input id="signup-email" v-model="formsData[actionDefinitions.signup].email" type="email"
                 placeholder="Email"/>
          <label for="signup-password">Password:</label>
          <input id="signup-password" v-model="formsData[actionDefinitions.signup].password" type="password"
                 placeholder="Password"/>
          <label for="signup-confirm-password"> Confirm password:</label>
          <input id="signup-confirm-password" v-model="formsData[actionDefinitions.signup].confirmPassword"
                 type="password" placeholder="Password"/>
        </div>
        <div v-if="formErrors.length">
          Error:
          <ul>
            <li v-for="error in formErrors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>
        <button @click="submitForm()" type="submit">{{ submitBtnText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
const actionViewDefinitions = {
  login: 'login',
  signup: 'signup'
};
export default {
  name: 'Auth',
  data: () => ({
    actionDefinitions: {
      signup: actionViewDefinitions.signup,
      login: actionViewDefinitions.login
    },
    submitBtnTexts: {
      [actionViewDefinitions.signup]: 'Create Account',
      [actionViewDefinitions.login]: 'Login'
    },
    currentAction: null,
    submitBtnText: '',
    formErrors: [],
    formsData: {
      [actionViewDefinitions.signup]: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      [actionViewDefinitions.login]: {
        email: '',
        password: ''
      }
    }
  }),
  mounted: function () {
    if (this.initialView === this.$data.actionDefinitions.signup) {
      this.$data.currentAction = this.$data.actionDefinitions.signup;
    }
    if (this.initialView === this.$data.actionDefinitions.login) {
      this.$data.currentAction = this.$data.actionDefinitions.login;
    }
    if (!this.initialView) {
      this.$data.currentAction = this.$data.actionDefinitions.login;
    }
    this.$data.submitBtnText = this.$data.submitBtnTexts[this.$data.currentAction];
  },
  computed: {
    initialView: function () {
      return this.$route.query.view;
    },
  },
  methods: {
    isActionCurrent: function (action) {
      return this.$data.currentAction === action;
    },
    togglePanel: function () {
      this.$data.currentAction = this.isActionCurrent(this.$data.actionDefinitions.login) ?
          this.$data.actionDefinitions.signup : this.$data.actionDefinitions.login;
      this.$data.submitBtnText = this.$data.submitBtnTexts[this.$data.currentAction];

    },
    resetErrors: function () {
      this.$data.formErrors = [];
    },
    validateForEmpty: function (form) {
      let emptyFields = Object.keys(form).filter(key => !form[key]);
      console.log(emptyFields);
      return emptyFields;
    },
    validatePassword: function (password) {
      return password.length >= 8;
    },
    validateEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateLogin: function () {

      this.resetErrors();
      let data = this.$data.formsData[this.$data.actionDefinitions.login];
      if (this.validateForEmpty(data).length > 0) {
        this.$data.formErrors.push(`${this.validateForEmpty(data).join(', ')} field(s) are mandatory to complete`);
      }
      if (!this.validateEmail(data.email)) {
        this.$data.formErrors.push('Please enter a valid email address')
      }
      return this.$data.formErrors.length === 0;
    },
    validateSignup: function () {
      console.log('validateSignup');
      this.resetErrors();
      let data = this.$data.formsData[this.$data.actionDefinitions.signup];
      if (this.validateForEmpty(data).length) {
        this.$data.formErrors.push(`${this.validateForEmpty(data).join(', ')} field(s) are mandatory to complete`);
      }
      if (!this.validateEmail(data.email)) {
        this.$data.formErrors.push('Please enter a valid email address')
      }
      if (!this.validatePassword(data.password)) {
        this.$data.formErrors.push('Password must be at least 8 characters long')
      }
      if (this.validatePassword(data.password) && data.password !== data.confirmPassword) {
        this.$data.formErrors.push('Passwords fields do not match')
      }
      return this.$data.formErrors.length === 0;
    },
    validateForm: function () {
      console.log('validateForm');
      return this.$data.currentAction === this.$data.actionDefinitions.login ? this.validateLogin() : this.validateSignup();
    },
    submitForm: function () {
      console.log('Submit Form!', this.$data.currentAction, this.validateForm());
      // console.log(this.$data.formsData[this.$data.currentAction])
      if (this.validateForm()) {
        console.log('Form is valid and we are send it over the network!')
      } else {
        console.log('errors', [...this.$data.formErrors]);
      }

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
    color: var(--color-initial);
  }
}

.card {
  padding: 30px;
  background-color: var(--color-info);
  color: var(--color-initial);
  border-radius: 28px;
  margin-top: 40px;
  box-shadow: 4px 0px 11px -4px var(--color-hover);
}

</style>
