from flask import Flask, request, jsonify
from utils import predict_image

app = Flask(__name__)
# image = '/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png'



@app.route('/api/predict', methods=['POST'])
def predicting():
    data = request.get_json(force=True)  # Get data posted as a json
    image = (data['file'])
    prediction = predict_image(image)
    return jsonify({'prediction': prediction}) 

@app.route('/test', methods=['POST'])
def test():
    return "Hello from FLASK"

@app.route('/')
def index():
    return "Hello from FLASK"
   

if __name__ == '__main__':
    app.run(debug=True)

