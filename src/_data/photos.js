const fs = require("fs");
const path = require("path");

function getFilesFromDir(dir, folder) {
    return fs
        .readdirSync(dir)
        .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
        .map((file) => `/assets/images/rv-photos/${folder}/${file}`);
}

module.exports = () => {
    const photosDir = path.join(__dirname, "../assets/images/rv-photos/");
    const fifthwheelDir = path.join(
        __dirname,
        "../assets/images/rv-photos/5th-wheel",
    );
    const traveltrailerDir = path.join(
        __dirname,
        "../assets/images/rv-photos/travel-trailer",
    );
    const classADir = path.join(
        __dirname,
        "../assets/images/rv-photos/class-a",
    );
    const classBDir = path.join(
        __dirname,
        "../assets/images/rv-photos/class-b",
    );
    const classCDir = path.join(
        __dirname,
        "../assets/images/rv-photos/class-c",
    );
    const camperDir = path.join(__dirname, "../assets/images/rv-photos/camper");

    return {
        fifthwheel: getFilesFromDir(fifthwheelDir, "5th-wheel"),
        traveltrailer: getFilesFromDir(traveltrailerDir, "travel-trailer"),
        classa: getFilesFromDir(classADir, "class-a"),
        classb: getFilesFromDir(classBDir, "class-b"),
        classc: getFilesFromDir(classCDir, "class-c"),
        camper: getFilesFromDir(camperDir, "camper"),
    };

    // return fs
    //     .readdirSync(photosDir)
    //     .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    //     .map((file) => `/assets/images/rv-photos/${file}`);
};
