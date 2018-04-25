from views import login, signup
from django.conf.urls import url, include

urlpatterns = [
    # url(r'^app/new', api_application.new, name="app_new"),
    url(r'^user/login', login, name="user_login"),
    url(r'^user/signup', signup, name="user_signup"),
]
