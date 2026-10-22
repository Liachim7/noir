import styles from "./Newsletter.module.css";
export default function Newsletter() {
  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.querySelector('p[aria-live="polite"]').textContent =
      "Спасибо за подписку!";
    event.currentTarget.reset();
  }

  return (
    <section className={`${styles.newsletter}`}>
      <div className={`container ${styles["newsletter-inner"]}`}>
        <div>
          <p className={`${styles.eyebrow}`}>Будьте в курсе</p>
          <h2>
            Хорошие новости —<br />
            редко, но метко.
          </h2>
          <p>Новинки, идеи и специальные предложения. Никакого спама.</p>
        </div>
        <form
          className={`${styles["newsletter-form"]}`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Ваш email</label>
          <div className={`${styles["input-row"]}`}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
            <button
              className={`${styles.btn} ${styles["btn-dark"]}`}
              type="submit"
            >
              Подписаться
            </button>
          </div>
          <p className={`${styles["form-message"]}`} aria-live="polite"></p>
        </form>
      </div>
    </section>
  );
}
