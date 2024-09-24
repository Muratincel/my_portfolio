from django.shortcuts import render,redirect
from django.core.mail import send_mail

# Create your views here.

def index_view(request):
    message = request.session.pop('message', '')
    return render(request, "index.html", {'message': message})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message_content = request.POST.get('message')
    
        if name and email and message_content:
            try:
                email_body = f'Name: {name}\nEmail: {email}\n\nMessage:\n{message_content}'

                send_mail(
                    f'New Contact from {name}',
                    email_body,
                    email,
                    ['muratincel90@gmail.com'],
                )

                request.session['message'] = 'Thank you for reaching out!'
            
            except Exception as e:
                request.session['message'] = f'Error sending mail: {e}'
        else:
            request.session['message'] = 'Please fill out all fields.'

        return redirect('index')
        
    message = request.session.pop('message', '')
    return render(request, 'index.html', {'message': message})
