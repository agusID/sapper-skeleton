<script>
  import { clean, mixcls } from '../utils'

  let className = ''
  export { className as class }
  export let active = false
  export let block = false
  export let children = undefined
  export let close = false
  export let color = 'secondary'
  export let disabled = false
  export let rounded = false
  export let href = ''
  export let id = ''
  export let outline = false
  export let size = ''
  export let style = ''
  export let value = ''
  export let flex = false

  const props = clean($$props)

  $: ariaLabel = $$props['aria-label']
  $: classes = mixcls([
    className,
    { close },
    close || 'btn',
    close || `btn${outline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    block ? 'btn-block' : false,
    rounded ? 'btn-rounded' : false,
    flex ? 'btn-flex' : false,
    { active },
  ])
  $: defaultAriaLabel = close ? 'Close' : null
</script>

<style src="./style.sass">

</style>

{#if href}
  <a
    {...props}
    {id}
    class={classes}
    {disabled}
    on:click
    {href}
    aria-label={ariaLabel || defaultAriaLabel}
    {style}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <button
    {...props}
    {id}
    class={classes}
    {disabled}
    on:click
    {value}
    aria-label={ariaLabel || defaultAriaLabel}
    {style}>
    <slot>
      {#if close}
        <span aria-hidden="true">×</span>
      {:else if children}
        {children}
      {:else}
        <slot />
      {/if}
    </slot>
  </button>
{/if}
