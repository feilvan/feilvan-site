<template>
  <div>
    <UButton label="Open" @click="useOpen = true" />
    <UModal v-model="useOpen as boolean">
      <UForm :validate="validate" :state="state" class="flex flex-col p-4 space-y-4" @submit="onSubmit">
        <UFormGroup name="password" label="Password" description="Page is protected." required>
          <UButtonGroup class="w-full">
            <UInput v-model="state.password" placeholder="Password" :type="state.type" icon="i-heroicons-key-solid"
              class="w-full" />
            <UButton :icon="state.type === 'text' ? 'i-heroicons-eye-slash-solid' : 'i-heroicons-eye-solid'"
              color="gray" @click="state.type = state.type === 'text' ? 'password' : 'text'" />
            <UButton icon="i-heroicons-backspace-solid" color="gray" @click="state.password = undefined" />
          </UButtonGroup>
        </UFormGroup>

        <div class="space-x-2 self-end">
          <!-- <span v-html="state.loading ? 'loading' : 'not loading'" /> -->
          <UButton variant="outline" icon="i-heroicons-x-mark-solid" label="Cancel"
            @click="state.password = undefined; useOpen = false" />
          <UButton type="submit" :disabled="state.loading ? true : false"
            icon="i-heroicons-arrow-right-end-on-rectangle-solid" :label="state.loading ? 'Loading' : 'Submit'" />
        </div>
      </UForm>
      <div class="flex">
        <UButton :label="state.unlock ? 'Lock' : 'Unlock'" @click="state.unlock = !state.unlock" />
        <div v-if="state.unlock">This is the content.</div>
        <!-- <UButton label="Try Unseal" @click="tryUnseal" /> -->
      </div>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const useOpen = useState("open")
useOpen.value = false

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

// async function tryUnseal() {
//   await fetch('/api/try3/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

</script>

<style></style>