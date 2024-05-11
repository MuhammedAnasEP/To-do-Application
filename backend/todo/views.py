from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework import status


class ListView(ListAPIView):   
    permission_classes = [IsAuthenticated]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filter_backends = (SearchFilter,)
    search_fields = ("title",)


class MarkCompleated:
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        try:
            instance = Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        instance.completed = True
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
 

class PostTodo:
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
 
 
class DeleteTodo:
    permission_classes = [IsAuthenticated]

    def deleteTask(self, request, pk):
        try:
            instance = Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)