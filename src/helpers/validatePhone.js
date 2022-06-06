export const validatePhone = (phoneNumber) => {
    const regexp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gm;
    const sanitizedPhoneNumber = phoneNumber.toString().trim();

    return regexp.test(sanitizedPhoneNumber);
}