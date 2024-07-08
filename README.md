# EXIF Metadata Viewer

This project is a simple EXIF metadata viewer that allows users to upload an image, view its EXIF metadata, and open the location on Google Maps if geo-location data is present.

## Features

- Drag and drop file upload area with a styled button
- Support for multiple image formats including HEIC, JPEG, and PNG
- Displays EXIF metadata in a readable table format
- Opens Google Maps with geo-location coordinates if present in the EXIF data
- Handles cases where no EXIF data is found

## Demo

![EXIF Metadata Viewer Screenshot](screenshot.png)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/exif-metadata-viewer.git
    cd exif-metadata-viewer
    ```

2. Open the project directory and start a local server. You can use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode or use Python's built-in HTTP server:

    ```bash
    # For Python 3.x
    python -m http.server
    ```

3. Open your web browser and navigate to `http://localhost:8000` (or the appropriate port if different).

## Usage

1. Click on the upload area to select a file or drag and drop an image file into the area.
2. View the EXIF metadata displayed below the image.
3. If the image contains geo-location data, click the "Open in Google Maps" button to view the location on Google Maps.

## Dependencies

- [EXIF.js](https://github.com/exif-js/exif-js)
- [heic2any](https://github.com/alexcorvi/heic2any)
- FontAwesome for icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
