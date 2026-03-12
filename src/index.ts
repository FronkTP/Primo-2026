export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const val1 = i < collection_1.length ? collection_1[i] : Infinity;
    const val2 = j < collection_2.length ? collection_2[j] : Infinity;
    const val3 = k >= 0 ? collection_3[k] : Infinity;

    const minVal = Math.min(val1, val2, val3)
    if (minVal === val1) {
      result.push(val1);
      i++;
    } else if (minVal === val2) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  return result;
}
