import Product from "./Product";

function Home() {
  return (
    <>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          <Product />
          <Product />
          <Product />
        </section>
      </section>
    </>
  );
}

export default Home;
