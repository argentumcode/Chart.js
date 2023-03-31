import colorLib from '@kurkle/color';

export function isPatternOrGradient(value) {
  // XXX バグ。ProxyObjectが渡ることが想定されていない。
  // https://github.com/chartjs/chartjs-chart-financial/issues/128
  if (value && typeof value === 'object' && typeof value.toString === 'function') {
    const type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }

  return false;
}

export function color(value) {
  return isPatternOrGradient(value) ? value : colorLib(value);
}

export function getHoverColor(value) {
  return isPatternOrGradient(value)
    ? value
    : colorLib(value).saturate(0.5).darken(0.1).hexString();
}
