n = int(input())

lucky_count = 0

while n>0:
    if (n%10 == 4) or (n%10 == 7):
        lucky_count += 1
    n //= 10

if (lucky_count == 4) or (lucky_count == 7):
    print("YES")
else:
    print("NO")