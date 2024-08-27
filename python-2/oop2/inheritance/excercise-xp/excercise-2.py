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
        
