import { useState } from 'react';
import { StyledTextField, StyledFormControl, StyledBlueButton, StyledGreyButton } from '../styled/Common';
import { Box } from '@mui/material';
import { handleConfirmPasswordChange, handleConfirmPasswordFocus, handleEmailChange, handleEmailFocus, handleNicknameChange, handleNicknameFocus, handlePasswordChange, handlePasswordFocus, handlePhoneChange, handlePhoneFocus, handleVerificationCodeChange, handleVerificationCodeFocus } from '../../scripts/handler/signupHandler';
import { handleSubmit } from '../../scripts/service/signupService';

export default function SignupForm() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [errors, setErrors] = useState({});

    const setHandleSubmit = (e) => handleSubmit(e, nickname, email, password, confirmPassword, phone, setErrors);
    const setHandleNicknameChange = (e) => handleNicknameChange(e, setNickname, setErrors);
    const setHandleEmailChange = (e) => handleEmailChange(e, setEmail, setErrors);
    const setHandlePasswordChange = (e) => handlePasswordChange(e, setPassword, setErrors);
    const setHandleConfirmPasswordChange = (e) => handleConfirmPasswordChange(e, setConfirmPassword, password, setErrors);
    const setHandlePhoneChange = (e) => handlePhoneChange(e, setPhone, setErrors);
    const setHandleVerificationCodeChange = (e) => handleVerificationCodeChange(e, setVerificationCode, setErrors);
    const setHandleNicknameFocus = () => handleNicknameFocus(setErrors);
    const setHandleEmailFocus = () => handleEmailFocus(setErrors);
    const setHandlePasswordFocus = () => handlePasswordFocus(setErrors);
    const setHandleConfirmPasswordFocus = () => handleConfirmPasswordFocus(setErrors);
    const setHandlePhoneFocus = () => handlePhoneFocus(setErrors);
    const setHandleVerificationCodeFocus = () => handleVerificationCodeFocus(setErrors);

    return (
        <StyledFormControl component="form" onSubmit={setHandleSubmit}>
            <StyledTextField
                label="닉네임"
                variant="outlined"
                fullWidth
                margin="dense"
                value={nickname}
                name="nickname"
                onChange={setHandleNicknameChange}
                onFocus={setHandleNicknameFocus}
                error={errors.nickname ? true : false}
                helperText={errors.nickname ? errors.nickname : ''}
            />
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
            <StyledTextField
                label="비밀번호 확인"
                type="password"
                variant="outlined"
                fullWidth
                margin="dense"
                value={confirmPassword}
                name="confirmPassword"
                onChange={setHandleConfirmPasswordChange}
                onFocus={setHandleConfirmPasswordFocus}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword ? errors.confirmPassword : ''}
            />
            <StyledTextField
                label="핸드폰 번호"
                variant="outlined"
                fullWidth
                margin="dense"
                value={phone}
                name="phone"
                onChange={setHandlePhoneChange}
                onFocus={setHandlePhoneFocus}
                error={errors.phone ? true : false}
                helperText={errors.phone ? errors.phone : ''}
            />
            <Box display="flex" alignItems="center">
                <StyledTextField
                    label="인증코드"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={verificationCode}
                    name="verificationCode"
                    onChange={setHandleVerificationCodeChange}
                    onFocus={setHandleVerificationCodeFocus}
                    error={errors.verificationCode ? true : false}
                    helperText={errors.verificationCode ? errors.verificationCode : ''}
                />
                <StyledGreyButton
                    variant="contained"
                    color="primary"
                    style={{
                        marginLeft: '10px',
                        height: '56px'
                    }}
                >
                    인증
                </StyledGreyButton>
            </Box>
            <StyledBlueButton sx={{ mt: '20px', height: '56px' }} type="submit" variant="contained" color="primary" fullWidth>
                회원가입
            </StyledBlueButton>
        </StyledFormControl>
    );
}
