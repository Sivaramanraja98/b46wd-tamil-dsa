/*
    Time complexity: Amount of time taken by an algorithm to run!

    either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm

        - time complexity
        - space complexity
    
    Space complexity: Amount of space required by an algorithm to run!

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Oh) - Upper Bound
    2. Big - 'Ω' (Omega) - Lower Bound
    3. Big - 'θ' (Theta) - Tight Bound

    Situations / Cases: Input

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper Bound, Worst Case, - Big 'O'
*/

/*
    Example: 

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Case(first element): If the key = 1, comparisons => 1 => Best Case => O(1) - abbr: Order of 1

    Case(middle element): If the key = 5, comparisons => 5 => Average Case => O(N/2) => O(N)

    Case(last element): If the key = 10, comparisons => 10 => N comparisons => Worst Case => O(N)
        (element not present): If the key = 13, comparisons => 10 => N comparisons => Worst Case => O(N)

*/

/*
    Example: 1

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: O(N + M)

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    let a = 0, b = 0; // declarations, conditionals, expressions, assignments, initializations
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    Total executions = values of i
    i = 0, 1, 2, 3, 4, 5...N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

     Total executions = values of j
     j = 0, 1, 2, 3, 4....M-1 => M

     total time complexity, T(N, M) = 1 + N + M
                                    = N + M [since 1 is a constant]
                                    = O(N + M)

*/

/*
    Example: 2

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    total time complexity, T(N) = 1 + N + N
                                = 2N
                                = N [Since 2 is a constant]
                                = O(N)
*/

/*
    Example: 3

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity = O(N^2)

    total time complexity, T(N) = 1 + N * N
                                = 1 + N^2
                                = N^2
                                = O(N^2)

    1. Assume some random N values
    2. Find the number of executions for each assumed N value
    3. Generalize/Find the pattern from the number of executions for each N
    4. Derive the time complexity

    Assume N = 4,
        i = 0; j = 0, 1, 2, 3 => 4 executions
        i = 1; j = 0, 1, 2, 3 => 4 executions
        i = 2; j = 0, 1, 2, 3 => 4 executions
        i = 3; j = 0, 1, 2, 3 => 4 executions

        total executions = 4 + 4 + 4 + 4
                         = 16
    
    For N = 4, executions = 16
    For N = 5, executions = 25
    For N = 6, executions = 36

    executions = N^2

    total time complexity T(N) = 1 + N^2
                               = N^2
                               = O(N^2)
*/

/*
    Example: 4

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Assume N = 5,
        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        total executions = 5 + 4 + 3 + 2 + 1
                         = 15


    N = 4, executions = 10
    N = 5, executions = 15
    N = 6, executions = 21
    
    total executions = sum of first n natural numbers
                     = (n * (n + 1))/2
    
    total time complexity = T(N) = 1 + (n * (n + 1))/2
                                 = 1/2 * (n * (n + 1))
                                 = n^2 + n
                                 = n^2
                                 = O(N^2)

*/