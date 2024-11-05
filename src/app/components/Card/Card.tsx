"use client";
import { useDispatch } from 'react-redux';
import { addItem } from "@/app/store/cartSlice";

export default function Card({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 text-black p-4 max-w-sm">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={product.thumbnail} alt="" className="h-full w-full object-contain" />
      </div>
      <span>{product.title}</span>
      <span>{product.price}</span>
      <span>{product.description}</span>
      <div className="pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => dispatch(addItem(product))}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
