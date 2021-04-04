import Link from "next/link";

export default function Header({ siteName, children }) {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>{siteName}</a>
          </Link>
          {children}
        </nav>
      </header>
    </>
  );
}
