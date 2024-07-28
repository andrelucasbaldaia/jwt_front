import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">
            <button type="submit" className="btn btn-primary">Login</button>
          </Link>
        </li>
        <li>
          <Link href="/registrer">
            <button type="submit" className="btn btn-primary">Registre-se</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
