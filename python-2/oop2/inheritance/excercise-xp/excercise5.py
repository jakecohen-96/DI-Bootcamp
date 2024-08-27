from excercise4 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old no power yet!")
                
    def incredible_presentation(self):
        print("Here is our powerful family:")
        Family().family_presentation()