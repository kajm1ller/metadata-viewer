document.getElementById('uploadContainer').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.type === 'image/heic' || file.type === 'image/heif') {
            convertHeicToJpeg(file);
        } else {
            displayImage(file);
        }
    }
}

function convertHeicToJpeg(file) {
    heic2any({
        blob: file,
        toType: "image/jpeg",
    }).then(function (result) {
        const convertedFile = new Blob([result], { type: "image/jpeg" });
        displayImage(convertedFile);
    }).catch(function (error) {
        console.error("Error converting HEIC to JPEG:", error);
    });
}

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById('selectedImage');
        img.src = e.target.result;
        img.style.display = 'block';
        extractExifData(file);
    };
    reader.readAsDataURL(file);
}

function extractExifData(file) {
    const exifDataContainer = document.getElementById('exifDataContainer');
    const exifDataElement = document.getElementById('exifData');
    const mapButton = document.getElementById('mapButton');

    EXIF.getData(file, function () {
        const allMetaData = EXIF.getAllTags(this);
        const formattedData = formatExifData(allMetaData);
        exifDataElement.innerHTML = formattedData;
        exifDataContainer.style.display = 'block';

        // Check for GPS data
        const lat = EXIF.getTag(this, "GPSLatitude");
        const lon = EXIF.getTag(this, "GPSLongitude");

        if (lat && lon) {
            const latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
            const lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";
            const latitude = convertDMSToDD(lat, latRef);
            const longitude = convertDMSToDD(lon, lonRef);

            mapButton.style.display = 'block';
            mapButton.onclick = function () {
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
                window.open(mapUrl, '_blank');
            };
        } else {
            mapButton.style.display = 'none';
        }
    });
}

function formatExifData(data) {
    let table = '<table><tr><th>Tag</th><th>Value</th></tr>';
    for (const tag in data) {
        if (data.hasOwnProperty(tag)) {
            let value = Array.isArray(data[tag]) ? data[tag].join(', ') : data[tag];
            if (tag === 'MakerNote') {
                value = truncate(value, 100); // Truncate MakerNote value to 100 characters
            }
            table += `<tr><td>${tag}</td><td>${value}</td></tr>`;
        }
    }
    table += '</table>';
    return table;
}

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
}

function convertDMSToDD(dms, ref) {
    const degrees = dms[0];
    const minutes = dms[1];
    const seconds = dms[2];
    let dd = degrees + (minutes / 60) + (seconds / 3600);
    if (ref === "S" || ref === "W") {
        dd = dd * -1;
    }
    return dd;
}
