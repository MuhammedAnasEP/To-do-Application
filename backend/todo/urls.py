from django.urls import path
from todo import views

app_name = 'blog'

urlpatterns = [
    path('list', views.ListView.as_view()),
    path('new', views.PostTodo),
    path('delete/<int:pk>/', views.DeleteTodo),
    path('mark/<int:pk>/', views.MarkCompleated)
]