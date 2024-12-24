import styles from "../style";
import heroImage from "../assets/Technology - 2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Hero main */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
            Innovative solutions <br className="sm:block hidden" />
            <span className="text-gradient">Tailored </span> to your unique
            needs.
          </h1>
        </div>
        {/* Hero description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our tailored solutions ensure you stay ahead of technology trends,
          optimize your operations, and secure your digital future. Let us
          handle the complexity, so you can focus on growth.
        </p>
      </div>
      {/* image */}
      <div className="flex-1 flex items-center justify-center  md:my-0 my-10 relative z-[5] md:w-auto w-[100%]">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
