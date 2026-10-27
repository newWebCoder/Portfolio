import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio hero and featured profile", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /frontend developer/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /explore my work/i })
  ).toHaveAttribute("href", "#projects");
  expect(
    screen.getByRole("img", { name: "Portrait of Vidyashree Muroor" })
  ).toHaveAttribute("src", "/vidyashree_Muroor.PNG");
  expect(screen.getByText("TypeScript")).toBeInTheDocument();
  expect(
    screen.getByText("M.Tech — Microelectronics and Control Systems")
  ).toBeInTheDocument();
});
