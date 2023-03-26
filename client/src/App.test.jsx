import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App',()=>{
    it('should have healine h1',()=>{
        render(<App />);
        expect(screen.getByText(/House of Plant/i)).toBeInTheDocument();
    })
})