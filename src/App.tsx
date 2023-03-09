import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './assets/theme/Index';
import Navigations from './layouts/Navigations';
import PublicLayout from './layouts/PublicLayout';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Graphics from './pages/Graphics';
import Home from './pages/Index';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const theme = {
  colors: COLORS
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/graphics' element={<Graphics />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
