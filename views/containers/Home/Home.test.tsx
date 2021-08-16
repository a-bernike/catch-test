import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from 'store/index'
import Home from './index';

const dummyProducts = {
    "metadata": {
        "query": "best sellers",
        "total": 102,
        "page": 1,
        "pages": 3
    },
    "results": [
        {
            "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
            "name": "Buy Olaplex No. 3 Hair Perfector",
            "salePrice": 3145,
            "retailPrice": 5000,
            "imageUrl": "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
            "quantityAvailable": 65
        },
        {
            "id": "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
            "name": "Havaianas Top Thongs -  Black",
            "salePrice": 1499,
            "retailPrice": 0,
            "imageUrl": "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
            "quantityAvailable": 71
        },
        {
            "id": "46397d56-2726-45de-8514-d8ed6984a600",
            "name": "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
            "salePrice": 5900,
            "retailPrice": 18417,
            "imageUrl": "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
            "quantityAvailable": 0
        }
    ]
}

describe('Testing Home component', () => {
    it('test render Home', () => {
        const {container} = render(
            <Provider store={store}>
                <Home
                    products={dummyProducts}
                />
            </Provider>
        )
        expect(container.firstChild).toHaveClass("home")
        //HEADER
        expect(container.getElementsByClassName("home-header")).toHaveLength(1)
        expect(container.querySelector(".home-header a")).toHaveAttribute("href", "/")
        expect(container.querySelector(".home-header a img")).toHaveAttribute("alt", "logo")
        expect(container.querySelector(".home-header a img")).toHaveAttribute("src", "/images/logo.svg")
        const dropdown = container.querySelector(".home-header .dropdown")
        expect(dropdown).toHaveValue("1")
        expect(dropdown!.childNodes).toHaveLength(2)
        expect(dropdown!.childNodes[0]).toHaveValue("1")
        expect(dropdown!.childNodes[0]).toHaveTextContent("Highest Price")
        expect(dropdown!.childNodes[1]).toHaveValue("0")
        expect(dropdown!.childNodes[1]).toHaveTextContent("Lowest Price")
        //LIST
        expect(container.getElementsByClassName("home-list")).toHaveLength(1)
        expect(container.getElementsByClassName("home__product-card")).toHaveLength(3)
    });
    it('test change dropdown in header', () => {
        const {container} = render(
            <Provider store={store}>
                <Home
                    products={dummyProducts}
                />
            </Provider>
        )
        const dropdown = container.querySelector(".home-header .dropdown")
        expect(dropdown).toHaveValue("1")
        fireEvent.change(dropdown!, {
            target: {value: "0"}
        })
        expect(dropdown).toHaveValue("0")
        fireEvent.change(dropdown!, {
            target: {value: "1"}
        })
        expect(dropdown).toHaveValue("1")
    });
});