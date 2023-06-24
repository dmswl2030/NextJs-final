import Link from "next/link";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Seo title="Home" />
        <h1 className="title">THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
        <section className="main">
          {results.map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: `/list/${item.list_name}`,
              }}
            >
              <button>{item.list_name}</button>
            </Link>
          ))}
        </section>
      </div>

      <style jsx>{`
        .content-wrapper {
          padding-top: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 80vw;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid #eee;
          padding: 0 50px;
        }
        .title {
          font-size: 4rem;
          text-align: center;
        }
        .main {
          width: 100%;
        }
        button {
          padding: 5px 20px;
          margin: 1rem;
          font-size: 2.5rem;
          border: 2px solid #000;
          border-radius: 20px;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }
        button:hover {
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
