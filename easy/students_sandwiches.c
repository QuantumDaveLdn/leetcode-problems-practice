// Number of Students Unable to Eat Lunch - Easy
// 
// Problem Description:
// The school cafeteria offers circular and square sandwiches. There are students in a queue, each with a preference for one type, and a stack of sandwiches. Return the number of students who cannot eat.
// 
// Example 1:
// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0
// Explanation: All students can eat as the sandwiches match their preferences.
// 
// Example 2:
// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3
// Explanation: The last three students in line want a type-1 sandwich, but only type-0 sandwiches are left.
// 
// Constraints:
// 1 <= students.length, sandwiches.length <= 10^5
// students.length == sandwiches.length
// students[i] is 0 or 1.
// sandwiches[i] is 0 or 1.
// 
// Approach (Counting Method):
// Count the preferences of students and iterate through the sandwiches, decrementing the count for each served sandwich; stop when no more can be served and return the remaining students.
// 
// Time Complexity: O(n) where n is the length of the arrays.
// Space Complexity: O(1) as we use a fixed-size array for counting.

int countStudents(int* students, int studentsSize, int* sandwiches, int sandwichesSize) {
    int count[2] = {0, 0};

    for (int i = 0; i < studentsSize; i++) {
        count[students[i]]++;
    }

    for (int i = 0; i < sandwichesSize; i++) {
        if (count[sandwiches[i]] > 0) {
            count[sandwiches[i]]--;
        } else {
            break;
        }
    }

    return count[0] + count[1]; 
}