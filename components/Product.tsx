import { IProduct } from "../utils/types.ts";

export default function ProductCard({
  product,
}: {
  product: IProduct;
}) {
  return (
    <div class="rounded-xl border-1 p-5">
      <div class="text-2xl font-bold mb-2">{product.name}</div>
      <img src={product.thumbnail} alt={product.name} />
      <div class="mt-5 flex">
        <a class="underline flex-grow" href={`/products/${product.id}`}>
          View Details...
        </a>
      </div>
    </div>
  );
}
