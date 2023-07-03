<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-control">
      <label for="email">Name</label>
      <input id="email" type="text" name="name" placeholder="Name" ref="name" @focus="resetError" />
      <div v-if="error" v-html="warning"></div>
    </div>

    <base-wrapper type="row" gap=".5">
      <div class="form-control">
        <label for="nip">NIP</label>
        <input id="nip" type="text" name="NIP" placeholder="NIP" ref="NIP" @focus="resetError" />
        <div v-if="error" v-html="warning"></div>
      </div>

      <div class="form-control">
        <label for="regon">REGON</label>
        <input
          id="regon"
          type="text"
          name="REGON"
          placeholder="REGON"
          ref="REGON"
          @focus="resetError"
        />
        <div v-if="error" v-html="warning"></div>
      </div>
    </base-wrapper>

    <div class="form-control">
      <label for="phone">Phone</label>
      <input type="number" name="phone" placeholder="Phone" ref="phone" @focus="resetError" />
      <div v-if="error" v-html="warning"></div>
    </div>

    <div class="form-control">
      <label for="email">E-mail</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="E-mail"
        ref="email"
        @focus="resetError"
      />
      <div v-if="error" v-html="warning"></div>
    </div>

    <div class="form-control">
      <label for="social">Social</label>
      <input
        id="social"
        type="text"
        name="social"
        placeholder="Social"
        ref="social"
        @focus="resetError"
      />
      <div v-if="error" v-html="warning"></div>
    </div>

    <div class="form-control">
      <label for="street">Street</label>
      <input
        id="street"
        type="text"
        name="street"
        placeholder="Street"
        ref="street"
        @focus="resetError"
      />
      <div v-if="error" v-html="warning"></div>
    </div>

    <base-wrapper type="row" gap=".5">
      <div class="form-control">
        <label for="postcode">Postcode</label>
        <input
          id="postcode"
          type="text"
          name="postcode"
          placeholder="Postcode"
          ref="postcode"
          @focus="resetError"
        />
        <div v-if="error" v-html="warning"></div>
      </div>
      <div class="form-control">
        <label for="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="City"
          ref="city"
          @focus="resetError"
        />
        <div v-if="error" v-html="warning"></div>
      </div>
    </base-wrapper>

    <base-button v-if="!loading" variant="primary" :type="submit" class="button"> Add </base-button>
  </form>
  <base-loader v-if="loading"></base-loader>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

export default {
  data() {
    return {
      loading: false,
      error: false,
      warning: `<span class="warning">Invalid title or message!</span>`
    }
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
  },
  methods: {
    resetError() {
      this.error = false
    },
    submit() {}
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-control input {
  width: 100%;
  font-family: inherit;
  font-weight: 1rem;
  font-size: 1rem;
  color: inherit;
  padding: 0.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--colour-light-grey);
}

.form-control input::placeholder {
  color: var(--colour-light-grey);
}

.form-control input:active,
.form-control input:focus {
  outline: none;
}

.form-control label {
  font-weight: 500;
  font-size: 0.8rem;
}

.button {
  align-self: flex-end;
  margin-top: 0.5rem;
}
</style>
