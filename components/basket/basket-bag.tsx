import { BasketProduct } from "../../models/basket-product";

interface Props {
    basketItems: BasketProduct[];
}

export const BasketBag: React.FC<Props> = ({ basketItems }) => {
    return (
        <ul className="list-group">
            {basketItems.map((item, i) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start" key={item.code + '_' + i}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.name} - {item.code}</div>
                            ${item.price} x {item.quantity}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}