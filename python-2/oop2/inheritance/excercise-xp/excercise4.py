class Family():
    def __init__(self, members, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False     

    def family_presentation(self):
        print(f"The {self.last_name} family consists of:")
        for member in self.members:
            print(member)

my_family = Family("George", "Smith")

my_family.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

print(my_family.family_presentation())
print(my_family.born(name="Emily", age=0, gender="Female", is_child=True))
print(my_family.family_presentation())
print(my_family.is_18('Michael'))
print(my_family.is_18("Emily"))
