import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/UserNew';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f57c00',
    },
    background: {
      default: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  }
});

function AppContent() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'User Dashboard', path: '/user' },
    { label: 'Admin Panel', path: '/admin' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" sx={{ mb: 3 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, textDecoration: 'none' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                🏠 Property Value Enhancer
              </Box>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                <Button
                  color="inherit"
                  sx={{
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                    pb: location.pathname === item.path ? 0.5 : 0,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: 'auto',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #ddd',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ color: '#666' }}>
            <p>© 2026 Property Value Enhancer. Enhance your property's value with expert recommendations.</p>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
