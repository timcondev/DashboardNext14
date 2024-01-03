import styles from '/src/app/ui/login/login.module.css';
import LoginForm from '../ui/login/loginForm/loginForm';
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
