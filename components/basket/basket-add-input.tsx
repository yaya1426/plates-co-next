import { useState } from "react"

interface Props {
    addToBasketHandler: any;
}

export const BasketAddInput: React.FC<Props> = ({ addToBasketHandler }) => {
    const [input, setInput] = useState<string>('');

    const onInputChange = (e: any) => {
        setInput(e.target.value)
    }
    return (
        <div className="form-group">
            <label className="">Enter Product Code</label>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product code..."
                    aria-label="Product Code"
                    aria-describedby="Code"
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <div className="btn-group">
                        <button className="btn btn-primary" type="button" onClick={() => { addToBasketHandler(input) }}>Add To Basket</button>
                        <button className="btn btn-outline-secondary" type="button">Clear Basket</button>
                    </div>
                </div>
            </div>
        </div>

    )
}