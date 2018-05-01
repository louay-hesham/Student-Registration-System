import json

def decode_password(password):
  numbers = password['words']
  n = int(password['sigBytes'] / 8)
  hashed = bytes([])
  for b in numbers:
    if b < 0:
      b += (-2*b)
    hashed += b.to_bytes(n, 'big')
  return hashed

def extract_data(request):
  json_string = request.body.decode()
  return json.loads(json_string)

def make_error_response(message):
  return {
    'status': 'error',
    'error_message': message
  }

def make_success_response(data):
  return {
    'status': 'success',
    'data': data
  }