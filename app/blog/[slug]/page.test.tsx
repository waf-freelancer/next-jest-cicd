// page.test.tsx
/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageContent } from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<PageContent slug="Test" />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("App Router: Works with hello world text", () => {
  render(<PageContent slug="Test" />);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});