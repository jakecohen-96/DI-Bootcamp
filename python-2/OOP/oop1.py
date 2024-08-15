class dog():
    def __init__(self, name, age, color, noise):
        self.name = name
        self.age = age
        self.color = color
        self.noise = noise
    
    def bark(self):
        return f"{self.name} goes {self.noise} at night"
    
    def eat(self, food):
        return f"{self.name} eats {food} ayyyy"
    
    def change_color(self, new_color):
        self.color = new_color
        print( f"{self.name} color changed to {new_color}")

first_dog = dog('rex', 5, 'black', 'bark')
second_dog = dog('bobby', 4, 'brown', 'oink')
third_dog = dog('damn', 9, 'pink', 'waaaa')

print(first_dog.eat('chicken'))
print(second_dog.eat('tuna'))

print(f"{first_dog.name} is getting older")
print(f"He was {first_dog.color} but with age")
first_dog.change_color('grey')