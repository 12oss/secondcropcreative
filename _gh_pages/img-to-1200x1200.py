import os
from PIL import Image

def resize_images(directory, target_size=(1200, 1200), quality=95):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.tif')):
                file_path = os.path.join(root, file)
                try:
                    img = Image.open(file_path)

                    # Convert CMYK images to RGB
                    if img.mode == "CMYK":
                        img = img.convert("RGB")

                    # Convert the image to RGB mode if it isn't already
                    if img.mode not in ("RGB", "RGBA", "P"):
                        img = img.convert("RGB")

                    width, height = img.size

                    # Determine the padding needed to make the image square
                    if width != height:
                        new_side = max(width, height)
                        new_img = Image.new('RGB', (new_side, new_side), (255, 255, 255))
                        new_img.paste(img, ((new_side - width) // 2, (new_side - height) // 2))
                        img = new_img

                    # Resize the image to the target size
                    img = img.resize(target_size, Image.LANCZOS)

                    # Convert image to sRGB color space if it is in another RGB mode
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Create the 'jpg' folder in the current directory if it doesn't exist
                    jpg_folder = os.path.join(root, 'jpg')
                    if not os.path.exists(jpg_folder):
                        os.makedirs(jpg_folder)

                    # Ensure the file extension is .jpg
                    base = os.path.splitext(file)[0]
                    new_file_path = os.path.join(jpg_folder, f"{base}.jpg")

                    # Save the resized image as JPG with specified quality
                    img.save(new_file_path, 'JPEG', quality=quality)
                    print(f"Resized and converted to sRGB: {new_file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

# Replace 'directory_path' with the path to the parent directory containing the images
directory_path = '/Users/harriedr_1/Desktop/_compress-me'
resize_images(directory_path, quality=65)  # Adjust the quality level as desired
