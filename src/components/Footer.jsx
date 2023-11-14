/** @format */

import banner from "../assets/banner.jpg";

const Footer = () => {
  return (
    <>
      <div className="w-full m-auto h-[650px] bg-orange-400">
        <div className="w-11/12 h-full ml-auto relative">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5">
            <h1 className="text-white text-2xl mb-5">Disclaimer</h1>
            <p className="text-white mb-4">
              This website is an independent project and is not affiliated with
              or endorsed by Good Smile Company or any associated ecommerce
              brand. The content provided on this website is for informational
              purposes only.
            </p>
            <p className="text-white">
              All product names, logos, and brands are the property of their
              respective owners. The use of these names and brands does not
              imply endorsement.
            </p>
            <p className="text-white">
              © [NendoNest]. No copyright infringement intended.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-orange-400 h-24 w-full flex items-center">
        <div className="w-10/12 m-auto flex justify-between">
          <h1 className="underline text-white text-lg">Good Smile Company</h1>
          <div className="flex items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACi0lEQVR4nO2ZsU8UURCHV0ULlBhjZaGSiKU29CRqAMXCoKKJVnbGf8BGE4IJEkMjhTY2xkJRG9QzRG3sCI0XowF7O0EQRcDiPjPhkWyx9+693dndd8n9kpdcsTu/+W53Z+fNRlFLLYUtYA8wAIwBr4F54Cfwzyz5PQe8Au4CZ+ScKAQB20xCz4F1/LUGTAKnJVZUEsQQ8Bk9VYHzRQIcBT6Qn94BXXlDXACWyV8rwJW8noVhiteY2rNjIB5Snh6owJhSWbbuZIW4TDi6mqU6/VZKQt4Xj0zJlrj7gb3APqATOAaMN4jxCziSBkSrxL4HDjj4XXOINe0LcVEJogK0OXq6gIgGfaqUxht7QW4hjz/PFeSTUxUzvZOGRl0hPEFE/S4BpQHU0HGLRzcwYby21qxH7KeNIDpSdrFJFWaHBWIjY/y/QLsNRPYTGqpaPB4refTZQKS30dBHi8f33J9BNnd2GnprqYiyW9TQlA3km5JJpU78Xehpzgay2EQgP2wgWatJkSDr2iCDpvmLr7rTkYRjt9Y9T98NG8hSCpDeSEHAM0/fBVuw+RJBpIfy0VdbsEoZIMB2YFWz/I6WBHJYdfsLnE0R8Ibpn+Kry/JC7E5Y11P49ttA2oE/hF9+V4HdjS7ziyYAmbRCGLO+JgA55QIi9/GXgEGqDSFihucCBhlwBlEYB+UFMu0FYUw7zVQ8FJBl4JA3iDGWhrAWAEgNuJQKImY+EgDIcCaIWAL3SwQZV4GIJXHT4zbTAKmpXYk6n96WCgBZdJ7xZuxU3+QIMgUczBUioVOeVQSZkblzYQAJyfUAT8yY1BdkxUwee6JQxGaSJ4FbUhjqHLMTeAncBk7IOcVn2lJLkY/+A1tlbk1c+pFNAAAAAElFTkSuQmCC"
              alt="facebook"
              className="w-5 mr-3"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO3WvUtXURjA8auWCBKZ4OYsKs3RUlIIgkaL/kAMGtqCgv6CSFtcRIK2phSHaFAkl4IWHcVFN116GSWIhqS3T1w4w0U994XfdZHfd7yc5/lynnOe89wkadGiBOjCFOYwi8n02ynrOmMJhtFTRpaJuYUvTvIJI+jFPbzHpViSJWxGF5xcfx0/xfmFP/iHGbTFEu2FgG30lxDvKCaVrmIBj2OJ9jMBh5jOkQ6pxlt0xJKtnRKQln78eJlwt4L0FdrzSpeX7DNeoBF2O1FB3Cg6s4tYVj8jReJdvA7nWycDReJ36udH9OHIiMfOQLyeK83In9csflhKHOT38bUG6beyr2CS9lvouw84alL8rPRuU/Ckht2mFbuSVAFteNmE9C9uV5JmwWh6KyNjL4/ZpFkwiK0K0sXo+CsC3aGn3+B3SeFRdOzlgRvYwEEY4FX4iKu5gjxwGY/Cj0AR37GCm0mdoA93Qmulr9k8nuIBruFCrcIW547/OjHT9ha3CWoAAAAASUVORK5CYII="
              alt="twitter"
              className="w-5 mr-3"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO2TQQ6CMBBFew3gSOB1BNcSbyUkGg+ksHH1TMmQoLbTWlzyVqSdmd/5PxizkQKwA3pgJIyt6YAqdviJdNqYl1uewB7IIx6UA7X0oG4itljqqHXN1HMDrkAjvWeteJCiXMlkXHouwy+yieWhCUz8kEkb6lcFXJlonqcI9L5MXJ6nCAxylDlqs0/P1wjkjtpC7u5rBDo5ahy1h39YVC1CbiTgQobPIZfJAnLW4ucY6o/90SprhdwP8l16MlF/NK/nIVyZuIq+PDfhwd5MfA2a5yHeMgltMnsewpnJhonlBVpHISIiUnwrAAAAAElFTkSuQmCC"
              alt="instagram"
              className="w-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
