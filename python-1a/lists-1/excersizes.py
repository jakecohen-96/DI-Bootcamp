# # 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# result = basket.pop(0)

# print(result)

x = int(input('Enter the Number:')) 

result = 0

for i in range(1, x):
    if x % i == 0:
        result += i

if result == x:
    print(x, "is a perfect number")
else:
    print(x, "is not a perfect number")
