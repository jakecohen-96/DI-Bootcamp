sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]


products = {}
customers = {}
total = 0

for sale in sales_data:
    # part 1: total revenue
    total += (sale['price'] * sale['quantity'])

    # part 1: product totals
    if sale['product'] in products:
        products[sale['product']] += sale['quantity']
    else:
        products[sale['product']] = sale['quantity']

    # part 2: customer info
    if sale['customer_id'] in customers:
        customers['total'] += (sale['price'] * sale['quantity'])
    else:
        customers['id'] = sale['customer_id']
        customers['total'] = (sale['price'] * sale['quantity'])

    # add totals
    sale['total'] = sale['price'] 

print(total)
print(products)
print(customers)