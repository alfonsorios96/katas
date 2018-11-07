They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #55:
Find a matrix in a matrix

Description
Give you a matrix(2D array, rows === columns). The matrix contains only 0 and 1 . Please find out the largest sub matrix(2D array, rows === columns) that contains same numbers of 0 and 1.

Task
Complete function findMatrixIn() that accepts a argument matrix: An 2D array that contains 0 and 1.

Returns the largest sub matrix in this matrix(the smallest square is a 1x1 matrix). If there are multiple optional results, which has smaller row and column index should be returned. If no sub matrix is found, return []

Note: Please pay attention to performance ;-)

Example
```
matrix=[
[1,1,1],
[0,0,0],
[1,1,1]
]
findMatrixIn(matrix)  should return:
[
[1,1],
[0,0]
]

matrix=[
[1,1,1,0],
[0,0,0,1],
[1,1,1,0],
[0,0,0,1]
]
findMatrixIn(matrix)  should return:
[
[1,1,1,0],
[0,0,0,1],
[1,1,1,0],
[0,0,0,1]
]
(the matrix self)

matrix=[
[1,1,0,1,0],
[1,0,1,0,1],
[1,1,0,1,0],
[1,0,1,0,1],
[1,1,1,1,1]
]
findMatrixIn(matrix)  should return:
[
[1,0,1,0],
[0,1,0,1],
[1,0,1,0],
[0,1,0,1]
]

matrix=[
[1,1,1],
[0,1,0],
[1,1,1]
]
```
findMatrixIn(matrix)  should return:[]
