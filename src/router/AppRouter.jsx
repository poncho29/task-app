import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TaskRoutes } from '../task/routes/TaskRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/auth/*' element={<AuthRoutes />} />

      {/* TaskApp */}
      <Route path='/*' element={<TaskRoutes />} />
      
    </Routes>
  )
}
