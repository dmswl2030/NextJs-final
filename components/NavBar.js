import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <nav className="header">
        <Link href="/">
          <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href="/about">
          <span className={router.pathname === "/about" ? "active" : ""}>
            About
          </span>
        </Link>
      </nav>
      <style jsx>{`
        .header {
          width: 100%;
          height: 100px;
          font-size: 3rem;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #fff;
          border-bottom: 2px solid #a8a8a8;
          position: fixed;
          z-index: 99;
        }
        span {
          padding-bottom: 5px;
          cursor: pointer;
        }
        .active {
          font-weight: 700;
          border-bottom: 2px solid #000;
          color: #000;
        }
      `}</style>
    </div>
  );
}
