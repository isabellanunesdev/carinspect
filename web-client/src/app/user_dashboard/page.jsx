import Link from "next/link";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <nav>
        <h1>Car Inspect</h1>
        <img src="/images/profile.png" alt="Profile image" />
        <ul>
          <Link href="/user_vehicles">Meus veículos</Link>
          <Link href="/offers">Ofertas recebidas</Link>
          <Link href="user_profile">Meu perfil</Link>
        </ul>
      </nav>
      <main>
        <h2>Meus veículos</h2>
        <div>
          <div>
            <img src="/images/uno.jpg" alt="Uno image" />
            <div>
              <h3>Fiat Uno</h3>
              <span>OAM1234</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
