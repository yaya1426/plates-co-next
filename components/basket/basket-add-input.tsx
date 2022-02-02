import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    handleAddToBasket: () => void;
    handleClearBasket: () => void;
    input: string;
    setInput: Dispatch<SetStateAction<string>>
    showError: boolean
    setShowError: Dispatch<SetStateAction<boolean>>
}

export const BasketAddInput: React.FC<Props> = ({ handleAddToBasket, handleClearBasket, input, setInput, showError, setShowError }) => {
    const onInputChange = (e: any) => {
        setShowError(false)
        setInput(e.target.value)
    }
    return (
        <form>
            <div className="form-group">
                <label className="">Enter Product Code</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product code..."
                        aria-label="Product Code"
                        aria-describedby="Code"
                        value={input}
                        onChange={onInputChange}
                    />
                    <div className="input-group-append">
                        <div className="btn-group">
                            <button className="btn btn-primary" type="button" onClick={handleAddToBasket}>Add To Basket</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={handleClearBasket}>Clear Basket</button>
                        </div>
                    </div>
                </div>
                {showError && <span className="text-danger">This product code entered is not a valid input</span>}
            </div>
        </form>
    )
}