import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { store } from './store';
import Signin from './components/pages/Signin';
import Admin from './components/pages/Admin';
import Signup from './components/pages/Signup';
import AccessDenied from './components/pages/AccessDenied';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: 'NanumBarunGothic, sans-serif',
      color: '#757575',
    },
  });

  const auth = store.getState().user.auth;

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='signin' element={auth ? <AccessDenied /> : <Signin />} />
        <Route path='signup' element={auth ? <Signup /> : <Signup />} />
        <Route path='admin' element={auth?.[1]?.accessState ? <Admin /> : <AccessDenied />} />
        <Route path='manager' element={auth?.[1]?.accessState ? <Admin /> : <AccessDenied />} />
        <Route path='user' element={auth?.[1]?.accessState ? <Admin /> : <AccessDenied />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
