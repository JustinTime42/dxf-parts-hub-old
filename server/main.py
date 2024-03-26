from flask import Flask, jsonify, request
from flask_cors import CORS
import ezdxf

app = Flask(__name__)
CORS(app, origins=['http://127.0.0.1:5000'])

@app.route('/api/generate_gasket', methods=['POST'])
def generate_gasket():
    data = request.get_json()
    inside_diameter = float(data.get('inside_diameter'))
    outside_diameter = float(data.get('outside_diameter'))
    rows = int(data.get('rows'))
    cols = int(data.get('cols'))
    spacing = float(data.get('spacing'))
    file_name = data.get('file_name')
    doc = ezdxf.new()
    msp = doc.modelspace()

    if rows > 1 and cols > 1:
        # Define grid parameters
        grid_spacing = spacing + outside_diameter # Spacing between shapes in the grid
        done = 0
        
        for i in range(cols):            
            for j in range(rows):
                x_offset = i * grid_spacing
                y_offset = j * grid_spacing

                # Calculate coordinates for inside and outside circles with offsets
                inside_circle = msp.add_circle(center=(x_offset, y_offset), radius=inside_diameter/2)
                outside_circle = msp.add_circle(center=(x_offset, y_offset), radius=outside_diameter/2)
                done += 1
    else:
        inside_circle = msp.add_circle(center=(0, 0), radius=inside_diameter/2)
        outside_circle = msp.add_circle(center=(0, 0), radius=outside_diameter/2)

    # Save the DXF file
    doc.header['$INSUNITS'] = 1 # Set units to inches
    doc.header['$MEASUREMENT'] = 0 # Set measurement to english
    doc.saveas('{}.dxf'.format(file_name))
    return jsonify({
        'message': '{}.dxf generated successfully'.format(file_name),
    })

if __name__ == '__main__':
    app.run(debug=True)
