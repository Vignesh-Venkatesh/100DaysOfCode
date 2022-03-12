s = input()

zero_team = 0
one_team = 0
flag = False

for i in range(0, len(s)):

    if (s[i] == '0'):
        zero_team = 0
        one_team += 1

        if one_team>=7:
            flag = True
            break
    
    elif (s[i] == '1'):
        one_team = 0
        zero_team += 1

        if zero_team>=7:
            flag = True
            break
    

if flag == True:
    print("YES")
else:
    print("NO")