# challenge 1
#  Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

user_number = int(input('Please enter a number'))
length = int(input('now please a length'))

result = [user_number * i for i in range(1, length + 1)]

print(list(result))