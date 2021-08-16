import { fireEvent, render } from '@testing-library/react';
import Dropdown from './index';

describe('Testing Dropdown component', () => {
    it('test render Dropdown', () => {
        const {container} = render(
            <Dropdown
                value="a"
                customClass="test-class"
                onChange={jest.fn()}
            >
                <option value="a">a</option>
                <option value="b">b</option>
            </Dropdown>
        );
        expect(container.firstChild).toHaveClass("dropdown")
        expect(container.firstChild).toHaveClass("test-class")
        const selectEl: HTMLSelectElement = [].slice.call(container.getElementsByClassName("dropdown"))[0]
        expect(selectEl.childNodes.length).toBe(2)
        expect(selectEl.value).toBe("a")
    });
    it('test render Dropdown without children', () => {
        const {container} = render(
            <Dropdown
                value="a"
                onChange={jest.fn()}
            />
        );
        expect(container.firstChild).toHaveClass("dropdown")
        const selectEl: HTMLSelectElement = [].slice.call(container.getElementsByClassName("dropdown"))[0]
        expect(selectEl.childNodes.length).toBe(0)
        expect(selectEl.value).toBe("")
    });
    it('test render Dropdown without correct options children', () => {
        const {container} = render(
            <Dropdown
                value="a"
                onChange={jest.fn()}
            >
                <option value="">-</option>
            </Dropdown>
        );
        expect(container.firstChild).toHaveClass("dropdown")
        const selectEl: HTMLSelectElement = [].slice.call(container.getElementsByClassName("dropdown"))[0]
        expect(selectEl.value).toBe("")
    });
    it('test change Dropdown value', () => {
        const handleOnChange = jest.fn()
        const {container} = render(
            <Dropdown
                value="a"
                onChange={handleOnChange}
            >
                <option value="a">a</option>
                <option value="b">b</option>
            </Dropdown>
        );
        const selectEl: HTMLSelectElement = [].slice.call(container.getElementsByClassName("dropdown"))[0]
        expect(handleOnChange).toBeCalledTimes(0)
        fireEvent.change(selectEl, {
            target: {value: "b"}
        })
        expect(handleOnChange).toBeCalledTimes(1)
    });
});