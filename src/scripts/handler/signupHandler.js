export const handleNicknameChange = (e, setNickname, setErrors) => {
    setNickname(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, nickname: '' }));
};

export const handleEmailChange = (e, setEmail, setErrors) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
};

export const handlePasswordChange = (e, setPassword, setErrors) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
};

export const handleConfirmPasswordChange = (e, setConfirmPassword, password, setErrors) => {
    const confirmPwd = e.target.value;
    setConfirmPassword(confirmPwd);

    if (password !== confirmPwd) { // 비밀번호와 비밀번호 확인 값이 일치하지 않으면
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '비밀번호가 일치하지 않습니다.' }));
    } else {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    }
};

export const handlePhoneChange = (e, setPhone, setErrors) => {
    // 입력값에서 숫자 이외의 문자를 모두 제거하여 숫자만 남기도록 처리
    const inputPhoneNumber = e.target.value.replace(/[^0-9]/g, '');

    // 입력값이 11자리 이하인 경우에만 state를 업데이트
    if (inputPhoneNumber.length <= 11) {
        setPhone(inputPhoneNumber);
    }

    // 에러 메시지 초기화
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
};


export const handleVerificationCodeChange = (e, setVerificationCode, setErrors) => { // 인증코드 변경 이벤트 핸들러
    setVerificationCode(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, verificationCode: '' }));
};

export const handleNicknameFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, nickname: '' }));
};

export const handleEmailFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
};

export const handlePasswordFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
};

export const handleConfirmPasswordFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
};

export const handlePhoneFocus = (setErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
};

export const handleVerificationCodeFocus = (setErrors) => { // 인증코드 포커스 이벤트 핸들러
    setErrors((prevErrors) => ({ ...prevErrors, verificationCode: '' }));
};