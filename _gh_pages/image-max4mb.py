import os
import subprocess

def resize_images(input_folder, output_folder, max_file_size_mb):
    max_file_size_bytes = max_file_size_mb * 1024 * 1024

    for root, _, files in os.walk(input_folder):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                input_path = os.path.join(root, filename)

                # Skip files already under max size
                if os.path.getsize(input_path) <= max_file_size_bytes:
                    print(f"Skipping (under {max_file_size_mb}MB): {input_path}")
                    continue

                # Build output folder path
                rel_path = os.path.relpath(root, input_folder)
                output_dir = os.path.join(output_folder, rel_path)
                os.makedirs(output_dir, exist_ok=True)

                output_path = os.path.join(output_dir, filename)

                # Use ImageMagick v7+ syntax
                command = f"magick '{input_path}' -define jpeg:extent={max_file_size_mb}MB '{output_path}'"
                subprocess.run(command, shell=True)
                print(f"Compressed: {input_path} → {output_path}")

if __name__ == "__main__":
    input_folder = "/Users/harriedr/Desktop/_compress-me"
    output_folder = "/Users/harriedr/Desktop/_compress-me/_resized"
    max_file_size_mb = 5

    resize_images(input_folder, output_folder, max_file_size_mb)
