import { clientlogos } from "./clientlogos";
import styles from "../style";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4 flex-col`}>
      <header className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-white my-5">Our Clients</h2>
      </header>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clientlogos.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} xs:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="xs:w-[192px] w-[100px] object-contain mb-6"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
