FROM python

WORKDIR /usr/src/app

COPY apiserver.py apiserver.py
COPY sql.properties sql.properties

RUN pip install mysql-connector-python
RUN pip install Flask
RUN pip install ConfigParser
RUN pip install -U flask-cors

EXPOSE 5000

CMD ["python3", "apiserver.py"]