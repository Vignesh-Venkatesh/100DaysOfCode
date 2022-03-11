n = int(input())
arrangement = input()

a = []
for i in arrangement:
    a.append(i)

count = 0

for i in range(1, len(a)):
    if a[i-1] == a[i]:
        count+=1

print(count)