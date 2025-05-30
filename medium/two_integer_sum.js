/*

 * Two Sum Problem - Leetcode Medium

 * 

 * Problem Description:

 * Given an array of integers, find two numbers such that they add up to a target.

 * 

 * Constraints:

 * - The solution is unique (there is exactly one pair that sums to the target).
 * - You may not use the same element twice (i.e., indices must be distinct).
 * - The input array can contain negative numbers and duplicates (though the solution assumes no duplicate pairs are considered, as per typical two-sum problems).

 * 

 * Approach:

 * This implementation uses a two-pointer technique on the input array. However, note that the array is not sorted, so this method may not work correctly for all cases. The two pointers start at the beginning and end of the array, and the pointers are adjusted based on whether the sum of the current elements is less than or greater than the target. This approach is efficient but relies on the array being in a specific order or containing the target pair in a way that the pointers converge correctly. For unsorted arrays, a hash map (object) approach is more reliable and commonly used.

 * 

 * Time Complexity: O(n) - Each element is processed at most once in the while loop.

 * Space Complexity: O(1) - No additional data structures are used, only variables for indices and sum.

 * 

 * Example:

 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2] (since numbers[0] + numbers[1] = 2 + 7 = 9)

 */
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        const n = numbers.length
        let j = n - 1;

        while (i < n && j >= 0) {
            const total = numbers[i] + numbers[j];

            if (total === target) {
                return [i + 1, j + 1];
            }

            else if (total < target) {
                i++;
            }

            else {
                j--;
            }
        }

        return [];
    }
}