import { Cart, Information } from "../Icons"

interface Price {
  "full": number
  "portion": number
  "cash": number
}
export type ICard = {
  image: string[]
  title: string
  price: Price
  details?: string
}

export const Card = ({image, title, price, details}: ICard) => {
  return (
    <div className="
        text-center
        bg-gray-900
        w-64
        w-100
        p-8
        text-slate-300
        flex
        flex-col
        rounded-lg
        leading-8
        items-end
      ">
      <img
        src={image[0]}
        alt={image[1]}
        width="auto"
        height="auto"
      />
      <h1 className="
        text-lg
        font-medium
        mt-2
        mb-2
      ">{title}</h1>
      <hr className="w-full" />
      <button className="
        mt-2
        mb-2
        p-1 
        text-sm
        rounded-md 
        flex
        w-max 
        gap-1 
        cursor-pointer 
        hover:underline
        active:bg-indigo-600
        focus:outline-none
        focus:ring 
        focus:ring-violet-300
      "><Information />Detalhes</button>
      <p className="mt-2 mb-2 text-sm">
        <strong>R$ {price.full}</strong> em até 3x de <strong>R$ {price.portion}</strong> ou <strong>R$ {price.cash}</strong> a vista
      </p>
      <button className="
        w-full
        mt-2
        p-2
        flex
        flex-row
        justify-center
        items-center
        font-medium
        bg-indigo-700
        rounded-md
        active:bg-indigo-600
        focus:outline-none
        focus:ring 
        focus:ring-violet-300
        hover:bg-indigo-600
        transition-colors
      ">
        <Cart />
        COMPRAR
      </button>
    </div>
  )
}
