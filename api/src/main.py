import json

from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api

from time import sleep

from db import getUserCount

# this is a hack to get the API to wait for the DB to set up
sleep(1)

# simple flask configuration
app = Flask(__name__)
cors = CORS(app)
api = Api(app)


# get route placeholder
class GetPlaceholder(Resource):
    def get(self):
        numberOfUsers = getUserCount()

        return {"numberOfUsers": numberOfUsers}


# post route placeholder
class PostPlaceholder(Resource):
    def post(self):
        body = request.json

        value = body['key']

        return {"key": value}


api.add_resource(PostPlaceholder, '/post-placeholder')
api.add_resource(GetPlaceholder, "/get-placeholder")


if __name__ == '__main__':
    app.run(port='5000', debug=True)
