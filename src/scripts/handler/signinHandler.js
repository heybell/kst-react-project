export const handleEmailChange = (e, setEmail, setErrors) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
};

export const handlePasswordChange = (e, setPassword, setErrors) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
};

export const handleRememberMeChange = (e, setRememberMe) => {
    const checked = e.target.checked;
    setRememberMe(checked);
};

export const handleEmailFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
};

export const handlePasswordFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
};