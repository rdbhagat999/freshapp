import { IProduct } from "../utils/types.ts";

export default function ProductCard({
  product,
  showImg = false,
}: {
  product: IProduct;
  showImg: boolean;
}) {
  return (
    <div class="rounded-xl border-1 p-5">
      <div class="text-2xl font-bold mb-2">{product.name}</div>
      <div class="text-sm text-gray-500 font-medium mb-1">
        Sku: {product?.sku}
      </div>
      <div class="text-sm text-gray-500 font-medium mb-1">
        Type: {product?.type}
      </div>
      <div class="text-sm text-gray-500 font-medium mb-1">
        Vendor: {product?.vendor}
      </div>
      {showImg && (
        <img src={product.thumbnail} class="product-image" alt={product.name} />
      )}
      <div class="mt-5 flex">
        <a class="underline flex-grow" href={`/products/${product.id}`}>
          View Details...
        </a>
        <span class="text-green-600 font-semibold mb-2">${product?.price}</span>
      </div>
    </div>
  );
}
