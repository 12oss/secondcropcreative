import os
import subprocess
import csv
import json

def extract_metadata(image_path):
    command = ['exiftool', '-json', image_path]
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    if result.returncode == 0:
        return json.loads(result.stdout.strip())  # Parse JSON string to dictionary or list of dictionaries
    else:
        print(f"Error extracting metadata for {image_path}: {result.stderr}")
        return None

def process_images_in_folder(folder_path):
    image_metadata_list = []
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename.endswith('.jpg') or filename.endswith('.jpeg'):
                image_path = os.path.join(root, filename)
                metadata = extract_metadata(image_path)
                if metadata:
                    if isinstance(metadata, list):  # Check if metadata is a list of dictionaries
                        image_metadata_list.extend(metadata)
                    elif isinstance(metadata, dict):  # Check if metadata is a single dictionary
                        image_metadata_list.append(metadata)
                    else:
                        print(f"Unexpected metadata format for {image_path}")
                else:
                    print(f"No metadata extracted for {image_path}")
    return image_metadata_list

def main():
    folder_path = '/Users/harriedr_1/Documents/github/secondcropcreative/_gh_pages/sports/images'
    image_metadata_list = process_images_in_folder(folder_path)
    
    csv_file_path = '/Users/harriedr_1/Documents/github/secondcropcreative/_gh_pages/_data/sports-images.csv'
    with open(csv_file_path, 'w', newline='') as csvfile:
         fieldnames = ['SourceFile', 'ExifToolVersion', 'CreateDate', 'ModifyDate', 'Make', 'Model', 'ShutterSpeedValue',
         'ApertureValue', 'SubjectDistance', 'MeteringMode', 'Flash', 'FocalLength', 'ExposureMode', 'FocalLengthIn35mmFormat', 'LensInfo',
         'City', 'Province-State', 'By-line', 'Caption-Abstract', 'CopyrightNotice', 'Description', 'Creator' ]  # Adjust fieldnames as needed
         writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
         writer.writeheader()
         for metadata in image_metadata_list:
            if isinstance(metadata, dict):  # Check if metadata is a dictionary
                # Filter metadata to include only fields present in fieldnames
                filtered_metadata = {key: metadata.get(key, '') for key in fieldnames}
                writer.writerow(filtered_metadata)
            else:
                print(f"Unexpected metadata format: {metadata}")

if __name__ == "__main__":
    main()
