import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Cart Test Cases", () => {
  it("should load restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const accordionHeader = screen.getByText("New Launches (9)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("foodItems").length).toBe(9);
    expect(
      screen.getByText("Your Cart is empty! Please add items to the cart.")
    );
  });
});
