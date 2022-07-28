import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>
        <p>This is a footer</p>
      </footer>
    </>
  );
}
