//로그인 폼 유효성 검사
const validateForm = (email, password, setErrors) => {
    let errors = {};
    let isValid = true;

    if (!email) {
        errors.email = '이메일을 입력해주세요.';
        isValid = false;
    }

    if (!password) {
        errors.password = '비밀번호를 입력해주세요.';
        isValid = false;
    }

    setErrors(errors);

    return isValid;
};

export default validateForm;