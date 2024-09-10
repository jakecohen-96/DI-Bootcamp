from excercise2 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained is True

    def play(self, *dogs_names):
        print(f'{dogs_names} all play together')
    
    def do_a_trick(self):
        if self.trained is True:
            tricks = [
                f'{self.name} does a barrel roll',
                f'{self.name} stands on his back legs',
                f'{self.name} shakes your hand ',
                f'{self.name} plays with the ball',
            ]
            return tricks
        

dog1 = PetDog('Kinder', 4, 40)

dog1.train()
print(dog1.do_a_trick())