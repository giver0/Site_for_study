import backendApiClient from './backend-api-client'

const ENDPOINTS = {
  SIGN_IN: `/auth/sign-in`,
  SIGN_UP: `/auth/sign-up`,
  CONFIRM_EMAIL: verificationToken => `/auth/confirm/${verificationToken}`,
}

export const signIn = (payload) => (
  backendApiClient.post(ENDPOINTS.SIGN_IN, payload)
)

export const signUp = (payload) => (
  backendApiClient.post(ENDPOINTS.SIGN_UP, payload)
)

export const confirmEmail = (verificationToken) => (
  backendApiClient.get(ENDPOINTS.CONFIRM_EMAIL(verificationToken))
)

