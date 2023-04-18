const validateForm = (nickname, email, password, confirmPassword, phone, setErrors) => {
    let errors = {};
    let isValid = true;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nickname) {
        isValid = false;
        errors.nickname = '닉네임을 입력해주세요.';
    }

    if (!email) {
        isValid = false;
        errors.email = '이메일을 입력해주세요.';
    }

    if (!password) {
        isValid = false;
        errors.password = '비밀번호를 입력해주세요.';
    } else if (!password.match(passwordRegex)) {
        isValid = false;
        errors.password = '비밀번호는 대소문자, 숫자, 특수문자를 포함하여 최소 8자 이상이어야 합니다.';
    }

    if (!confirmPassword) {
        isValid = false;
        errors.confirmPassword = '비밀번호를 확인해주세요.';
    } else if (password !== confirmPassword) {
        isValid = false;
        errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (!phone) {
        isValid = false;
        errors.phone = '핸드폰 번호를 입력해주세요.';
    }

    setErrors(errors);

    return isValid;
};

export default validateForm;