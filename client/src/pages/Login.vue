<template>
<div class="q-pa-md white-background round centeredDiv loginForm">
    <div class="login">
      <div class="login__header">
        <div class="login__header__logo">
          <img src="camera.png" alt="">
        </div>
        <div class="login__header__title"><h3>Авторизация</h3></div>
      </div>
    </div>


    <q-form
      @submit="login"
      class="mt-1"
    >
      <q-input
        filled
        v-model="identifier"
        label="Логин *"
        lazy-rules
        class="mt-1"
        :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Пароль *"
        lazy-rules
        class="mt-1"
        :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
      />


      <div>
        <q-btn class="mt-1" label="Вход" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script lang="ts">
import { stat } from 'fs';
import { Vue, Component } from 'vue-property-decorator'
import store from '../store'

@Component({})
export default class LoginLayout extends Vue {
  identifier: string = '';
  password: string = '';

  login() {
    const { identifier, password } = this;
    store.dispatch('auth/AUTH_REQUEST', { identifier, password }).then(() => this.$router.push('/'))
  }

}
</script>

<style lang="sass">
.login
  &__header
    display: flex
    align-items: center
    justify-content: left
.white-background
  background: $white
.loginForm
  width: 70%
</style>
