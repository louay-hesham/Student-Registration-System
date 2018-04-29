import json
from backend.models import *
import math

def decode_password(numbers):
  hashed = bytes([])
  for b in numbers:
    if b < 0:
      b += (-2*b)
    hashed += b.to_bytes(4, 'big')
  text = bytes([])
  for b in hashed:
    i = math.floor( (b / 256) * 95 + 32)
    text += i.to_bytes(1, 'big')
  return text

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