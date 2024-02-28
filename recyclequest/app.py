
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('recyclequest/result-resnet50.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Receive input data from the request
    data = request.json
    
    # Preprocess input data
    # Example: Scale input data using StandardScaler
    input_data = data['input']
    input_data_scaled = scaler.transform([input_data])
    
    # Make predictions using the loaded model
    prediction = model.predict(input_data_scaled)[0]
    
    # Make predictions using the loaded model
    prediction = model.predict([data['input']])[0]  # Assuming 'input' is the key for input data
    
    # Return the predictions
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)

