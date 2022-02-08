import React, { Fragment } from "react";

const DSAAlgo2Fibnocaii = () => {

    const fib = function (n) {
        let arr = [0, 1];
        for (let i = 1; i < n; i++) {
            arr.push(arr[i - 1] + arr[i])
        }
        return arr[n];
    };

    return (
        <>
          // Input: n = 2
            // Output: 1
            // Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
            // Example 2:

            // Input: n = 3
            // Output: 2
            // Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
            // Example 3:

            // Input: n = 4
            // Output: 3
            // Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
            //0,1,1,2,3
            <br></br>
            <h1>{fib(4)}</h1>
        </>
    );
};

export default DSAAlgo2Fibnocaii;
