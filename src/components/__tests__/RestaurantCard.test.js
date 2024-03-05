import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});

it("should restaurantCard component with Promoted Label", () => {
  const ComponentWithVegLabel = withVegLabel(RestaurantCard);
  render(<ComponentWithVegLabel resData={MOCK_DATA} />);
  const label = screen.getByText("Pure Veg");
  expect(label).toBeInTheDocument();
});
