import { Box, Container, Grid } from "@mui/material";
import SignupForm from "../molecules/SignupForm";

export default function SignupSection() {
    return (
        <Container maxWidth="xs">
            <Box
                border={1}
                borderColor="#BDBDBD"
                borderRadius={4}
                p={2}
                bgcolor="#F5F5F5" // 배경 컬러 설정
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupForm />
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}