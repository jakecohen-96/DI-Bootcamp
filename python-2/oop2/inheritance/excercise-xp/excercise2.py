class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        speed = (self.weight/self.age*10)
        return speed
    
    def fight(self, other_dog):
        self_strength = self.weight * self.run_speed()

        other_dog_strength = other_dog.run_speed() * other_dog.weight 

        if self_strength > other_dog_strength:
            return f'{self.name} is a good boy!! {other_dog.name} should get better strength training'
        elif other_dog_strength > self_strength:
            return f'{self.name} need strength training tomorrow! {other_dog.name} was simply better'
        else:
            print('Its a draw' )    

dog1 = Dog('Kinder', 4, 50)
dog2 = Dog('Moochie', 3, 32)
dog3 = Dog('Max', 2, 10)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(dog1.fight(dog2))