import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be card in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Hola soy un card de React/i)).toBeInTheDocument();
  });
});
