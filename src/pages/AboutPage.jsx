import { styles } from "../styles/appStyles";

export const AboutPage = () => {
  return (
    <div>
      <h2 style={styles.pageTitle}>Despre aplicație</h2>
      <div style={styles.card}>
        <p style={styles.text}>
          <strong>Proiect:</strong> Programarea Interfețelor Utilizator
        </p>
        <p style={styles.text}>
          <strong>Tehnologie:</strong> React
        </p>
        <p style={styles.text}>
          <strong>Funcționalități:</strong> Navigare cu meniu, stare (state),
          componente generate cu map(), formular pentru adăugare.
        </p>
      </div>
    </div>
  );
}
