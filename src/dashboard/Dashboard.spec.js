// Test away
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from 'react-test-renderer'

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  afterEach(() => cleanup());
  it("renders Dashboard", () => {
    render(<Dashboard />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to open and unlocked", () => {
    const { getByText } = render(<Dashboard />);

    const unlocked = getByText(/unlocked/i); 
    const open = getByText(/open/i); 
    expect(unlocked).toBeTruthy();
    expect(open).toBeTruthy();
  });
});
