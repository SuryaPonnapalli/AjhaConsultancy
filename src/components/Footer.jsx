import { IonIcon } from "@ionic/react";
import { logoInstagram, logoFacebook, logoTwitter } from "ionicons/icons";
import acslogo from "../assets/LOGO_ACS.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center">
            <img
              src={acslogo}
              alt="logo of ajha consultancy"
              className="w-20 h-20"
            />
            <h2 className="font-poppins text-white uppercase ml-6 sm:text-sm md:text-lg">
              Ajha Consultancy Services
            </h2>
          </div>

          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com/ajhaconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500"
              >
                <IonIcon className="w-6 h-6" icon={logoInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ajha.consultancy.services?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500"
              >
                <IonIcon className="w-6 h-6" icon={logoFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/AjhaServices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500"
              >
                <IonIcon className="w-6 h-6" icon={logoTwitter} />
              </a>
            </li>
          </ul>

          <p className="text-sm text-center md:text-left">
            &copy; <span className="year">2019</span> Ajha Consultancy Services,
            Inc. All rights reserved.
          </p>
        </div>

        {/* Contact Column */}
        <div className="text-center md:text-left space-y-2">
          <address className="not-italic text-gray-300 space-y-2">
            <h2 className="font-bold text-">India:</h2>
            <p>HD-066, We work Cinnabar Hills, Challaghatta Road,</p>
            <p>Bengaluru, Bengaluru Urban, Karnataka, 560071.</p>
            <p>
              <a
                href="tel:+918904178430"
                className="text-violet-500 font-bold hover:text-white"
              >
                +91 8904178430
              </a>
            </p>

            <p className="font-bold">
              For more Information contact us through email:
              <br />
              <a
                href="mailto:marketing@ajhacs.com"
                className="text-violet-500 hover:text-white"
              >
                marketing@ajhacs.com
              </a>
            </p>
          </address>
        </div>
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-bold ">USA:</h2>

          <address className="not-italic text-gray-300 space-y-2">
            <p>2716 Baron Ln Irving, TX, 75063-75063, USA</p>
            <p>
              <a
                href="tel:+918061770933"
                className="text-violet-500 font-bold hover:text-white "
              >
                +91 (0)80-61770933
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
