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
        <p style={{ ...styles.text, marginBottom: "8px" }}>
          <strong>Funcționalități:</strong>
        </p>
        <p style={styles.text}>• Navigare între pagini printr-un meniu dinamic</p>
        <p style={styles.text}>• Adăugare cărți printr-un formular cu validare</p>
        <p style={styles.text}>• Date stocate permanent în cloud prin Firebase</p>
      </div>
    </div>
  );
}
