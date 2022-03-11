n, m = map(int, input().split())

# This program has a predefined list with prime numbers between 1 and 50

l = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

# For Panoramix's Prediction
if m in l:
    index = l.index(m)
    if l[index-1] == n:
        print("YES")
    else:
        print("NO")
else:
    print("NO")