import Head from "next/head";
import Header from "./Header";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Layout({ children, siteData }) {
  const [session, loading] = useSession();
  if (loading) {
    return "Loading...";
  }
  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn("github")}>Sign in</button>
      </>
    );
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteData.author} />
        <meta name="description" content={siteData.description} />
        <title>{siteData.title}</title>
      </Head>
      <Header siteName={siteData.title}>
        <button onClick={() => signOut()}>Sign out</button>
      </Header>
      <main className="container">{children}</main>
    </>
  );
}
