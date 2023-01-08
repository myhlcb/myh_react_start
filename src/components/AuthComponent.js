// 判断token是否存在
// 存在则正常渲染
//不存在则跳转登录路由
// 高阶组件->把一个组件当成领一个组件参数传入
import { getToken } from '@/utils/token';
import { Navigate } from 'react-router-dom';
function AuthComponent({ children }) {
  const isToken = getToken();
  if (isToken) {
    return <>{children}</>;
  } else {
    return <Navigate to='/login' replace />;
  }
}
export default AuthComponent