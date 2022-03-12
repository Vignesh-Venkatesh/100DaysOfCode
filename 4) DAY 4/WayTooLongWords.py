n = int(input())
l =[]

for i in range(0,n):
    a = input()
    l.append(a)

for i in l:
    if len(i)>10:
        print(i[0]+str(len(i)-2)+i[-1])
    else:
        print(i)