matrix = []
index = ()

for i in range(5):
    a,b,c,d,e = map(int, input().split())
    l = [a,b,c,d,e]
    if 1 in l:
        index = (i+1, l.index(1)+1)
    matrix.append([a,b,c,d,e])

# column_wise = abs(3-index[1])
# row_wise = abs(3-index[0])
# total = column_wise+row_wise

print(abs(3-index[1])+abs(3-index[0]))
