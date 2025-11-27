// import { useState } from "react";
// import products from "@/api/api.json";
// import { ProductForm, type IProduct } from "@/components/product-form";

import { ModalProductForm } from "@/components/modal-product-form";

export const AllProductsPage = () => {
  // const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  // const handleClose = () => setSelectedProduct(null);

  return (
    <>
      {/* <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 p-4"> */}
      {/* {products?.map((product) => (
          <ProductForm
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      <ModalProductForm
        isOpen={!!selectedProduct}
        onClose={handleClose}
        title={selectedProduct?.name}
        size="lg"
      >
        {selectedProduct && (
          <div className="flex gap-6">
            <div className="bg-green-500 w-full">
              <p>small</p>
              <p>{selectedProduct.price} UZS</p>
            </div>

            <div className="bg-green-500 w-full">
              <p>middle</p>
              <p>{selectedProduct.price} UZS</p>
            </div>

            <div className="bg-green-500 w-full">
              <p>big</p>
              <p>{selectedProduct.price} UZS</p>
            </div>
          </div>
        )} */}
      {/* </ModalProductForm> */}
    </>
  );
};
