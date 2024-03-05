import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/**
 * This fetch function is exactly same as what browser gives us.
 * global is a global object wherever it is being rendered.
 * jest.fn() will give me a mock fetch function.
 * This function basically takes a callback function where I need to mock the way the fetch function works.
 * fetch function returns a promise.
 */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    //fetch function returns a promise.
    json: () => {
      //This promise resolves with a json and this json is again a function.
      return Promise.resolve(MOCK_DATA); //This json function returns a Promise.resolve and this Promise.resolve actually has data like it's there in the api.
    },
  });
});

it("should search resList for pizza test input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  //expect(searchBtn).toBeInTheDocument();
  // Screen should load 3 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});
