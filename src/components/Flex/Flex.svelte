<script>
  import { clean, mixcls } from '../utils'

  let className = ''
  export {className as class}
  export let id = ''
  export let flexDirection = ''
  export let justifyContent = ''
  export let alignItems = ''
  export let flexWrap = ''
  export let style = ''

  const props = clean($$props)
  $: classes = mixcls([
    'flex-container',
    className,
    justifyContent ? `justify-content-${justifyContent}` : false,
    alignItems ? `align-items-${alignItems}` : false,
    flexWrap ? `flex-${flexWrap}` : false
  ])
</script>

<style src="./style.sass"></style>

<div 
  class={classes}
  {id}
  {style}
>
  <slot />
</div>