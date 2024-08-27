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
        super().family_presentation()
    
incredibles_family = TheIncredibles("Incredibles", 'Incredibles')
incredibles_family.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperMind'}
]

incredibles_family.incredible_presentation()

incredibles_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='JackJack')

incredibles_family.incredible_presentation()