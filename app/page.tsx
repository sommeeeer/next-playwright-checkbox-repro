import Nav from './components/Nav';

export default function Home() {
  return (
    <>
      <h1>Nextjs App Router</h1>

      <main className="grid grid-cols-2 gap-4 p-10 [&>a]:border">
        <Nav href={'/parallel'} title="Parallel">
          Parallel routing
        </Nav>
      </main>
    </>
  );
}
