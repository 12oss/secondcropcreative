
import os
from PIL import Image

def resize_images(directory, quality=95):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                try:
                    img = Image.open(file_path)
                    width, height = img.size
                    # Determine the scaling factor to fit the longest edge to 1200 pixels
                    scale_factor = 2560 / max(width, height)
                    # Calculate the new dimensions while preserving the aspect ratio
                    new_width = int(width * scale_factor)
                    new_height = int(height * scale_factor)
                    # Resize the image
                    img = img.resize((new_width, new_height), Image.LANCZOS)
                    # Save the resized image with specified quality
                    img.save(file_path, quality=quality)
                    print(f"Resized: {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

# Replace 'directory_path' with the path to the parent directory containing the images
directory_path = '/Users/harriedr_1/Desktop/_dakota'
resize_images(directory_path, quality=65)  # Adjust the quality level as desired
