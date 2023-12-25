import {Routes, Route} from 'react-router-dom';

import AuthProvider from './hoc/AuthProvider';
import RequireAuth from './hoc/RequireAuth';

import AppLayout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <AuthProvider>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={
                      <RequireAuth>
                          <HomePage />
                      </RequireAuth>
                  }
                  />
                  <Route path='/products' element={<ProductsPage />}
                  />
                  <Route path='/products/:category' element={
                      <RequireAuth>
                          <ProductsPage />
                      </RequireAuth>
                  }
                  />
                  <Route path='login' element={<LoginPage />}/>
                  <Route path='*' element={<h1>404 – Page not Found</h1>}/>
              </Route>
          </Routes>
      </AuthProvider>
  );
}

export default App;