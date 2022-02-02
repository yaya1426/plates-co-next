import { useEffect, useState } from "react"
import { BasketProduct } from "../../models/basket-product";
import { DeliveryRate } from "../../models/delivery-rate";
import { OfferRule } from "../../models/offer-rule";
import { Product } from "../../models/product";
import { CalculateTotalPrice, GetProductByCode } from "../../utils/basket-helpers";
import { FetchData } from "../../utils/fetch-data";
import { BasketAddInput } from "./basket-add-input";
import { BasketAvailableProducts } from "./basket-available-products";
import { BasketBag } from "./basket-bag";
import { BasketHeader } from "./basket-header";

export const Basket: React.FC = () => {
    //Fetched data states
    const [products, setProducts] = useState<Product[]>([]);
    const [deliveryRates, setDeliveryRates] = useState<DeliveryRate[]>([]);
    const [offerRules, setOfferRules] = useState<OfferRule[]>([])
    //Basket States
    const [basketItems, setBasketItems] = useState<BasketProduct[]>([]);
    const [delivery, setDelivery] = useState<string>('0.00')
    const [total, setTotal] = useState<string>('0.00');

    const [input, setInput] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);


    // ### Fetch the data ###
    useEffect(() => {
        //Fetch products
        FetchData('products').then((result) => setProducts(result));
        //Fetch delivery rates
        FetchData('delivery').then((result) => setDeliveryRates(result))
        //Fetch offer rules
        FetchData('offer-rules').then((result) => setOfferRules(result))
    }, [])

    // ### Evaluate Basket Total ###
    useEffect(() => {
        const totals = CalculateTotalPrice(basketItems, deliveryRates, offerRules);
        setTotal(totals.basketTotal)
        setDelivery(totals.deliveryTotal)
    }, [basketItems, deliveryRates, offerRules])

    // ### Handle Add to Basket ###
    const handleAddToBasket = () => {
        //Initially reset error state before validating
        setShowError(false)
        // Validate basket input first
        const product = GetProductByCode(input, products)
        if (product) {
            // Take a copy of the basket items
            let updatedBasket = [...basketItems];
            //Evaluate if product already exists in basket
            const findProductIndex = basketItems.findIndex(x => x.code === input);
            if (findProductIndex !== -1) {
                updatedBasket[findProductIndex].quantity += 1
            }
            else {
                //Add the produt to basket if does not exit
                updatedBasket = [...updatedBasket, { ...product, quantity: 1 }]
            }
            setBasketItems(updatedBasket)
        }
        else {
            setInput('')
            setShowError(true)
        }
    }

    // ### Handle clear basket ###
    const handleClearBasket = () => {
        //Reset the states
        setTotal('0.00')
        setDelivery('0.00')
        setBasketItems([])
        setInput('')
        setShowError(false)
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
                    <BasketAddInput
                        handleAddToBasket={handleAddToBasket}
                        handleClearBasket={handleClearBasket}
                        setInput={setInput}
                        input={input}
                        showError={showError}
                        setShowError={setShowError}
                    />
                    <BasketBag basketItems={basketItems} />
                </div>
                <div className="card-footer">
                    <h6>Delivery: ${delivery}</h6>
                    <h6>Total: ${total}</h6>
                </div>
            </div>
        </>

    )
}