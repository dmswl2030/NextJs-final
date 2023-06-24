import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Seo title="About" />
        <h1 className="title"> ABOUT US</h1>
        <span>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer
        </span>
        <span>We hope you enjoy your stay!</span>
      </div>
      <style jsx>{`
        .content-wrapper {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 80vw;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid #eee;
          padding: 20px 50px;
        }
        .title {
          font-size: 4rem;
          text-align: center;
        }
        span {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}
