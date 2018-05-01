"""StudentRegistrationSystem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from django.views.decorators.csrf import csrf_exempt
from StudentRegistrationSystem.APIs import *


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^register/', csrf_exempt(register_user)),
    url(r'^login/', csrf_exempt(login)),
    url(r'^getdepartments/', csrf_exempt(get_all_departments)),
    url(r'^choosedepartment/', csrf_exempt(choose_department)),
    url(r'^getcourses/', csrf_exempt(get_courses)),
    url(r'^registercourses/', csrf_exempt(register_courses)),
    url(r'^getregisteredcourses/', csrf_exempt(get_registerd_courses)),
    url(r'^hashedlogin/', csrf_exempt(hashed_login))
]
