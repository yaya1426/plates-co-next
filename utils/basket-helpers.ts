import { BasketProduct } from "../models/basket-product";
import { DeliveryRate } from "../models/delivery-rate";
import { OfferRule } from "../models/offer-rule";
import { Product } from "../models/product";

//Validate if the code entered exists within the products data catalouge
export const GetProductByCode = (
  codeInput: string,
  productsCatalouge: Product[]
): Product | undefined => {
  let exists = productsCatalouge.find((x) => x.code == codeInput);
  return exists;
};

// Used to evaluate basket total and delivery total
export const CalculateTotalPrice = (
  basketItems: BasketProduct[],
  deliveryRates: DeliveryRate[],
  offerRules: OfferRule[]
): { basketTotal: string; deliveryTotal: string } => {
  let basketTotal = 0;
  let deliveryTotal = 0;
  //Evaluate total with offer rules
  basketItems.map((item) => {
    // Init total and rate
    let productTotal = 0;
    let discountQuantity = 0;
    let discountRate = 0;
    //Apply offer rules
    for (let offerIndex = 0; offerIndex < offerRules.length; offerIndex++) {
      let rule = offerRules[offerIndex];
      //If this offer code matches product code then apply offer rule
      if (rule.productCode === item.code) {
        //Get the number of discounted quantity that we will use to apply rate to. If we only have one item then set this to 0
        discountQuantity =
          item.quantity === 1
            ? 0
            : Math.round(item.quantity / rule.ruleQuantity + 0.5);
        discountRate = rule.ruleDiscount;
        console.log(rule.productCode, discountQuantity);
        break;
      }
    }
    //Apply discount rate to according quantity as per rule
    let discountedProductQuantityTotal =
      item.price * discountQuantity -
      item.price * discountRate * discountQuantity;
    //Calculate total for product non-disoucnted quantity
    productTotal = item.price * (item.quantity - discountQuantity);
    //Add the discounted total quantity to product total
    productTotal += discountedProductQuantityTotal;
    //Add to basket total
    basketTotal += productTotal;
  });
  //Evaluate delivery rates
  deliveryRates.map((rate) => {
    //Evalute the max value
    let min = rate.minValue;
    let max =
      rate.maxValue == -1 ? rate.maxValue == Number.MAX_VALUE : rate.maxValue;
    //Check if meets requirements
    if (basketTotal >= min && basketTotal < max) {
      deliveryTotal = rate.rate;
    }
  });
  //Add delivery to total
  basketTotal += deliveryTotal;
  return {
    basketTotal: basketTotal.toFixed(2),
    deliveryTotal: deliveryTotal.toFixed(2),
  };
};
