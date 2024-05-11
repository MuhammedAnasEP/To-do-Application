from django.urls import path
from todo import views

app_name = 'blog'

urlpatterns = [
    path('list', views.ListView.as_view()),
    path('new', views.postTodo.as_view()),
    path('delete/<int:pk>/', views.deleteTodo.as_view()),
    path('mark/<int:pk>/', views.MarkCompleated.as_view())
]