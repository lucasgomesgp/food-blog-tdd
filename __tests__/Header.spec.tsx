import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { Header } from "@/components/header";

describe("Header Component", () => {
    it("should be able to redirect", () => {
        render(<Header />);
        const foodNinjaLink = screen.getByText("Food Ninja");
        const blogLink = screen.getByText("Blog");
        const aboutLink = screen.getByText("About");
        const contactLink = screen.getByText("Contact");

        expect(foodNinjaLink).toHaveAttribute("href", "/")
        expect(blogLink).toHaveAttribute("href", "/blog")
        expect(aboutLink).toHaveAttribute("href", "/about")
        expect(contactLink).toHaveAttribute("href", "/contact")
    });
})