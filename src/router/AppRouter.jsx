import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TaskRoutes } from '../task/routes/TaskRoutes';

export const AppRouter = () => {
  const authStatus = 'no-authenticated'

  return (
    <Routes>
      { (authStatus === 'no-authenticated')
          ? <Route path='/auth/*' element={<AuthRoutes />} />
          : <Route path='/*' element={<TaskRoutes />} />
      }
      
      <Route path='/*' element={<Navigate to='/auth/login' />} />      
    </Routes>
  )
}
