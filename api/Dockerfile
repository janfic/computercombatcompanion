FROM python

WORKDIR /usr/src/app

COPY apiserver.py apiserver.py
COPY sql.properties sql.properties

RUN pip install mysql-connector-python
RUN pip install Flask
RUN pip install ConfigParser
RUN pip install -U flask-cors

RUN python3 -c "import json, urllib.request; print(json.loads(urllib.request.urlopen('https://www.howsmyssl.com/a/check').read().decode('UTF-8'))['tls_version'])"

EXPOSE 5000

CMD ["python3", "apiserver.py"]