from flask import Flask, request, jsonify
import pickle
import numpy as np
from fastai.vision.all import *

app = Flask(__name__)

# model = pickle.load(open('/Users/honiluna/Desktop/GrusMinions-main/recyclequest/result-resnet50.pkl', encoding='windows-1252'))
# pickled_model = pickle.load(open('/Users/honiluna/Desktop/GrusMinions-main/recyclequest/result-resnet50.pkl', 'rb'))
# with open('/Users/honiluna/Desktop/GrusMinions-main/recyclequest/result-resnet50.pkl', 'rb') as file: 
#     model = pickle.load(file)
model = load_learner('/Users/honiluna/Desktop/GrusMinions-main/recyclequest/result-resnet50.pkl')

def predict_image(image):
    # Receive uploaded file from the request
    # uploaded_file = request.files['file']
    
    # Save the uploaded file temporarily
    # uploaded_file.save(image)


    # Predict value for the uploaded file
    prediction = model.predict(image)
    class_name = str(prediction[0])
    class_number = int(prediction[1])
    probability = float(prediction[2][class_number].numpy())

    result = {
        'class_name': class_name,
        'class_number': class_number,
        'probability': probability
    }

    return result



