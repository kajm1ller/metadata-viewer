# EXIF Metadata Viewer

This project is a simple EXIF metadata viewer that allows users to upload an image, view its EXIF metadata, and open the location on Google Maps if geo-location data is present.

## Features

- Drag and drop file upload area with a styled button
- Support for multiple image formats including HEIC, JPEG, and PNG
- Displays EXIF metadata in a readable table format
- Opens Google Maps with geo-location coordinates if present in the EXIF data
- Handles cases where no EXIF data is found

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
