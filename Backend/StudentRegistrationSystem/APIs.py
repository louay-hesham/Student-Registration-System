from django.http import HttpResponse
from django.core import serializers
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
      hashed_password = decode_password(data['password'])
      user = User()
      user.username = username
      user.password = hashed_password
      user.email = email
      user.save()
      user = User.objects.get(username=username, password=hashed_password, email=email)
      user_data = serializers.serialize('json', [user])
      response = make_success_response(user_data)
  return HttpResponse(json.dumps(response))

def login(request):
  data = extract_data(request)
  username = data['username']
  hashed_password = decode_password(data['password'])
  try:
    user = User.objects.get(username = username, password = hashed_password)
    user_data = serializers.serialize('json', [user])
    response = make_success_response(user_data)
  except:
    response = make_error_response('Incorrect username or password')
  return HttpResponse(json.dumps(response))


def get_all_departments(request):
  departments = Department.objects.all();
  ddepartments_data = serializers.serialize('json', departments)
  response = make_success_response(ddepartments_data)
  return HttpResponse(json.dumps(response))

def choose_department(request):
  data = extract_data(request)
  user_id = data['user_id']
  department_id = data['dep_id']
  user = User.objects.get(id=user_id)
  department = Department.objects.get(id=department_id)
  user.department = department
  user.save()
  user_data = serializers.serialize('json', [user])
  response = make_success_response(user_data)
  return HttpResponse(json.dumps(response))

def get_courses(request):
  data = extract_data(request)
  department_id = data['dep_id']
  department = Department.objects.get(id=department_id)
  courses = Course.objects.filter(department=department)
  courses_data = serializers.serialize('json', courses)
  response = make_success_response(courses_data)
  return HttpResponse(json.dumps(response))

def register_courses(request):
  data = extract_data(request)
  user_id = data['user_id']
  user = User.objects.get(id=user_id)
  registered_courses = Registeration.objects.filter(userid=user)
  for registeration in registered_courses:
    if registeration.courseid.id not in data['courses']:
      registeration.delete()
  for course_code in data['courses']:
    course = Course.objects.get(id=course_code)
    n = Registeration.objects.filter(userid=user, courseid=course).count()
    if n == 0:
      registeration = Registeration()
      registeration.userid = user
      registeration.courseid = course
      registeration.save()

  return get_registerd_courses(request)

def get_registerd_courses(request):
  data = extract_data(request)
  user_id = data['user_id']
  user = User.objects.get(id=user_id)
  registeration = Registeration.objects.filter(userid=user)
  registeration_data = serializers.serialize('json', registeration)
  response = make_success_response(registeration_data)
  return HttpResponse(json.dumps(response))