import Home from "./Home.js";
import { render } from "@testing-library/react";

describe("Test cases for Home page", () => {
  test("snapshot for the Home page", () => {
    render(<Home />);
  });
});
