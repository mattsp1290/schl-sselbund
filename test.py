import jwt
import requests
from time import sleep
encoded_jwt = jwt.encode({'some': 'payload'}, 'secret', algorithm='HS256')

headers = {'Authorization': "Bearer {}".format(encoded_jwt)}

def read(key):
    r = requests.get('http://localhost:3000/objects/{}'.format(key), headers=headers)
    print(r.status_code)
    print(r.content)

def write(key):
    r = requests.post('http://localhost:3000/objects/{}'.format(key), data={'value': 'new'}, headers=headers)
    print(r.status_code)
    print(r.content)

write('new')
sleep(1)
read('new')