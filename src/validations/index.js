
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/

const phonenoRegex = /^\d{10}$/

export const passwordRequired = (value) => value? undefined : 'Password is required'

export const emailRequired = (value) => value? undefined : 'Email is required'

export const nameRequired = (value) => value? undefined : 'Name is required'

export const mobileRequired = (value) => value? undefined : 'Mobile No. is required'

export const validateEmail = value =>
    value && !value.match(emailRegex)
    ? 'Invalid email'
    : undefined

export const validatePassword = value => 
    value && !value.match(passwordRegex)
    ? 'Invalid Password'
    : undefined

export const validatePhoneno = value => 
    value && !value.match(phonenoRegex)
    ? 'Invalid Mobile no.'
    : undefined