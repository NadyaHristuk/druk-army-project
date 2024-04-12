"use client"; 
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from "../../../components/login/login.module.css";
import LoginForm from "../../../components/login/loginForm/loginForm";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
console.log(session)
  useEffect(() => {
    if (session) {
      router.push('/dashboard');  // Redirect to the dashboard if already logged in
    }
  }, [session, router]);

  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;

