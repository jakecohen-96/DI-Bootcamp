# def hello(greeting, name):
#     if greeting == 'hello':
#         print(f"goodbye" "{name}")
#     else:  
#         print(f"{greeting} {name}") 
# hello("jimmmy", "hello")

# def hello(greeting, name='jimmy'):
#     if greeting == 'hello':
#         print(f"goodbye {name}")
#     else:  
#         print(f"{greeting} {name}") 
# hello("ahoy!", "steve")


# def calculation(a, b):
#     addition = a + b
#     subtraction = a - b
#     return addition, subtraction

# res = calculation(40,10)
# print(res)

# def create(first, last):
#     first = first.capitalize()
#     last = last.capitalize()
#     return 'hi' + ' ' + first + ' ' + last
# full = create('jake', 'cohen')
# print(full)

from functools import reduce

nums = [3,5,4,8,10,22,26,38,44,55]

even = list(map(lambda n: n**2, nums))

sum = reduce(lambda a,b, : a+b, nums)

print(even)
print(sum)