import random from './random';
import randomString from 'random-string';

// jc - the noobest
// brian - the pangetest
// gian - the noobest v2
// kier - the most handsome
const FAKES = ['jC', 'jc', 'KieR', 'kieR', 'k13r', 'KiiER', 'GiiAN', 'bBRiaAN'];

/**
 * "faker" data
 * @return {string}
 */
export default function randomName() {
  const INVERSE_ORDER = 1;

  const filler = randomString({ length: random(0, 15) });
  const name = FAKES[random(0, FAKES.length - 1)];

  return random(0, 1) === INVERSE_ORDER
    ? `${filler}${name}`
    : `${name}${filler}`;
}
