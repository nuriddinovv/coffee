import { useState } from "react";
import data from "@/api/api.json";
import { ModalProductForm } from "@/components/modal-product-form";
import { ProductForm } from "@/components/product-form";

export interface ISizes {
  size: number;
  price?: number;
  preparation: string;
}

export interface IProducts {
  id: number;
  name: string;
  image?: string;
  description: string;
  category: number;
  sizes: ISizes[];
}

export const AllProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(
    null
  );

  const products: IProducts[] = data.products as IProducts[];

  const handleClose = () => setSelectedProduct(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 p-4">
        {products.map((product) => (
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
              <p>{selectedProduct.sizes[0].size}</p>
              <p>{selectedProduct.sizes[0].price} UZS</p>
            </div>

            <div className="bg-green-500 w-full">
              <p>{selectedProduct.sizes[1].size}</p>
              <p>{selectedProduct.sizes[1].price} UZS</p>
            </div>

            <div className="bg-green-500 w-full">
              <p>{selectedProduct.sizes[2].size}</p>
              <p>{selectedProduct.sizes[2].price} UZS</p>
            </div>
          </div>
        )}
      </ModalProductForm>
    </>
  );
};
