n, m = map(int, input().split())

# For finding prime numbers
l = []
for i in range(2, 51):
    check = False
    for j in range(2, int(i/2)+1):
        if (i%j==0):
            check = True
            break
    if check == False:
        l.append(i)

# For Panoramix's Prediction
if m in l:
    index = l.index(m)
    if l[index-1] == n:
        print("YES")
    else:
        print("NO")
else:
    print("NO")