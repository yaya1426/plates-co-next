import { Product } from "../../models/product";

interface Props {
    products: Product[]
}

export const BasketAvailableProducts: React.FC<Props> = ({ products }) => {
    return (
        <ul className="list-group">
            {products.map((p) => <li className="list-group-item d-flex justify-content-between align-items-center" key={p.code}>{p.name} <span className="badge bg-primary rounded-pill">Code: {p.code}</span></li>)}
        </ul>
    )
}