
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/

const phonenoRegex = /^\d{10}$/

export const required = (value) => value? undefined : 'This Field is required'

export const email = value =>
    value && !value.match(emailRegex)
    ? 'Invalid email'
    : undefined

export const password = value => 
    value && !value.match(passwordRegex)
    ? 'Invalid Password'
    : undefined

export const phoneno = value => 
    value && !value.match(phonenoRegex)
    ? 'Invalid Mobile no.'
    : undefined