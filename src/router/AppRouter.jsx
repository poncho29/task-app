import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthStore } from '../hooks/useAuthStore';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TaskRoutes } from '../task/routes/TaskRoutes';

export const AppRouter = () => {

  const { status } = useAuthStore();

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      { (status === 'no-authenticated')
          ? <Route path='/auth/*' element={<AuthRoutes />} />
          : <Route path='/*' element={<TaskRoutes />} />
      }
      
      <Route path='/*' element={<Navigate to='/auth/login' />} />      
    </Routes>
  )
}
