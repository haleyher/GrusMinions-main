from flask import Flask, request, jsonify
import pickle
import numpy as np
from utils import predict_image

app = Flask(__name__)
image = '/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png'

@app.route('/api/predict', methods=['POST'])
def predicting():
    data = request.get_json(force=True)  # Get data posted as a json
    image = data['file']
    # image = '/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png'
    prediction = predict_image(image)
    return jsonify({'prediction': prediction}) 
    # return prediction
    

@app.route('/')
def index():
    
    prediction = predict_image(image)
    # return jsonify({'prediction': prediction}) 
    bob = f'naxjcdns {prediction[0]}'

    return bob
    
    # return 'Web App with Python Flask!'
   

if __name__ == '__main__':
    app.run(debug=True)

