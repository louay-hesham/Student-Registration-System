from django.http import HttpResponse
import json

def hello(request):
  # n = int(request.POST['n'])
  # n += 1
  n = 33
  print(request.POST)
  print(request.body)
  text = "Indomie Sha3reya %s"%n
  return HttpResponse(json.dumps(text))