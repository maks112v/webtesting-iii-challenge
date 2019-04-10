// Test away!
import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Controls from './Controls'

describe('<Controls />', () => {
  afterEach(() => cleanup());
  it('render <Controls />', () => {
    render(<Controls />)
  })

  it('cannot be closed or opened if it is locked', () => {
    const { getByTestId } = render(<Controls locked={true} open={false} />)
    const button = getByTestId('toggle-button')
    expect(button.hasAttribute('disabled','disabled')).toBeTruthy()
  })

  it('cannot be closed or opened if it is locked', () => {
    const { getByTestId } = render(<Controls locked={false} open={true} />)
    const button = getByTestId('lock-button')
    expect(button.hasAttribute('disabled','disabled')).toBeTruthy()
  })
})
