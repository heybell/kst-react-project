import instance from "../config/apiConfig";
import validateForm from "../util/signinUtil";
import { login } from "../../reducers/userReducer";
import { store } from "../../store";

export const handleSubmit = async (e, email, password, rememberMe, setErrors) => {
    e.preventDefault();

    if (validateForm(email, password, setErrors)) {
        await instance.post('/auth/signin', {
            email,
            password
        })
            .then(function (response) {
                const status = response.data.status.code;

                if (status === 1000) {
                    const authorization = response.headers['authorization'];
                    instance.defaults.headers.common['Authorization'] = authorization;

                    store.dispatch(login(response.data.user, response.data.auth));

                    if (rememberMe) localStorage.setItem('email', email);
                    else localStorage.removeItem('email');
                } else {

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};