import Image from "next/image";

interface Props {
  productData: any;
}
function SignleProduct({ productData }: Props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={300}
              height={300}
              className="object-cover object-center rounded"
              alt="hero"
              src={productData.image}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {productData.title}
            </h1>
            <p className="mb-4 leading-relaxed">{productData.description}</p>
            <p className="mb-4 leading-relaxed font-bold text-3xl text-teal-700">
              ${productData.price}
            </p>
            <button className="inline-flex text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignleProduct;
