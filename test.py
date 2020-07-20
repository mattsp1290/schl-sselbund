import jwt
import requests
encoded_jwt = jwt.encode({'some': 'payload'}, 'secret', algorithm='HS256')
url = 'http://localhost:3000/objects'
headers = {'Authorization': "Bearer {}".format(encoded_jwt)}

r = requests.get(url, headers=headers)
print(r)