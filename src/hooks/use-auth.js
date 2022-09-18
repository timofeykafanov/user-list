import { useSelector } from 'react-redux';

export function useAuth() {
  const {id, email, first_name, last_name, avatar} = useSelector(state => state.user)

  return {
    isAuth: !!email,
    id,
    email,
    first_name,
    last_name,
    avatar,
  }
}