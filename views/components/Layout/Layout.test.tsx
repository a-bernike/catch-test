import { render } from '@testing-library/react';
import Layout from './index';

describe('Testing Layout component', () => {
    it('test render Layout', () => {
        const {container} = render(
            <Layout>
                <p>test</p>
            </Layout>
        )
        expect(container.firstChild).toHaveClass("layout")
        expect(container.getElementsByClassName("header")).toHaveLength(1)
        expect(container.getElementsByTagName("p")).toHaveLength(1)
        expect(container.getElementsByTagName("p")[0]).toHaveTextContent("test")
    });
});