import { createAction, props } from '@ngrx/store'

export const loginRequest = createAction(
    '[Auth] Login Request',
    props<{ credentials: { email: string, password: string } }>()
)

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ loginSuccessResponse: any }>()
)

export const loginFailure = createAction(
    '[Auth] Login Request',
    props<{ error: string }>()
)