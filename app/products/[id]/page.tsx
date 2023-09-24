import SignleProduct from "@/components/SignleProduct";

async function singleProduct(id: any) {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });
  return data.json();
}

async function page({ params }: { params: { id: any } }) {
  const { id } = params;
  const productData = await singleProduct(id);
  return (
    <>
      <SignleProduct productData={productData} />
    </>
  );
}

export default page;
