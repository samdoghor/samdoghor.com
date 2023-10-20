import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { headerLogoData, headerNavData, headerSocialData } from "./Data";
import ProfileImage from "/img/doghs.jpg";
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
        <div className={`navbar ${stickyClass}`}>
          <Navbar
            fluid={true}
            rounded={true}
            className="!bg-transparent shadow-xl p-4 overflow-hidden"
          >
            <Navbar.Brand>
              <a
                href={headerLogoData[0].link2}
                className="mr-3 self-center whitespace-nowrap text-xl font-bold md:text-2xl text-primary-logo"
              >
                {headerLogoData[0].logo}
              </a>
              <a
                href={headerLogoData[0].link}
                className="self-center whitespace-nowrap font-semibold text-sm text-white"
              >
                {headerLogoData[0].name}
              </a>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-4">
              <Dropdown
                arrowIcon={false}
                dismissOnClick={true}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={ProfileImage}
                    rounded={true}
                  />
                }
              >
                <div className="dropdown-menu-o">
                  <Dropdown.Header>
                    <span className="block text-lg text-primary-blogo font-bold">
                      Samuel, Doghor
                    </span>
                    <span className="block truncate text-sm font-medium text-primary-blogo hover:text-primary-logo">
                      <a href="mailto:talkto@samdoghor">
                        {" "}
                        talkto@samdoghor.com{" "}
                      </a>
                    </span>
                    <span className="block truncate text-sm font-medium text-primary-blogo hover:text-primary-logo">
                      <a href="tel:+2348031390921"> +234-803-139-0921 </a>
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <div className="w-full text-xl text-primary-logo justify-end flex">
                      {headerSocialData.map((d) => (
                        <a
                          key={d.id}
                          href={d.link}
                          target="_blank"
                          rel="noreferrer"
                          className="pe-4 inline-flex text-primary-blogo hover:text-primary-logo text-end"
                        >
                          {d.icon}
                        </a>
                      ))}
                    </div>
                  </Dropdown.Item>
                </div>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {headerNavData.map((d) => (
                <Navbar.Link
                  key={d.id}
                  href={d.link}
                  className="text-white md:hover:text-primary-logo"
                  target={d.target}
                >
                  <p className="flex align-middle gap-2">
                    {d.nav} {d.icon}
                  </p>
                </Navbar.Link>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="pt-16 lg:pt-20 ontop" id="intro">
          <p className="text-primary-cylogo font-semibold text-2xl overflow-hidden leading-snug md:leading-normal text-center">
            My Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
