import styles from "../../../components/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <h1 className={styles.title}>Ласкаво просимо!</h1>
      <p className={styles.description}>
        Ви знаходитесь в адміністративній панелі, де ви можете виконувати різні дії, такі
        як налаштування, керування контентом, здійснення операцій і багато іншого.
      </p>
      </div>
    </div>
  );
};

export default Dashboard;
