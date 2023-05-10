import Header from "@/components/layouts/Header";
import Meta from "@/components/meta";
import SingleProduct from "@/components/sections/pages/product/LeftProductSide";
export default function Index() {
  return (
    <>
      <Meta title="Dashboard" />
      <div>
        <Header />
        <SingleProduct />
      </div>
    </>
  );
}
