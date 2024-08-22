import Banner from "../components/banner";
import Layout1 from "../Layouts/Layout1";
import Features from "../components/Features";
import Categorias from "../components/Categorias";
import LoNuevo from "../components/LoNuevo";

export default function Home() {
  return (
    <Layout1>
        <Banner>
      </Banner>
      <Features></Features>
      <Categorias></Categorias>
      <LoNuevo></LoNuevo>
    </Layout1>
  );
}