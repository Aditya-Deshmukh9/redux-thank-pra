import { useState } from "react";

function CProduct(data) {
  const [Qty, setQty] = useState(0);
  const { img, name, price } = data;
  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center">
          <img className="h-16 w-16 mr-4" src={img} alt="Product image" />
          <span className="font-semibold">{name}</span>
        </div>
      </td>
      <td className="py-4">$19.99</td>
      <td className="py-4">
        <div className="flex items-center">
          <button
            onClick={() => {
              return Qty > 0 && setQty(Qty - 1);
            }}
            className="border rounded-md py-2 px-4 mr-2"
          >
            -
          </button>
          <span className="text-center w-8">{Qty}</span>
          <button
            onClick={() => {
              return Qty < 10 && setQty(Qty + 1);
            }}
            className="border rounded-md py-2 px-4 ml-2"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4">${price}</td>
    </tr>
  );
}

export default CProduct;
