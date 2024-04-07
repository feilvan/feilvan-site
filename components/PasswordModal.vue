<template>
  <div>
    <div>try</div>
  </div>
</template>

<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const state = reactive({
  type: "password",
  password: undefined,
  loading: false,
  unlock: false,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  state.loading = true
  await fetch('/api/try3/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: event.data.password }),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => state.loading = false)
}

async function tryUnseal() {
  await fetch('/api/try3/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

</script>

<style></style>