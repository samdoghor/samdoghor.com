import { Flowbite, Navbar } from "flowbite-react";
import { headerLogoData, headerNavData } from "./Data";
import { customTheme } from "../flowbiteTheme";
import { useState, useEffect } from "react";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if (windowHeight < 5) {
      setStickyClass("navy");
    } else {
      setStickyClass("sticky-nav");
    }
  };
  return (
    <div>
      <div className="mt-6 overflow-hidden">
        <div>
          <div className={`navbar ${stickyClass}`}>
            <Flowbite theme={{ theme: customTheme }}>
              <Navbar fluid rounded>
                <Navbar.Brand>
                  <a
                    href={headerLogoData[0].link2}
                    className="mr-3 self-center whitespace-nowrap text-xl font-bold md:text-2xl text-primary-logo"
                  >
                    {headerLogoData[0].logo}
                  </a>
                  <a
                    href={headerLogoData[0].link}
                    className="self-center whitespace-nowrap font-semibold text-sm text-white tracking-wider"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {headerLogoData[0].name}
                  </a>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  {headerNavData.map((d, index) => (
                    <Navbar.Link
                      key={index}
                      href={d.link}
                      className="text-white md:hover:text-primary-logo tracking-wider"
                      target={d.target}
                    >
                      <p className="align-middle gap-2">
                        {d.nav} {d.icon}
                      </p>
                    </Navbar.Link>
                  ))}
                </Navbar.Collapse>
              </Navbar>
            </Flowbite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
