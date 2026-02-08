import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Background from './components/Background';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TopicPage from './pages/TopicPage';
import SolutionsListPage from './pages/SolutionsListPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import NewSolutionPage from './pages/NewSolutionPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen text-slate-200 selection:bg-sky-500/30 font-sans relative">

        <Background />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:uid" element={<ProfilePage />} />
          <Route path="/new-solution" element={<NewSolutionPage />} />
          <Route path="/tema/:id" element={<TopicPage />} />
          <Route path="/tema/:id/solucionaris" element={<SolutionsListPage />} />
          <Route path="/tema/:id/solucionaris/:problemId" element={<SolutionDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
