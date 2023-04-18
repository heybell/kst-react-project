import { useEffect, useState } from "react";
import { handleSubmit } from "../../scripts/service/signinService";
import { handleEmailChange, handleEmailFocus, handlePasswordChange, handlePasswordFocus, handleRememberMeChange } from "../../scripts/handler/signinHandler";
import { StyledCheckbox, StyledCheckboxLabel, StyledFormControl, StyledGreenButton, StyledTextField } from "../styled/Common";

function SigninForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true);
        }
    }, []);

    const setHandleSubmit = (e) => handleSubmit(e, email, password, rememberMe, setErrors);
    const setHandleEmailChange = (e) => handleEmailChange(e, setEmail, setErrors);
    const setHandleEmailFocus = () => handleEmailFocus(setErrors);
    const setHandlePasswordChange = (e) => handlePasswordChange(e, setPassword, setErrors);
    const setHandlePasswordFocus = () => handlePasswordFocus(setErrors);
    const setHandleRememberMeChange = (e) => handleRememberMeChange(e, setRememberMe);

    return (
        <StyledFormControl component="form" onSubmit={setHandleSubmit}>
            <StyledTextField
                label="이메일"
                variant="outlined"
                fullWidth
                margin="dense"
                value={email}
                name="email"
                onChange={setHandleEmailChange}
                onFocus={setHandleEmailFocus}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : ''}
            />
            <StyledTextField
                label="비밀번호"
                type="password"
                variant="outlined"
                fullWidth
                margin="dense"
                value={password}
                name="password"
                onChange={setHandlePasswordChange}
                onFocus={setHandlePasswordFocus}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : ''}
            />

            <StyledCheckboxLabel
                control={<StyledCheckbox checked={rememberMe} onChange={setHandleRememberMeChange} />}
                label="이메일 저장"
            />
            <StyledGreenButton sx={{ mt: '20px', height: '56px' }} type="submit" variant="contained" color="primary" fullWidth>
                로그인
            </StyledGreenButton>
        </StyledFormControl>
    );
}

export default SigninForm;