import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"; 
import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import { serif, sans } from "./fonts";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
        <body className="flex flex-col min-h-screen mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
          <header className="mb-14 flex flex-col items-center">
            <HomeLink />
            <Link
              href="https://sameearif.com"
              target="_blank"
              className="hover:scale-[1.05] transition-transform duration-200 ease-out"
            >
              <img
                alt="Samee Arif"
                src="/samee.png"
                className="mt-10 h-20 w-20 rounded-full"
              />
            </Link>
            <div className="mt-4 text-center">
              <Link
                href="https://sameearif.com"
                target="_blank"
                className={[
                  sans.className,
                  "text-lg font-semibold inline-block hover:scale-[1.05] transition-transform duration-200 ease-out",
                ].join(" ")}
              >
                <span
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Samee Arif
                </span>
              </Link>
              <div className="flex justify-center mt-2">
                <Link
                  href="https://x.com/sameearif"
                  target="_blank"
                  className="mx-2 hover:scale-[1.2] transition-transform duration-200 ease-out"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com/sameearif"
                  target="_blank"
                  className="mx-2 hover:scale-[1.2] transition-transform duration-200 ease-out"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </Link>
                <Link
                  href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ"
                  target="_blank"
                  className="mx-2 hover:scale-[1.2] transition-transform duration-200 ease-out"
                >
                  <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="mt-12 text-center text-[10px] text-gray-500">
            <p>
              Wesbite Design and code by{" "}
              <a
                href="https://github.com/gaearon/overreacted.io"
                target="_blank"
                className="underline hover:text-gray-700"
              >
                gaearon
              </a>
              .
            </p>
          </footer>
        </body>
      </html>
    </AutoRefresh>
  );
}
