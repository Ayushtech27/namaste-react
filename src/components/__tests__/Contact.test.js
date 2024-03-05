import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    // beforeAll inside describe block runs the function inside it before all the tests.
    console.log("Before All");
  });

  beforeEach(() => {
    // beforeEach inside describe block runs the function inside it before each test.
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All"); // afterAll inside describe block runs the function inside it after all the tests.
  });

  afterEach(() => {
    console.log("After Each"); // afterEach inside describe block runs the function inside it after each test.
  });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assersion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assersion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assersion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load two input boxes on the contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assersion
    expect(inputBoxes.length).toBe(2);
  });
});
