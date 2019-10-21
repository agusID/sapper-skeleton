import { render, cleanup } from '@testing-library/svelte'
import Button from './Button.svelte'

// const renderButton = props => {
//   const { container } = render(Button, { props })
//   return container
// }

beforeEach(cleanup)

afterEach(() => {
  cleanup()
})

describe('Button', () => {
  // test('should render text and default color', () => {
  //   const container = renderButton({ children: 'Hello world!' })
  //   const button = container.querySelector('.btn')
  //   expect(button.innerHTML).toBe('Hello world!')
  //   expect(button.className).toBe('btn btn-secondary')
  // })
  test('shows proper heading when rendered', () => {
    const { getByText } = render(Button, {
      props: { children: 'Button Text' },
    })
    expect(getByText('Button Text')).toBeInTheDocument()
  })
})
