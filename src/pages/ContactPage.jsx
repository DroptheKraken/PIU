import { styles } from "../styles/appStyles";

export const ContactPage = () => {
  return (
    <div>
      <h2 style={styles.pageTitle}>Contact</h2>
      <div style={styles.card}>
        <p style={styles.text}>Email: student@universitate.ro</p>
        <p style={styles.text}>Telefon: 0700 000 000</p>
      </div>
    </div>
  );
}
