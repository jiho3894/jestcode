import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("<Home/>", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);

    const home = screen.getByText(
      "Instantly deploy your Next.js site to a public URL with Vercel."
    );

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
