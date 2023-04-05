import { Navigate, Route, Routes } from 'react-router-dom';

import { TaskPage } from '../pages/TaskPage';
import { TaskComplete } from '../pages/TaskComplete';
import { Profile } from '../pages/Profile';

export const TaskRoutes = () => {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path='complete' element={<TaskComplete />} />
      <Route path='profile' element={<Profile />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
