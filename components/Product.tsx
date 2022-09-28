import { IProduct } from "../utils/types.ts";

export default function ProductCard({
  product,
  showImg = false,
}: {
  product: IProduct;
  showImg: boolean;
}) {
  return (
    <article class="rounded-xl border-1 p-5">
      <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
      <p class="text-sm text-gray-500 font-medium mb-1">
        Sku: {product?.sku}
      </p>
      <p class="text-sm text-gray-500 font-medium mb-1">
        Type: {product?.type}
      </p>
      <p class="text-sm text-gray-500 font-medium mb-1">
        Vendor: {product?.vendor}
      </p>
      {showImg && (
        <img src={product.thumbnail} class="product-image" alt={product.name} />
      )}
      <div class="mt-5 flex">
        <a class="underline flex-grow" href={`/products/${product.id}`}>
          View Details...
        </a>
        <p class="text-green-600 font-semibold mb-2">${product?.price}</p>
      </div>
    </article>
  );
}
