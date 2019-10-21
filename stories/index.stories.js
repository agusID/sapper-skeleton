import { storiesOf } from '@storybook/svelte'

import Colors from './Button/Colors.svelte'

const story = Component => () => ({
  Component,
})

storiesOf('Components', module).add('Button', story(Colors))
