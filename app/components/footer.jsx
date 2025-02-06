import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/icons/logo.svg";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner__flex">
          <div className="footer__inner__flex__logo">
        <div className="header__logo" style={{color: "#FFF"}}>
                <Image alt="" src="/assets/logo-asmad.png" width={60} height={50} />
                SMAD <br />
                INTEGRATED <br /> SERVICES
              </div>       
         <div className="footer__inner__flex__logo__subtitle">
            Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy
            </div>
            <div className="footer__inner__flex__logo__social-groups">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_732_3604)">
                  <path
                    d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_3604">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_732_3606)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2889 19.1668L8.66435 12.5752L2.87503 19.1668H0.425781L7.57772 11.0261L0.425781 0.833496H6.71407L11.0726 7.04601L16.5337 0.833496H18.9829L12.1629 8.59723L19.5772 19.1668H13.2889ZM16.0164 17.3085H14.3674L3.93274 2.69183H5.5819L9.76107 8.54446L10.4838 9.56005L16.0164 17.3085Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_3606">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                  fill="white"
                />
                <path
                  d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                  fill="white"
                />
                <path
                  d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                  fill="white"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="footer__inner__flex__logo__email">
              contact@asmadintegratedservices.com
            </div>
          </div>

          <div className="footer__inner__flex__links">
            <div className="footer__inner__flex__links__group">
              <div className="footer__inner__flex__links__group__title">
                Company
              </div>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/about"
              >
                About
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#services"
              >
                Services
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/projects"
              >
                Projects
              </Link>
            </div>
            <div className="footer__inner__flex__links__group">
              <div className="footer__inner__flex__links__group__title">
                General
              </div>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/general"
              >
                General
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#reach"
              >
                Reach
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#mission"
              >
               Our mission
              </Link>
             
            
             
            </div>
            <div className="footer__inner__flex__links__group">
              <div className="footer__inner__flex__links__group__title">
                Contact us
              </div>

              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#vision"
              >
                Our vision
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#contact"
              >
                Contact us
              </Link>
              <Link prefetch={true}
                className="footer__inner__flex__links__group__subtitle"
                href="/#values"
              >
                Our values
              </Link>
            </div>
           
          </div>
        </div>

        <div className="footer__inner__divider"></div>

        <div className="footer__inner__rights">
          <div>© 2024 Asmad Integrated Services. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}
