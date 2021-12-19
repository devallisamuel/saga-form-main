export const ON_SUBMIT =  'ON_SUBMIT';
export const SUBMIT =  'SUBMIT';
export const onSubmit = (payload) => {
    console.log(payload, 'on submit');
    return {
        type: ON_SUBMIT,
        payload
    }
}
export const SubmitAction = (payload) => {
    console.log(payload,'submit');
    return {
        type: SUBMIT,
        payload
    }
}