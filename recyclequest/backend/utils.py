from fastai.vision.all import *
from flask import Flask
import numpy as np
from fastai.vision.all import *
from PIL import Image



app = Flask(__name__)

model = load_learner('result-resnet50.pkl')

def predict_image(image):
 
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



