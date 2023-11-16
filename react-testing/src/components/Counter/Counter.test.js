import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../test/helpers/renderWithRedux";
import { renderTestApp } from "../../test/helpers/renderTestApp";
import Counter from "./Counter";

describe('Counter test', () => {
    test('Test router', async () => {
        const {getByTestId} = render(renderTestApp(<Counter/>, {
            route: '/',
            initialState: {
                counter: {value: 10}
            }
        }))
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        fireEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('11')
    });
})
