import { useState } from "react";
import { styles } from "../styles/appStyles";

export const BooksPage = ({ books, onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const startsWithCapital = (val) => /^[A-ZĂÂÎȘȚ]/.test(val.trim());

  const handleSubmit = () => {
    if (!title.trim() || !author.trim()) return;
    if (!startsWithCapital(title)) return alert("Titlul trebuie să înceapă cu majusculă.");
    if (!startsWithCapital(author)) return alert("Autorul trebuie să înceapă cu majusculă.");
    onAddBook({
      title: title.trim(),
      author: author.trim(),
      year: year.trim() || "N/A",
    });
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div>
      <h2 style={styles.pageTitle}>Colecția mea de carti</h2>

      <div style={styles.form}>
        <h3 style={{ margin: "0 0 12px 0" }}>Adaugă o carte noua</h3>
        <input
          style={styles.input}
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="An apariție"
          value={year}
          onChange={(e) => setYear(e.target.value.replace(/\D/g, ""))}
        />
        <button style={styles.button} onClick={handleSubmit}>
          Adaugă
        </button>
      </div>

      <div style={styles.bookList}>
        {books.map((book) => (
          <div key={book.id} style={styles.bookCard}>
            <strong>{book.title}</strong>
            <span style={styles.bookAuthor}>{book.author}</span>
            <span style={styles.bookYear}>{book.year}</span>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <p style={{ ...styles.text, textAlign: "center", opacity: 0.5 }}>
          Nicio carte în colecție. Adaugă una mai sus!
        </p>
      )}
    </div>
  );
}
