export function mixcls(mix) {
  let k,
    y,
    str = ''
  if (mix) {
    if (typeof mix === 'object') {
      if (!!mix.push) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k] && (y = toVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      } else {
        for (k in mix) {
          if (mix[k] && (y = toVal(k))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else if (typeof mix !== 'boolean' && !mix.call) {
      str && (str += ' ')
      str += mix
    }
  }
  return str
}

export function clean($$props) {
  // TODO support keys
  // eslint-disable-next-line no-unused-vars
  const { children, $$scope, $$slots } = $$props
  const rest = {}
  for (const key of Object.keys($$props)) {
    if (
      key !== 'children' &&
      key !== '$$scope' &&
      key !== '$$slots'
    ) {
      rest[key] = $$props[key]
    }
  }
  return rest
}
