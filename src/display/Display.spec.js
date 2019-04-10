// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Display from './Display'

describe('<Display />', () => {
  afterEach(() => cleanup());
  it('render Display', () => {
    render(<Display />)
  });

  it('display closed if closed prop is true', () => {
    const { getByText } = render(<Display closed={true} />)
    const closed = getByText(/closed/i)
    expect(closed)
  })

  it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
    const { getByText } = render(<Display locked={true} />)
    const closed = getByText(/locked/i)
    expect(closed)
  })

  it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
    const { getByText } = render(<Display locked={true} closed={true} />)
    const locked = getByText(/locked/i)
    expect(locked).toHaveProperty('className', 'led red-led')
    const closed = getByText(/closed/i)
    expect(closed).toHaveProperty('className', 'led red-led')
  })

  it('when unlocked or open use the green-led class', () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    const unlocked = getByText(/unlocked/i)
    expect(unlocked).toHaveProperty('className', 'led green-led')
    const open = getByText(/open/i)
    expect(open).toHaveProperty('className', 'led green-led')
  })
})