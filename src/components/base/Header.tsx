import "./Header.css";
import { dartsfont } from "@/app/fonts/font-old/dartsfont";

export default function Header() {
  return (
    <>
      <div className="relative w-full" style={{ height: "68px" }}>
        <div className="header-background"></div>
        <div className="main-header menu-navigation z-10" role="navigation">
          <ul className="tabbed-primary-navigation">
            <li className="navigation-tab">
              <a href="/browse/genre/83">Something</a>
            </li>
          </ul>
          <a
            aria-label="Netflix"
            className={`logo icon-logoUpdate ${dartsfont.className} z-20 text-center`}
            href="/"
          >
            <div style={{ fontSize: "10px", margin: " 5px 3px  0 0" }}>
              学びながら、ゆっくり好きになる
            </div>
            <h4>青の学び舎</h4>
          </a>
          <ul className="tabbed-primary-navigation">
            <li className="navigation-tab">
              <a href="/browse">Something</a>
            </li>
          </ul>
          <div className="secondary-navigation">
            <div className="nav-element">
              <div className="account-menu-item">
                <div className="account-dropdown-button">
                  <a
                    href="/YourAccount"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="&amp;#x907C;&amp;#x592A;&amp;#x90CE; - アカウント情報&amp;設定"
                  >
                    <span className="profile-link" role="presentation">
                      <div className="bg-gray-400 w-8 h-8"></div>
                    </span>
                  </a>
                  <span className="caret" role="presentation"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
