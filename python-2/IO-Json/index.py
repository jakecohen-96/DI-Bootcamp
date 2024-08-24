import json

data = {
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}

json_file = "file.json"

with open(json_file, 'w') as file_obj:
    json.dump(data, file_obj, indent = 2, sort_keys=True)

with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)

children = data.get("children", [])
for i, child in enumerate(children):
    if child == 'Alice':
        favorite_color = 'Yellow'
    elif child == 'Bob':
        favorite_color = 'Blue'
    else:
        favorite_color = 'Unknown'
    children[i] = {"name": child, "favorite_color": favorite_color}
    
data["children"] = children

print(data)

with open(json_file, 'w') as file_obj:
    json.dump(data, file_obj, indent = 2, sort_keys=True)

    
