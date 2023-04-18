import { Container } from "@mui/material";
import SignupSection from "../organisms/SignupSection";

export default function SignupTemplate(){
    return(
        <Container maxWidth="xl" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <SignupSection />
        </Container>
    )
}