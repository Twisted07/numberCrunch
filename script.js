const btn = document.querySelector("#btnLoad");
const imageFile = document.querySelector("#imgFile");
let canvas;
let context;
let imageData;
const image = document.querySelector(".input-image")
const outputImage = document.querySelector(".output-image");
// const image = new Image();
// const fileReader = new FileReader();


imageFile.addEventListener("change", handleClick);

function handleClick(e) {
    fileObject = imageFile.files[0];
    fileURL = window.URL.createObjectURL(fileObject);
    console.log(`This is the file URL ${fileURL}`);

    image.src = fileURL;

    // console.log(`This is the file object: ${fileObject}`)
    fileReaderObject = new FileReader();
    fileReaderObject.readAsArrayBuffer(fileObject);

    fileReaderObject.onload = (ReaderEvent) => {
        // console.log("Now inside the onload function");

        bufferResult = ReaderEvent.target.result;
        // console.log(`Buffer result: ${bufferResult}`)
        
        unsignedBuffer = new Uint8Array(bufferResult);


        for (i = 2; i < unsignedBuffer.length; i += 3) {
            unsignedBuffer[i] = 255;
            console.log(unsignedBuffer[i]);
        }

        console.log(unsignedBuffer);

        // currentArray = unsignedBuffer;
        // row = Math.floor(currentArray.length / 3);
        // column = 4
        // iterator = 0
        // newArray = []
        // reducedArray = []

        // //* Converting the current Array to a 2D Array

        // for (i = 0; i < row; i++) {
	    //     newArray[i] = [];
	    //     reducedArray[i] = [];
        
	    //     for (j = 0; j < column; j++) {
	    //         newArray[i][j] = currentArray[iterator++]
        //         reducedArray[i][j] = newArray[i][j] / 255;
	    //     }
        // }
    

        // console.log(newArray)
        // console.log(reducedArray)

        //TODO: Create a function that converts rgba to rgb
        //* The function is expected to perform arithmetic operations on the newArray
        //* Then parse the output into another array with same number of rows but 3 columns (rgb)

        //* The first column takes the calculation for the R value
        //* ((1 - newArray[i][3]) * newArray[i][0]) + (newArray[i][3] * newArray[i][0])

        //* The second column takes the calculation for the G value
        //* ((1 - newArray[i][3]) * newArray[i][1]) + (newArray[i][3] * newArray[i][1])

        //* The third column takes the calculation for the B value
        //* ((1 - newArray[i][3]) * newArray[i][2]) + (newArray[i][3] * newArray[i][2])

        // rgbColumn = 3
        // iterator = 0
        // rgbArray = []

        // for (i = 0; i < row; i++) {
        //     rgbArray[i] = [];
        //     reducedArray[i]
        //     for (j = 0; j < rgbColumn; j++) {
	    //         rgbArray[i][j] = ((1 - reducedArray[i][3]) * reducedArray[i][j]) + (reducedArray[i][3] * reducedArray[i][j]);
        //         // console.log(rgbArray[i][j])
                
        //         //* Convert from gamma compressed value to linear intensity value
        //         if (rgbArray[i][j] <= 0.04045) {
        //             rgbArray[i][j] = rgbArray[i][j] / 12.92;
        //         } else {
        //             rgbArray[i][j] = ((rgbArray[i][j] + 0.055) / 1.055) ** 2.4;
        //         }
	    //     }
            
        // }

        // console.log(rgbArray)
        // console.log(`done loading`)

        //TODO: Convert RGB values to a single linear value, C linear
        //* Compute Clinear = 0.2126 R + 0.7152 G + 0.0722 B

        // const cLinearArray = [];
        // sRGB = [];

        // for (i = 0; i < row; i++) {
        //     cLinearArray[i] = (0.2126 * rgbArray[i][0]) + (0.7152 * rgbArray[i][1]) + (0.0722 * rgbArray[i][2]);
        //     // console.log(`Position ${i} holds ${cLinearArray[i]}`)
            
        //     //TODO: Convert the C linear values to sRGB values
        //     //* 12.92 * C linear ---> if C linear <= 0.0031308
        //     //* 1.055 * C linear **1/2.4 - 0.055 ---> else
            
        //     if (cLinearArray[i] <= 0.0031308) {sRGB[i] = 12.92 * cLinearArray[i];}
        //     else {sRGB[i] = (1.055 * (cLinearArray[i] ** (1/2.4))) - 0.055;}
        // }
        // console.log(cLinearArray);
        // console.log(sRGB);   

        // for(i = 0; i < unsignedBuffer.length; )
        //* CONVERT sRGB to BLOB
        blobImage = new Blob([unsignedBuffer], {type: "image/jpeg"});
        console.log(blobImage);

        //* CREATE URL from BLOB
        const blobUrl = URL.createObjectURL(blobImage);

        //* PARSE URL INTO OUTPUTIMAGE SRC
        outputImage.src = blobUrl;


    }

    // console.log(`File reader object has been initialized`)
    // fileReaderObject.readAsArrayBuffer(fileObject);
    // fileReaderObject.result
    // console.log(`Ready state: ${fileReaderObject.readyState}`)
    // bufferResult = fileReaderObject.result
    // unsignedBuffer = new Uint8Array(bufferResult);
    // console.log("This is the unsigned Buffer content: ", unsignedBuffer);


}