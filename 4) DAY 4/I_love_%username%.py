n = int(input())
ratings = input().split(' ')

min, max = int(ratings[0]), int(ratings[0])
ctr = 0

for i in ratings:

    if int(i)<min:
        ctr += 1
        min = int(i)
    elif int(i)>max:
        ctr += 1
        max = int(i)

print(ctr)