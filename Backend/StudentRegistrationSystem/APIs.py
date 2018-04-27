from django.http import HttpResponse
import json
from backend.models import *
import math
from StudentRegistrationSystem.helper_functions import *

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

def login(request):
  data = extract_data(request)
  username = data['username']
  hashed_password = decode_password(data['password']['words'])
  try:
    user = User.objects.get(username = username, password = hashed_password)
    response = success_response
  except:
    response = make_error_response('Incorrect username or password')
  return HttpResponse(json.dumps(response))