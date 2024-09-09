import os
from PIL import Image
import subprocess

def resize_images(directory, quality=95):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.tif')):
                file_path = os.path.join(root, file)
                
                # Split file path to add "_resized" before the file extension
                file_name, file_ext = os.path.splitext(file_path)
                temp_file_path = file_name + "_resized" + file_ext  # Temporary resized image
                
                try:
                    img = Image.open(file_path)
                    width, height = img.size

                    # Determine the scaling factor to fit the longest edge to 2560 pixels
                    scale_factor = 2560 / max(width, height)

                    # Calculate the new dimensions while preserving the aspect ratio
                    new_width = int(width * scale_factor)
                    new_height = int(height * scale_factor)

                    # Resize the image
                    img = img.resize((new_width, new_height), Image.LANCZOS)

                    # Save the resized image without altering the original
                    img.save(temp_file_path, quality=quality)

                    print(f"Resized: {temp_file_path}")

                    # Use exiftool to copy metadata (EXIF, IPTC, XMP, etc.) from the original to the resized image
                    subprocess.run(['exiftool', '-overwrite_original', '-tagsfromfile', file_path, temp_file_path])

                    # Synchronize IPTC and XMP metadata to prevent out-of-sync warnings
                    subprocess.run(['exiftool', '-iptcdigest', '-overwrite_original', temp_file_path])

                    # Replace the original file with the resized one
                    os.replace(temp_file_path, file_path)

                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
                    # Remove the temp file if something goes wrong
                    if os.path.exists(temp_file_path):
                        os.remove(temp_file_path)

# Replace 'directory_path' with the path to the parent directory containing the images
directory_path = '/Users/harriedr_1/Desktop/_compress-me'
resize_images(directory_path, quality=65)  # Adjust the quality level as desired
