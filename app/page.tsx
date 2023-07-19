import Image from "next/image";
import Wave from "../src/assets/icons/Wave";
import yerba from "../src/assets/images/yerba.png";
import leg from "../src/assets/images/granos.png";
import mer from "../src/assets/images/mer.png";
import aceite from "../src/assets/images/aceite.png";
import vinos from "../src/assets/images/vinos.jpg";
import mail from "../src/assets/images/email.png";

export default function Home() {
  return (
    <main className="">
      <div>
        <section className="bg-gradient-to-b from-lightPink to-white ">
          <div className="flex pt-10 justify-center">
            <div className="">
              <h2 className="bg-red text-white text-2xl">Bienvenidos a Brokear</h2>
              <p className="border border-red">
                Brokear Productos & Servicios Argentina fue fundada a mediados de 2021
                en la ciudad de Cordoba, Argentina. Somos una empresa joven, pero con
                amplia trayectoria en el desarrollo de mercados de productos y
                servicios. Desde un principio, nuestro objetivo ha sido establecer
                relaciones comerciales de confianza y de largo plazo, con proveedores
                y clientes locales e internacionales, brindando soluciones completas
                de comercialización en todas las etapas del proceso.
              </p>
            </div>
            <div className="h-10 w-10 rounded-full border-4 border-black "></div>
          </div>
          <button className="border border-red text-red">Descubre Brokear</button>
        </section>

        <section className="">
          <Wave />
          <div className="bg-lightPink">
            <h4 className="bg-red text-white uppercase">La empresa</h4>
            <p className="">
              En Brokear Productos & Servicios Argentina, ayudamos a los
              importadores y exportadores de todo el mundo a operar de manera
              segura, generando confianza desde el comienzo de la coordinación
              hasta la entrega a nuestros clientes, asumiendo el desafío
              permanente de cumplir con los más altos estándares de calidad
              internacional, agregando valor a nuestros productos en cada uno de
              nuestros procesos.
            </p>
          </div>
        </section>


        <section className="bg-gradient-to-b from-lightPink to-white">
          <h4 className="bg-red text-white uppercase">Nuestros productos</h4>
          <div className="flex">

            <div className="absolute left-1">
              <div className="bg-origin-border rounded-full border-4 border-black ">
                <Image src={yerba} alt="img" className="rounded-full h-60 w-60 opacity-70"></Image>
              </div>
              <p className="relative uppercase bottom-32 text-center text-white font-bold">Yerba mate</p>
            </div>

            
           <div className="absolute left-96">
             <div className="bg-origin-border rounded-full border-4 border-black">
             <Image src={leg} alt="img" className="rounded-full h-60 w-60 opacity-70"></Image>
             </div>
             <p className="relative bottom-32 text-center text-white font-bold w-60">LEGUMBRES, GRANOS Y HORTALIZAS</p>
           </div>



            <div className="absolute left-1/2">
              <div className="bg-origin-border rounded-full border-4 border-black">
                especias
                </div>

                <p className="relative">dfsf</p>
            </div>


            <div className="absolute left-[80%]">
              <div className="bg-origin-border rounded-full border-4 border-black">
              <Image src={mer} alt="img" className="rounded-full h-60 w-60 opacity-70"></Image>
              </div>
              <p className="relative bottom-32 text-center text-white font-bold">DULCES Y MERMELADAS</p>
            </div>


            <div className="absolute top-[120%] left-1">
              <div className="bg-origin-border rounded-full border-4 border-black">
                alfaj
              </div>
              <p className="relative">sdsf</p>
            </div>


            <div className="absolute top-[120%] left-96">
              <div className="bg-origin-border rounded-full border-4 border-black">
              <Image src={aceite} alt="img" className="rounded-full h-60 w-60 opacity-70"></Image>
              </div>
              <p className="relative bottom-32 text-center text-white font-bold w-60">ACEITE DE SOJA, GIRASOL Y MANI</p>
            </div>


            <div className="absolute top-[120%] left-1/2">
              <div className="bg-origin-border rounded-full border-4 border-black">
              <Image src={vinos} alt="img" className="rounded-full h-60 w-60 opacity-70"></Image>
              </div>
              <p className="relative bottom-32 text-center text-white font-bold">VINO</p>
            </div>


            <div className="absolute top-[120%] left-[80%]">
              <div className="bg-origin-border rounded-full border-4 border-black">
                harina
              </div>
              <p className="relative">sdfsdfdsf</p>
            </div>
          </div>
        </section>

        <section className="bg-black mt-[75%]">
          <h4 className="text-white">SU AGENTE DE CONFIANZA EN ARGENTINA</h4>
          <p className="text-white">Comercio Exterior</p>
          <p className="text-white">📧 comex@brokear.com</p>
        </section>
      </div>
    </main>
  );
}
