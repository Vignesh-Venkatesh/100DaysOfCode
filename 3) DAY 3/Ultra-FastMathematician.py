a = input()
b = input()

output = ''

for i in a:
    index = a.index(i)
    
    if i!=b[index]:
        output += '1'
    else:
        output += '0'
    

    a = a[1:]
    b = b[1:]

print(output)
