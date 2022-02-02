import { useEffect, useState } from "react"
import { DeliveryRate } from "../../models/delivery-rate";
import { Product } from "../../models/product";
import { FetchData } from "../../utils/fetch-data";
import { BasketAddInput } from "./basket-add-input";
import { BasketAvailableProducts } from "./basket-available-products";
import { BasketHeader } from "./basket-header";

export const Basket: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [deliveryRates, setDeliveryRates] = useState<DeliveryRate[]>([]);
    const [basketItems, setBasketItems] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);

    // ### Fetch the data ###
    useEffect(() => {
        //Fetch products
        FetchData('products').then((result) => setProducts(result));
        //Fetch delivery rates
        FetchData('delivery').then((result) => setDeliveryRates(result))
    }, [])

    const addToBasketHandler = (productCode: string) => {
        console.log(productCode)
    }

    return (
        <>
            <BasketHeader />
            {/* Render the products */}
            <BasketAvailableProducts products={products} />
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Basket</h4>
                </div>
                <div className="card-body">
                    <BasketAddInput addToBasketHandler={addToBasketHandler} />
                </div>
            </div>
        </>

    )
}