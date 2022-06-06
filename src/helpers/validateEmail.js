export const validateEmail = (email) => {
    const regexp = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/gm;
    const sanitizedEmail = email.toString().trim();

    return regexp.test(sanitizedEmail);
}