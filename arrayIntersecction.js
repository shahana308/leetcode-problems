var intersection = function (nums1, nums2) {
  const intersect = [];
  let length = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < length; i++) {
    let j = nums1[i];
    if (nums2.includes(j)) {
      intersect.push(j);
    }
  }
  return [...new Set(intersect)]; // find unique elements in array
};
