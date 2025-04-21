import subprocess
import os

# Function to get IPTC caption using ExifTool
def get_iptc_caption(image_path):
    result = subprocess.run(['exiftool', '-IPTC:Caption-Abstract', image_path], stdout=subprocess.PIPE, text=True)
    caption = result.stdout.split(":")[1].strip() if ":" in result.stdout else "No caption available"
    return caption

# Function to process a directory and generate YAML for front matter
def generate_yaml_for_page(directory_path):
    image_data = []

    for filename in os.listdir(directory_path):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            file_path = os.path.join(directory_path, filename)
            caption = get_iptc_caption(file_path)
            # Add each image and its caption as a dictionary
            image_data.append({'filename': filename, 'caption': caption})

    # Sort the image_data list by filename
    image_data.sort(key=lambda x: x['filename'])
    
    return image_data

# Main function
if __name__ == "__main__":
    # Set your image directory path here
    directory_path = '/Users/harriedr/Documents/github/secondcropcreative/_gh_pages/sports/images/2025/20250419-badgers-spring-game/'
    
    # Generate YAML content
    yaml_data = generate_yaml_for_page(directory_path)

    # Set the output file path to be inside the same directory as the images
    output_file = os.path.join(directory_path, '_yaml-image-captions.yaml')

    # Save the YAML data to a file
    with open(output_file, 'w') as yaml_file:
        yaml_file.write("gallery-images:\n")
        for item in yaml_data:
            yaml_file.write(f"  - filename: {item['filename']}\n")
            yaml_file.write(f"    caption: \"{item['caption']}\"\n")
    
    print(f"YAML file saved to {output_file}")
