
import Welcome from "@/src/components/Welcome/Welcome";
import Company from "@/src/components/Company/Company";
import Products from "@/src/components/Products/Products";
import Footer from "@/src/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <div>
        
        <Welcome/>

        <Company/>

        <section className="bg-black py-10"></section>

        <Products/>

        <Footer/>
      </div>
    </main>
  );
}
