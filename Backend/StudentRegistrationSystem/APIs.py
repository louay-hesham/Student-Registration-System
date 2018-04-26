from django.http import HttpResponse
import json
from backend.models import *
import math

success_response = { 'status': 'success' }

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

def register_user(request):
  data = extract_data(request)
  username = data['username']
  email = data['email']
  try:
    User.objects.get(username=username)
    response = make_error_response('Username already exists')
  except:
    try:
      User.objects.get(email=email)
      response = make_error_response('Email already used')
    except:
      hashed_password = decode_password(data['password']['words'])
      user = User()
      user.username = username
      user.password = hashed_password
      user.email = email
      user.save()
      response = success_response
  return HttpResponse(json.dumps(response))