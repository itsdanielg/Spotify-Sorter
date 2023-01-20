import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders learn react link", () => {
  renderApp();
  expect(screen.getByText("hello")).toBeVisible();
});

const renderApp = () => {
  return render(<App />);
};
