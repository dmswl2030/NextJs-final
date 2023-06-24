import Link from "next/link";

export default function bookList({ results }) {
  return (
    <div className="book-wrapper">
      <div className="content">
        {results?.books?.map((book, index) => (
          <div className="book-card" key={index}>
            <img className="book-img" src={book.book_image} />
            <div className="book-info">
              <h1 className="book-title">{book.title}</h1>
              <h3 className="book-author">{book.author}</h3>
              <Link href={book.amazon_product_url}>
                <a className="book-link">Buy Now →</a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .book-wrapper {
          padding-top: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 80vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid #eee;
          padding: 20px 50px;
        }
        .book-card {
          width: 200px;
          height: 400px;
          margin: 1rem;
          border: 2px solid #eee;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .book-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .book-info {
          padding: 0.5rem;
        }
        .book-title {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
