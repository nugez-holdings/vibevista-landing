import { ref } from 'vue'

const STORAGE_KEY = 'vibevista_cookie_consent'

type ConsentValue = 'accepted' | 'rejected' | null

const consent = ref<ConsentValue>(
  (localStorage.getItem(STORAGE_KEY) as ConsentValue) ?? null
)

export function useCookieConsent() {
  const hasConsented = () => consent.value !== null
  const isAccepted = () => consent.value === 'accepted'

  function accept() {
    consent.value = 'accepted'
    localStorage.setItem(STORAGE_KEY, 'accepted')
  }

  function reject() {
    consent.value = 'rejected'
    localStorage.setItem(STORAGE_KEY, 'rejected')
  }

  return {
    consent,
    hasConsented,
    isAccepted,
    accept,
    reject,
  }
}
