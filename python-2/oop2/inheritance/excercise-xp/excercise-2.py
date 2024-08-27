class dog():
    def __init__(self, name, age, weight):
        name.self = name
        age.self = age
        weight.self = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        speed = (self.weight/self.age*10)
        return speed
    
    def fight(self, other_dog):
        self_strength = self.weight * self.run_speed()

        other_dog_strength = other_dog.run_speed() * other_dog.weight 

        if self_strength > other_dog_strength:
            print('That is a good boy!')
        elif other_dog_strength > self_strength:
            print('strength training tomorrow')
        else:
            print('Its a draw' )    
