FROM python

WORKDIR /usr/src/app

COPY apiserver.py apiserver.py
COPY sql.properties sql.properties

RUN pip install mysql-connector-python
RUN pip install Flask
RUN pip install ConfigParser

CMD ["python3", "apiserver.py"]