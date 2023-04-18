import instance from "../config/apiConfig";
import validateForm from "../util/signupUtil";

export const handleSubmit = async (e, nickname, email, password, confirmPassword, phone, setErrors) => {
    e.preventDefault();

    if (validateForm(nickname, email, password, confirmPassword, phone, setErrors)) {
        await instance.post('/auth/signup', {
            name: nickname,
            email,
            password,
            phone
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const handleNicknameBlur = async (nickname) => {
    await instance.post('/auth/name', {
        name: nickname
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};