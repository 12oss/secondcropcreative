import os
import subprocess

def resize_images(input_folder, output_folder, max_file_size):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Iterate over all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(('.png', '.jpg', '.jpeg', '.gif')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)

            # Execute ImageMagick command to resize and compress the image
            command = f"convert '{input_path}' -define jpeg:extent={max_file_size} '{output_path}'"
            subprocess.run(command, shell=True)

if __name__ == "__main__":
    input_folder = "/Users/harriedr_1/Desktop/_test-files"  # Change this to your input image folder path
    output_folder = "/Users/harriedr_1/Desktop/_test-files/_resized"  # Change this to your output image folder path
    max_file_size = "4MB"  # Maximum file size limit

    resize_images(input_folder, output_folder, max_file_size)
