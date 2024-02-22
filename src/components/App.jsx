import { Navigate, Route, Routes } from 'react-router-dom';
//
import { SharedLayout } from '../components';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
