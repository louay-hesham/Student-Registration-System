# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Course(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=10)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=75)  # Field name made lowercase.
    credithours = models.IntegerField(db_column='CreditHours')  # Field name made lowercase.
    instructorname = models.CharField(db_column='InstructorName', max_length=100)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase.
    department = models.ForeignKey('Department', models.DO_NOTHING, db_column='Department', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Course'


class Department(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=10)  # Field name made lowercase.
    name = models.CharField(db_column='Name', unique=True, max_length=100)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Department'


class Registeration(models.Model):
    courseid = models.ForeignKey(Course, models.DO_NOTHING, db_column='CourseID', primary_key=True)  # Field name made lowercase.
    userid = models.ForeignKey('User', models.DO_NOTHING, db_column='UserID')  # Field name made lowercase.
    registrationdate = models.DateTimeField(db_column='RegistrationDate')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Registeration'
        unique_together = (('courseid', 'userid'),)


class User(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', unique=True, max_length=50)  # Field name made lowercase.
    username = models.CharField(db_column='Username', unique=True, max_length=30)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=150)  # Field name made lowercase.
    registrationdate = models.DateTimeField(db_column='RegistrationDate')  # Field name made lowercase.
    department = models.ForeignKey(Department, models.DO_NOTHING, db_column='Department', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'User'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
