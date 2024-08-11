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


def calculation(a, b):
    addition = a + b
    subtraction = a - b
    return addition, subtraction

res = calculation(40,10)
print(res)