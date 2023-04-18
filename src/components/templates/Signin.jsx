import { Container } from "@mui/material"
import SigninSection from "../organisms/SigninSection"

export default function SigninTemplate() {
    return (
        <Container maxWidth="xl" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <SigninSection />
        </Container>
    )
}