w = input()
upper_count = 0
lower_count = 0

for i in w:
    if i.islower():
        lower_count += 1
    elif i.isupper():
        upper_count += 1

if upper_count>lower_count:
    print(w.upper())
elif lower_count>=upper_count:
    print(w.lower())
