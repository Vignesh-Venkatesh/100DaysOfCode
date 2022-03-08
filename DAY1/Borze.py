s = input()
code = []
for i in s:
    code.append(i)

output = ''

while len(code)>0:
    if code[0] == '-':
        if code[1] == '.':
            output = output+'1'
            code = code[2:]
        elif code[1] == '-':
            output = output+'2'
            code = code[2:]
    elif code[0] == '.':
        output = output+'0'
        code = code[1:]

print(output)
