from excercise4 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for members in self.members:
            if members['name'] == name:
                if members['age'] >= 18:
                    print(f'{member['name']}'s power is: {member['power']}')