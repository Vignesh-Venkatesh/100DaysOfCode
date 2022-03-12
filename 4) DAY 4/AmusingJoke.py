a = input()
b = input()
c = input()

for i in c:
    if i in a:
        index = a.index(i)
        a = a[:index]+a[index+1:]
        c = c[1:]
    elif i in b:
        index = b.index(i)
        b = b[:index]+b[index+1:]
        c = c[1:]

if len(a)!=0 or len(b)!=0 or len(c)!=0:
    print("NO")
else:
    print("YES")