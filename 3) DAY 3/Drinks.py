n = int(input())
a = input()
a = a.split(' ')
sum = 0
for i in a:
    sum = sum + int(i)

print("{:.12f}".format(sum/n))