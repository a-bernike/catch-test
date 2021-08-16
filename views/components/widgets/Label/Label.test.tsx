import { render } from '@testing-library/react';
import Label from './index';

describe('Testing Label component', () => {
    it('test render Label', () => {
        const {container} = render(<Label title="test!" customClass="test-label" />)
        expect(container.firstChild).toHaveClass("label")
        expect(container.firstChild).toHaveClass("test-label")
        expect(container.firstChild?.textContent).toBe("test!")
    });
});