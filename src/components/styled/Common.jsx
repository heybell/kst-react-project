import { Button, Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledFormControl = styled(FormControl)({
    width: '100%',
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#757575',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#757575',
    },
    '& .Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#757575',
    },
    '& .MuiInputLabel-root.Mui-error': {
        color: '#757575',
    },
    '& .MuiFormHelperText-root.Mui-error': {
        color: '#757575',
    },
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: '#757575',
    '&.Mui-checked': {
        color: '#4FC3F7',
    },
}));

export const StyledCheckboxLabel = styled(FormControlLabel)({
    color: '#757575',
});

export const StyledGreenButton = styled(Button)({
    backgroundColor: '#AED581',
    color: '#F5F5F5',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#AED581',
        color: '#F5F5F5',
    },
});

export const StyledBlueButton = styled(Button)({
    backgroundColor: '#4FC3F7',
    color: '#F5F5F5',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#4FC3F7',
        color: '#F5F5F5',
    },
});

export const StyledGreyButton = styled(Button)({
    backgroundColor: '#757575',
    color: '#F5F5F5',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#757575',
        color: '#F5F5F5',
    },
});
