# Django 5.X Project

A new Django 5.2.4 project created with Python 3.13.3.

## Setup

1. **Activate the virtual environment:**
   ```bash
   source django_env/bin/activate
   ```

2. **Navigate to the project directory:**
   ```bash
   cd myproject
   ```

3. **Install dependencies (if needed):**
   ```bash
   pip install -r ../requirements.txt
   ```

## Running the Development Server

```bash
python manage.py runserver
```

The development server will start at `http://127.0.0.1:8000/`

## Project Structure

```
workspace/
├── django_env/          # Virtual environment
├── myproject/           # Django project directory
│   ├── manage.py        # Django management script
│   ├── myproject/       # Project configuration
│   │   ├── __init__.py
│   │   ├── settings.py  # Project settings
│   │   ├── urls.py      # URL configuration
│   │   ├── wsgi.py      # WSGI configuration
│   │   └── asgi.py      # ASGI configuration
│   └── db.sqlite3       # SQLite database (created after migrations)
└── requirements.txt     # Python dependencies

```

## Common Django Commands

- **Create a new app:**
  ```bash
  python manage.py startapp appname
  ```

- **Make migrations:**
  ```bash
  python manage.py makemigrations
  ```

- **Apply migrations:**
  ```bash
  python manage.py migrate
  ```

- **Create superuser:**
  ```bash
  python manage.py createsuperuser
  ```

- **Collect static files:**
  ```bash
  python manage.py collectstatic
  ```

## Version Information

- Django: 5.2.4
- Python: 3.13.3
- Database: SQLite (default)

## Next Steps

1. Create your first Django app with `python manage.py startapp appname`
2. Configure your models, views, and templates
3. Set up your URL patterns
4. Create a superuser to access the admin panel at `/admin/`

Happy coding!
