import { render } from '@testing-library/react';
import Header from './index';

describe('Testing Header component', () => {
    it('test render Header', () => {
        const {container} = render(<Header />)
        expect(container.firstChild).toHaveClass("header")
    });
});