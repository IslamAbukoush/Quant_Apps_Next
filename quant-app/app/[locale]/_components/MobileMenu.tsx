import { useTranslations } from "next-intl";
import { Grid2 } from "@mui/material";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const  t  = useTranslations("app-toolbar");
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState('/');

  const onClickMobileLink = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const onClickClose = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  useEffect(() => {
    if (currentPathname === '/en') {
      setPathname('/projects');
    } else {
      const pathSegments = currentPathname.split('/');
      setPathname('/' + (pathSegments[2] || ''));
    }
    onClickMobileLink()
  }, [currentPathname])



  return (
    <div className="mobile-menu">
      <span className="close" onClick={onClickClose}></span>
      <ul className="menu">
        <li
          className={`menu__item mobile-link ${
            pathname === "/services" ? "active" : ""
          }`}
        >
          <Link
            href="/services"
            legacyBehavior
          >
            <a className="text-left w-full">
              {t("Services")}
            </a>
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${pathname === "/projects" ? "active" : ""}`} data-id="projects"
        >
          <Link
            href="/#projects"
            scroll={false}
            legacyBehavior
          >
            <a className="text-left w-full">
              {t("Projects")}
            </a>
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/about-us" ? "active" : ""
          }`}
        >
          <Link
            href="/about-us"
            legacyBehavior
          >
            <a className="text-left w-full">
              {t("AboutUs")}
            </a>
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/contact-us" ? "active" : ""
          }`}
        >
          <Link
            href="/contact-us"
            legacyBehavior
          >
            <a className="text-left w-full">
              {t("ContactUs")}
            </a>
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/faqs" ? "active" : ""
          }`}
        >
          <Link
            href="/faqs"
            legacyBehavior
          >
            <a className="text-left w-full">
              FAQs
            </a>
          </Link>
        </li>
      </ul>

      <Grid2
        container
        direction="row"
        justifyContent="center"
        gap="20px"
        mt="50px"
      >
        <Link 
          href="https://www.facebook.com/profile.php?id=61571073299478"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image width={30} height={30} src="/icons/footer-facebook.svg" alt="Facebook" />
        </Link>

        <Link 
          href="https://www.instagram.com/quantapps_/"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image
            width={30}
            height={30}
            src="/icons/footer-instagram.svg"
            alt="Instagram"
          />
        </Link>

        <Link 
          href="https://www.linkedin.com/company/quant-apps"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image width={30} height={30} className="w-[30px] h-[30px]" src="/icons/linked-in.svg" alt="LinkedIn" />
        </Link>

        <Link 
          href="https://www.tiktok.com/@quantapps"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image width={30} height={30} className="w-[30px] h-[30px]" src="/icons/tik-tok.svg" alt="TikTok" />
        </Link>

        <Link 
          href="https://t.me/quantapps"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image width={30} height={30} className="w-[30px] h-[30px]" src="/icons/Telegram.svg" alt="Telegram" />
        </Link>

        <Link 
          href="https://wa.me/37369882331"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image width={30} height={30} src="/icons/whats-app.svg" alt="WhatsApp" />
        </Link>
      </Grid2>

      <Grid2 container sx={{ width: "100%", mt: "20px" }} justifyContent="center">
        <LanguageSwitcher mobile />
      </Grid2>
    </div>
  );
};

export default MobileMenu;