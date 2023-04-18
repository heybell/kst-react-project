import React from "react";
import { Grid, Box, Typography, Divider, Container } from "@mui/material";
import SigninForm from "../molecules/SigninForm";
import { Link } from "react-router-dom"; // NavLink를 사용하기 위해 필요한 import

export default function SigninSection() {
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
                        <SigninForm />
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end">

                    </Grid>
                    <Grid item xs={12}>
                        <Divider>
                            <Typography style={{ color: "#757575", textAlign: "center" }}>
                                SNS 로그인
                            </Typography>
                        </Divider>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Box>

            {/* Box와 Grid 사이에 10px의 간격 추가 */}
            <Box m={1} />

            <Box display="flex" justifyContent="flex-end">
                {/* NavLink를 사용하여 페이지 이동 링크 설정 */}
                <Link
                    to="/password-recovery"
                    style={{ textDecoration: "none", color: "#757575", marginRight: "8px", fontSize: "14px", fontFamily: 'NanumBarunGothic, sans-serif' }}

                >
                    비밀번호 찾기
                </Link>
                <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#757575", fontSize: "14px", fontFamily: 'NanumBarunGothic, sans-serif' }}

                >
                    회원가입
                </Link>
            </Box>
        </Container>
    );
}
