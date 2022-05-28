import { render, screen } from "@testing-library/react";
import Home from "@pages/index.page";

describe("Home", () => {
  it("renders a div", () => {
    render(<Home />);
  });
});
