import { render } from '@testing-library/react';
import ProductCard from './index';

describe('Testing ProductCard component', () => {
    it('test render ProductCard', () => {
        const {container} = render(<ProductCard 
            image="/photo.jpg"
            title="Product ABC"
            price={100}
            slashedPrice={200}
            qty={10}
            customClass="test-card"
        />)
        expect(container.firstChild).toHaveClass("product-card")
        expect(container.firstChild).toHaveClass("test-card")
        expect(container.getElementsByClassName("product-card__container")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__image")).toHaveLength(1)
        expect(container.getElementsByTagName("img")).toHaveLength(1)
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("alt", "Product ABC")
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("src", "/photo.jpg")
        expect(container.getElementsByClassName("product-card__info")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")[0]).toHaveTextContent("Product ABC")
        expect(container.getElementsByClassName("product-card__price")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__price")[0]).toHaveTextContent("$100.00")
        expect(container.getElementsByClassName("product-card__slashed-price")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__slashed-price")[0]).toHaveTextContent("$200.0")
        expect(container.getElementsByClassName("label")).toHaveLength(0)
    });
    it('test render ProductCard with SOLD OUT label', () => {
        const {container} = render(<ProductCard 
            image="/photo.jpg"
            title="Product ABC"
            price={100}
            slashedPrice={200}
            qty={0}
            customClass="test-card"
        />)
        expect(container.firstChild).toHaveClass("product-card")
        expect(container.firstChild).toHaveClass("test-card")
        expect(container.getElementsByClassName("product-card__container")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__image")).toHaveLength(1)
        expect(container.getElementsByTagName("img")).toHaveLength(1)
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("alt", "Product ABC")
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("src", "/photo.jpg")
        expect(container.getElementsByClassName("product-card__info")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")[0]).toHaveTextContent("Product ABC")
        expect(container.getElementsByClassName("product-card__price")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__price")[0]).toHaveTextContent("$100.00")
        expect(container.getElementsByClassName("product-card__slashed-price")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__slashed-price")[0]).toHaveTextContent("$200.0")
        expect(container.getElementsByClassName("label")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__sold-out")).toHaveLength(1)
        expect(container.getElementsByClassName("label")[0]).toHaveTextContent("SOLD OUT")
    });
    it('test render ProductCard without slashed price text', () => {
        const {container} = render(<ProductCard 
            image="/photo.jpg"
            title="Product ABC"
            price={100}
            slashedPrice={0}
            qty={10}
            customClass="test-card"
        />)
        expect(container.firstChild).toHaveClass("product-card")
        expect(container.firstChild).toHaveClass("test-card")
        expect(container.getElementsByClassName("product-card__container")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__image")).toHaveLength(1)
        expect(container.getElementsByTagName("img")).toHaveLength(1)
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("alt", "Product ABC")
        expect(container.getElementsByTagName("img")[0]).toHaveAttribute("src", "/photo.jpg")
        expect(container.getElementsByClassName("product-card__info")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")).toHaveLength(1)
        expect(container.getElementsByTagName("h3")[0]).toHaveTextContent("Product ABC")
        expect(container.getElementsByClassName("product-card__price")).toHaveLength(1)
        expect(container.getElementsByClassName("product-card__price")[0]).toHaveTextContent("$100.00")
        expect(container.getElementsByClassName("product-card__slashed-price")).toHaveLength(0)
        expect(container.getElementsByClassName("label")).toHaveLength(0)
    });
});