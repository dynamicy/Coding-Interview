/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m - 1;
    let index2 = n - 1;
    let index = m + n - 1;

    while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[index] = nums1[index1];
            index1--;
            index--;
        } else {
            nums1[index] = nums2[index2];
            index2--;
            index--;
        }
    }

    while (index1 >= 0 ) {
        nums1[index] = nums1[index1];
        index1--;
        index--;
    }

    while (index2 >= 0) {
        nums1[index] = nums2[index2];
        index2--;
        index--;
    }
};