import Image from "next/image";
import yerba from "../../assets/images/yerba.png";
import leg from "../../assets/images/granos.png";
import mer from "../../assets/images/mer.png";
import aceite from "../../assets/images/aceite.png";
import vinos from "../../assets/images/vinos.jpg";

const Products = () => {
    return (
        <section className="bg-gradient-to-b from-lightPink to-white">
          <h4 className="bg-red text-white uppercase pt-40">Nuestros productos</h4>
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
    );
}
 
export default Products
