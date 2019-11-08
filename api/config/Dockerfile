FROM python:3.6-alpine

WORKDIR /lib/src
COPY src .

RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev 

RUN pip install Flask flask-restful flask_cors mysql-connector-python mysql-connector-python-rf

CMD FLASK_ENV=development FLASK_APP=main.py flask run  --host 0.0.0.0
