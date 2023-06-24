import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Patrick+Hand+SC");

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        figure,
        blockquote,
        dl,
        dd,
        ol,
        ul,
        pre,
        fieldset,
        legend,
        button,
        input,
        textarea,
        select {
          margin: 0;
          padding: 0;
        }

        body {
          line-height: 1.5;
          font-family: "Patrick Hand SC", cursive;
        }

        ul,
        ol {
          list-style: none;
        }

        button,
        input,
        textarea,
        select {
          font-family: inherit;
        }
        button {
          appearance: none;
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}
